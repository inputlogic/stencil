import { useContext } from 'react'
import { assocPath, dissocPath } from 'ramda'
import {useState, useEffect} from 'react'
import { StencilContext } from '../context'
import { Accounts } from './accounts'
import { ServerUrl } from './server-url'

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
  return <div>
    <div>
      <input placeholder='Openapi Url' onChange={ev => setOpenapiUrl(ev.target.value)} />
      <button onClick={onClickApply} >Apply</button>
    </div>
    {stencil && <ServerUrl stencil={stencil} servers={servers || []} setServers={setServers} activeServerUrl={activeServerUrl} setActiveServer={setActiveServer} />}
    <br />
    {stencil && <Accounts stencil={stencil} accounts={accounts || []} setAccounts={setAccounts} />}
  </div>
}
