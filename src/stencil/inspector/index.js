import { useQuery } from 'react-query'
import { useState, useMemo } from 'react'
import { useStateWithLocalStorage } from '../../utils/use-state-with-local-storage'
import { InspectorPanel } from './inspector-panel'
import { useStencil } from './use-stencil'
import { Config } from './config'
import { QueryInspector } from './query-inspector'
import { FormInspector } from './form-inspector'
import { MutationInspector } from './mutation-inspector'
import { StencilContext } from './context'

export const Inspector = ({stencil: originalStencil, SwaggerUI = null}) => {
  const [config, setConfig] = useStateWithLocalStorage(
    'stencil-inspector',
    {
      activeOpenapiUrl: 'local',
      openapiUrls: {
        local: {
          activeServerUrl: originalStencil?.config?.server?.url,
          servers: originalStencil?.openapi.servers?.reduce((acc, s) => ({...acc, [s.url]: {accounts: []}}), {}) || []
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
  // const stencil = useStencil(activeOpenapiUrl === 'local' ? originalStencil.doc : openapiDoc.data, {
  //   ...originalStencil.config,
  //   server: {url: activeServerUrl},
  //   useToken: () => activeAccount?.token
  // })
  const stencil = useStencil({
		openapi: openapiDoc.data || originalStencil.openapi,
		config: {
			...originalStencil.config,
			server: {url: activeServerUrl},
			useToken: () => [activeAccount?.token, {isLoading: false}]
		}
  })
  const options = useMemo(() => {
    return [
      {
        label: 'stencil',
        component: ({}) => <div style={{padding: '1em'}}>
          <Config />
        </div>,
        options: stencil ? [
          ...!SwaggerUI ? [] : [{
            label: 'swagger',
            component: () => <SwaggerUI spec={stencil.openapi} />
          }],
          {
            label: 'queries',
            component: () => <div>todo</div>,
            options: Object.entries(stencil.openapi.paths).filter(([path, methods]) => methods.get).map(
              ([path, methods]) =>({
                label: path,
                component: ({}) => <div style={{padding: '1em'}}>
                  <QueryInspector path={path} />
                </div>
              })
            )
          },
          {
            label: 'mutations',
            component: () => <div>todo</div>,
            options: Object.entries(stencil.openapi.paths)
							.map(([path, methods]) => [
								...!methods.post ? [] : [path, 'post'],
								...!methods.patch ? [] : [path, 'patch'],
								...!methods.delete ? [] : [path, 'delete']
							])
							.filter(x => x.length > 0)
							.flatMap(
								([path, method]) =>({
									label: `${path} ${method.toUpperCase()}`,
									component: ({}) => <div style={{padding: '1em'}}>
										<MutationInspector path={path} method={method} />
									</div>
								})
							)
          },
          {
            label: 'forms',
            component: () => <div>todo</div>,
            options: Object.entries(stencil.openapi.paths).filter(([path, methods]) => Object.entries(methods).find(([method, details]) => ['post', 'patch', 'put', 'delete'].includes(method))).flatMap(
              ([path, methods]) => {
                return Object.entries(methods).filter(([method]) => ['post', 'patch', 'put', 'delete'].includes(method)).flatMap(([method, details]) => ({
                  label: `${path} - ${method}`,
                  component: ({}) => <div style={{padding: '1em'}}>
                    <FormInspector path={path} method={method} />
                  </div>
                }))
              }
            )
          },
        ] : [],
      }
    ]
  }, [stencil])
  return <StencilContext.Provider value={{config, setConfig, stencil}} >
    <InspectorPanel options={options} />
  </StencilContext.Provider>
}

