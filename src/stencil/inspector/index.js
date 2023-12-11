import { ReactQueryDevtoolsPanel } from 'react-query/devtools'
import { useQuery } from 'react-query'
import { useState, useMemo } from 'react'
import { InspectorPanel } from '../inspector-panel'
import { useStateWithLocalStorage } from '../../utils/use-state-with-local-storage'
import { useStencil } from '../use-stencil'
import { Config } from './config'
import { QueryInspector } from './query-inspector'
import { FormInspector } from './form-inspector'
import { MutationInspector } from './mutation-inspector'
import { StencilContext } from './context'
import styles from './style.module.scss'


export const Inspector = ({stencil: originalStencil}) => {
  const [config, setConfig] = useStateWithLocalStorage(
    'stencil-inspector',
    {
      activeOpenapiUrl: 'local',
      openapiUrls: {
        local: {
          activeServerUrl: originalStencil?.config?.server?.url,
          servers: originalStencil?.doc.servers.reduce((acc, s) => ({...acc, [s.url]: {accounts: []}}), {})
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
  const options = useMemo(() => {
    return [
      {
        label: 'stencil',
        component: ({}) => <div className={styles['content-wrapper']}>
          <Config />
        </div>,
        options: stencil ? [
          {
            label: 'queries',
            component: () => <div>todo</div>,
            options: Object.entries(stencil.queries).map(
              ([name, fn]) =>({
                label: name,
                component: ({}) => <div className={styles['content-wrapper']}>
                  <QueryInspector name={name} />
                </div>
              })
            )
          },
          {
            label: 'mutations',
            component: () => <div>todo</div>,
            options: Object.entries(stencil.mutations).map(
              ([name, fn]) =>({
                label: name,
                component: ({}) => <div className={styles['content-wrapper']}>
                  <MutationInspector name={name} />
                </div>
              })
            )
          },
          {
            label: 'forms',
            component: () => <div>todo</div>,
            options: Object.entries(stencil.doc.paths).filter(([path, methods]) => Object.entries(methods).find(([method, details]) => ['post', 'patch', 'put', 'delete'].includes(method))).flatMap(
              ([path, methods]) => {
                const name = stencil.strings.pathToName(path)
                return Object.entries(methods).filter(([method]) => ['post', 'patch', 'put', 'delete'].includes(method)).flatMap(([method, details]) => ({
                  label: `${name} - ${method}`,
                  component: ({}) => <div className={styles['content-wrapper']}>
                    <FormInspector formName={name} method={method} />
                  </div>
                }))
              }
            )
          },
        ] : [],
      },
      {
        label: 'react query',
        component: () => (
          <ReactQueryDevtoolsPanel className={styles['react-query']} />
        ),
      },
    ]
  }, [stencil])
  return <StencilContext.Provider value={{config, setConfig, stencil}} >
    <InspectorPanel options={options} />
  </StencilContext.Provider>
}
