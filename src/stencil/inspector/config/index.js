import { assocPath, dissocPath } from 'ramda'
import {useState, useEffect} from 'react'
import { Accounts } from './accounts'
import { ServerUrl } from './server-url'
// import { useStateWithLocalStorage } from '../../../utils/use-state-with-local-storage'

export const Config = ({stencil, config, setConfig}) => {
  // const [config, setConfig] = useStateWithLocalStorage(
  //   'stencil-inspector',
  //   {url: process.env.NEXT_PUBLIC_STENCIL_OPENAPI_URL}
  // )
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
  return <div>
    <h2>Config</h2>
    <h4>Openapi Url</h4>
    <div>
      <input placeholder='Openapi Url' onChange={ev => setOpenapiUrl(ev.target.value)} />
      <button onClick={onClickApply} >Apply</button>
    </div>
    <div>
        {Object.keys(config?.openapiUrls || {}).map(url =>
          <div key={url}>
            {url}
            {url === config?.activeOpenapiUrl && ' (active)'}
            {url !== 'local' && <button onClick={(ev) => onClickRemove(url)} >Remove</button>}
            {url !== config?.activeOpenapiUrl && <button onClick={ev => onClickSetActive(url)} >Set Active</button>}
          </div>
        )}
    </div>
    <br />
    {stencil && <ServerUrl stencil={stencil} servers={servers || []} setServers={setServers} activeServerUrl={activeServerUrl} setActiveServer={setActiveServer} />}
    <br />
    {stencil && <Accounts stencil={stencil} accounts={accounts || []} setAccounts={setAccounts} />}
  </div>
}
