import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { assocPath, dissocPath, pipe } from 'ramda'
import {useState, useEffect} from 'react'
import { StencilContext } from '../context'
import { Accounts } from './accounts'
import { SelectAddDelete } from '../../../components/select-add-delete'
import styles from './config.module.scss'

export const Config = ({}) => {
  const {stencil, config, setConfig} = useContext(StencilContext)
  const [openapiUrl, setOpenapiUrl] = useState()
  const activeOpenapi = config?.openapiUrls?.[config?.activeOpenapiUrl]
  const servers = activeOpenapi?.servers || stencil?.doc?.servers.reduce((acc, s) => ({...acc, [s.url]: {accounts: []}}), {}) || []
  const activeServerUrl = activeOpenapi?.activeServerUrl
  const accounts = config?.openapiUrls?.[config?.activeOpenapiUrl]?.servers?.[activeServerUrl]?.accounts
  const activeAccount = accounts?.find(account => account.isActive)
  const setAccounts = accounts => {
    setConfig(current => assocPath(
      ['openapiUrls', current.activeOpenapiUrl, 'servers', activeServerUrl, 'accounts'],
      accounts,
      current
    ))
  }
  if (!config) return
  return <div>
    <div className={styles.items}>
			<div>
				<SelectAddDelete
          label='Openapi document'
          onClickDelete={() => 
              setConfig(curr => pipe(
              assocPath(['activeOpenapiUrl'], 'local'),
              dissocPath(['openapiUrls', curr.activeOpenapiUrl])
            )(curr))
          }
          onClickOption={option => 
            setConfig(assocPath(['activeOpenapiUrl'], option.label))
          }
					activeOption={{ label: config?.activeOpenapiUrl, canDelete: config.activeOpenapiUrl !== 'local' }}
          otherOptions={Object.keys(config.openapiUrls).filter(url => config.activeOpenapiUrl !== url).map(url => ({ label: url}))}
					addComponent={({close}) => <AddOpenApiForm close={close} config={config} setConfig={setConfig} />}
				/>
			</div>
      <div>
        {stencil &&
          <SelectAddDelete
            label='Server url'
            onClickDelete={() => {
              setConfig(curr => pipe(
                dissocPath(['openapiUrls', curr.activeOpenapiUrl, 'servers', activeServerUrl]),
                dissocPath(['openapiUrls', curr.activeOpenapiUrl, 'activeServerUrl']),
              )(curr))
            }}
            onClickOption={option => {
              setConfig(
                current => assocPath([
                  'openapiUrls',
                  current.activeOpenapiUrl,
                  'activeServerUrl'
                ], option.label, current)
              )
            }}
            activeOption={{ label: activeServerUrl, canDelete: !stencil.doc.servers.some(server => server.url === activeServerUrl) }}
            otherOptions={Object.keys(servers).filter(url => url !== activeServerUrl).map(url => ({label: url}))}
            addComponent={({close}) => <AddServerUrlForm close={close} config={config} setConfig={setConfig} />}
          />
        }
      </div>
      <div>
        {stencil && activeServerUrl &&
          <SelectAddDelete
            label='Account'
            onClickDelete={() => {
              setConfig(
                current => assocPath([
                  'openapiUrls',
                    current.activeOpenapiUrl,
                    'servers',
                    activeServerUrl,
                    'accounts'
                ], accounts.filter(a => a.email !== activeAccount.email), current)
              )
            }}
            onClickOption={option => {
              setConfig(
                current => assocPath([
                  'openapiUrls',
                  current.activeOpenapiUrl,
                  'servers',
                  activeServerUrl,
                  'accounts'
                ], accounts.map(a => ({...a, isActive: option.label === a.email})), current)
              )
            }}
            activeOption={activeAccount ? { label: activeAccount.email, canDelete: true} : {label: 'Unauthenticated', canDelete: false}}
            otherOptions={[...(activeAccount ? [{label: 'Unauthenticated'}] : []), ...(accounts?.filter(account => !account.isActive).map(account => ({label: account.email})) || [])]}
            addComponent={({close}) => <AddAccountForm setAccounts={setAccounts} accounts={accounts} stencil={stencil} close={close} config={config} setConfig={setConfig} />}
          />
        }
      </div>
    </div>
  </div>
}

const AddOpenApiForm = ({config, setConfig, close}) => {
	const {register, handleSubmit} = useForm()
	const [error, setError] = useState()
	return (
		<form
			className={styles['add-form']}
			onSubmit={handleSubmit(async ({url}) => {

				try {
					const res = await fetch(url)
					const json = await res.json()
				} catch (err) {
					console.error('Error fetching openapi url', err)
					setError('Error: Unable to fetch an openapi document at this url.')
					return
				}

				if (config?.openapiUrls[url]) {
					setConfig(assocPath(['activeOpenapiUrl'], url))
				} else {
					setConfig(current => ({
						...current,
						activeOpenapiUrl: url,
						openapiUrls: {
							...current.openapiUrls || {},
							[url]: {}
						}
					}))
				}
				close()
			})}
		>
			{error && <div className={styles.error} >{error}</div>}
			<input placeholder="Openapi url" {...register('url')} />
			<button>Add</button>
		</form>
	)
}

const AddServerUrlForm = ({config, setConfig, close}) => {
	const {register, handleSubmit} = useForm()
	const [error, setError] = useState()
	return (
		<form
			className={styles['add-form']}
			onSubmit={handleSubmit(async ({url}) => {
				if (config?.openapiUrls[config.activeOpenapiUrl].servers[url]) {
          setConfig(curr => assocPath(['openapiUrls', curr.activeOpenapiUrl, 'activeServerUrl'], url, curr))
				} else {
          setConfig(curr => pipe(
            assocPath(['openapiUrls', curr.activeOpenapiUrl, 'servers', url], {accounts: []}),
            assocPath(['openapiUrls', curr.activeOpenapiUrl, 'activeServerUrl'], url),
          )(curr))
				}
				close()
			})}
		>
			{error && <div className={styles.error} >{error}</div>}
			<input placeholder="Openapi url" {...register('url')} />
			<button>Add</button>
		</form>
	)
}

const AddAccountForm = ({stencil, config, setConfig, setAccounts, accounts, close}) => {
	const {register, handleSubmit} = useForm()
	const [error, setError] = useState()
  const loginMutation = stencil.mutations.usePublicUserLoginMutation()
	return (
		<form
			className={styles['add-form']}
			onSubmit={handleSubmit(async ({email, username, password}) => {
        try {
          const response = await loginMutation.mutateAsync({ email, username, password })
          const updatedAccounts = [...accounts.map(a => ({...a, isActive: false})), { email: email || username, token: response.token, isActive: true }]
          setAccounts(updatedAccounts)
          close()
        } catch (err) {
          console.error('login error', err)
          setError('Unable to login with that info')
        }
			})}
		>
			{error && <div className={styles.error} >{error}</div>}
			<input placeholder="Email" {...register('email')} />
			<input placeholder="Password" type='password' {...register('password')} />
			<button>Add</button>
		</form>
	)
}
