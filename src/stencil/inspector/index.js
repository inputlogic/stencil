import { useQuery } from 'react-query'
import { Config } from './config'
import { UseFormInspector } from './use-form-inspector'
import { UseQueryInspector } from './use-query-inspector'
import { useStencil } from '../use-stencil'
import { useStateWithLocalStorage } from '../../utils/use-state-with-local-storage'

export const Inspector = ({stencil: originalStencil}) => {
  const [config, setConfig] = useStateWithLocalStorage(
    'stencil-inspector',
    {
      activeOpenapiUrl: 'local',
      openapiUrls: {
        local: {
          activeServerUrl: originalStencil?.config?.server?.url
        }
      }
    }
  )
  const activeOpenapiUrl = config?.activeOpenapiUrl
  const activeOpenapi = config?.openapiUrls?.[activeOpenapiUrl]
  const openapiDoc = useQuery(
    ['stencil', 'openapiDoc', activeOpenapiUrl],
    () => fetch(activeOpenapiUrl).then(res => res.json()),
    {enabled: activeOpenapiUrl !== 'local'}
  )
  const activeServerUrl = activeOpenapi?.activeServerUrl
  const activeAccount = activeOpenapi?.servers?.[activeServerUrl]?.accounts?.find(a => a.isActive)
  const stencil = useStencil(activeOpenapiUrl === 'local' ? originalStencil.doc : openapiDoc.data, {
    ...originalStencil.config,
    server: {url: activeServerUrl},
    useToken: () => activeAccount?.token
  })
  return <div>
    <h1>Inspector</h1>
    <hr />
    <br />
    <Config config={config} setConfig={setConfig} stencil={stencil} />
    <br />
    <hr />
    <br />
    {stencil && stencil.config.server?.url && <UseFormInspector stencil={stencil} />}
    <br />
    <hr />
    <br />
    {stencil && stencil.config.server?.url && <UseQueryInspector stencil={stencil} />}
  </div>
}
