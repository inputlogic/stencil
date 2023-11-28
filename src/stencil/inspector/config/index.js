import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { assocPath, dissocPath } from 'ramda'
import {useState, useEffect} from 'react'
import { StencilContext } from '../context'
import { Accounts } from './accounts'
import { ServerUrl } from './server-url'
import { SelectAddDelete } from '../../../components/select-add-delete'
import styles from './config.module.scss'

export const Config = ({}) => {
  const {stencil, config, setConfig} = useContext(StencilContext)
  const [openapiUrl, setOpenapiUrl] = useState()
  const onClickApply = (ev) => {
    // TODO: check that it is a valid openapi url before setting it.
    if (config?.openapiUrls[openapiUrl]) {
      setConfig(assocPath(['activeOpenapiUrl'], openapiUrl))
    } else {
      setConfig(current => ({
        ...current,
        activeOpenapiUrl: openapiUrl,
        openapiUrls: {
          ...current.openapiUrls || {},
          [openapiUrl]: {}
        }
      }))
    }
  }
  const onClickSetActive = (url) => {
    setConfig(current => assocPath(['activeOpenapiUrl'], url, config))
  }
  const onClickRemove = (url) => {
    setConfig(current => {
      const updated = dissocPath(['openapiUrls', url], current)
      if (url === config?.activeOpenapiUrl) {
        return assocPath(['activeOpenapiUrl'], 'local')
      }
      return current
    })
  }
  const activeOpenapi = config?.openapiUrls?.[config?.activeOpenapiUrl]
  const servers = activeOpenapi?.servers
  const activeServerUrl = activeOpenapi?.activeServerUrl
  const setServers = servers => {
    setConfig(current => assocPath(['openapiUrls', current.activeOpenapiUrl, 'servers'], servers, current))
  }
  const setActiveServer = url => {
    setConfig(current => assocPath(['openapiUrls', current.activeOpenapiUrl, 'activeServerUrl'], url, current))
  }
  const accounts = config?.openapiUrls?.[config?.activeOpenapiUrl]?.servers?.[activeServerUrl]?.accounts
  const setAccounts = accounts => {
    setConfig(current => assocPath(
      ['openapiUrls', current.activeOpenapiUrl, 'servers', activeServerUrl, 'accounts'],
      accounts,
      current
    ))
  }
  console.log('config', config)
  return <div>
    <div>
			<div>
				<SelectAddDelete
					activeOption={{ label: 'Local', canDelete: true }}
					otherOptions={[{ label: 'Other 1' }, { label: 'Other 2' }]}
					addComponent={({close}) => <AddOpenApiForm close={close} config={config} setConfig={setConfig} />}
				/>
			</div>
      <select>
        {Object.keys(config.openapiUrls).map(url =>
          <option value={url}>{url}</option>
        )}
      </select>
      <input placeholder='Openapi Url' onChange={ev => setOpenapiUrl(ev.target.value)} />
      <button onClick={onClickApply} >Apply</button>
    </div>
    {stencil && <ServerUrl stencil={stencil} servers={servers || []} setServers={setServers} activeServerUrl={activeServerUrl} setActiveServer={setActiveServer} />}
    <br />
    {stencil && <Accounts stencil={stencil} accounts={accounts || []} setAccounts={setAccounts} />}
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
					console.log('json', json)
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
