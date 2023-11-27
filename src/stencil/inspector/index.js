import { ReactQueryDevtoolsPanel } from 'react-query/devtools'
import { useQuery } from 'react-query'
import { useState } from 'react'
import { InspectorPanel } from '../inspector-panel'
import { useStateWithLocalStorage } from '../../utils/use-state-with-local-storage'
import { useStencil } from '../use-stencil'
import { Config } from './config'
import { QueryInspector } from './query-inspector'
import { StencilContext } from './context'
import styles from './style.module.scss'


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
  console.log('config', config)
  const activeOpenapiUrl = config?.activeOpenapiUrl
  const activeOpenapi = config?.openapiUrls?.[activeOpenapiUrl]
  const openapiDoc = useQuery(
    ['stencil', 'openapiDoc', activeOpenapiUrl],
    () => fetch(activeOpenapiUrl).then(res => res.json()),
    {enabled: activeOpenapiUrl !== 'local'}
  )
  const activeServerUrl = activeOpenapi?.activeServerUrl
  const activeAccount = activeOpenapi?.servers?.[activeServerUrl]?.accounts?.find(a => a.isActive)
  console.log('activeAccount', activeAccount)
  const stencil = useStencil(activeOpenapiUrl === 'local' ? originalStencil.doc : openapiDoc.data, {
    ...originalStencil.config,
    server: {url: activeServerUrl},
    useToken: () => activeAccount?.token
  })
  const options = [
    {
      label: 'config',
      component: ({}) => <div className={styles['content-wrapper']}>
        <Config />
      </div>
    },
    ...stencil ? [{
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
    }] : [],
    {
      label: 'react query',
      component: () => (
        <ReactQueryDevtoolsPanel className={styles['react-query']} />
      ),
    },
  ]
  return <StencilContext.Provider value={{config, setConfig, stencil}} >
    <InspectorPanel options={options} />
  </StencilContext.Provider>
}
