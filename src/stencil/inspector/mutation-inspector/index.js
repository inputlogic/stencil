import Markdown from 'react-markdown'
import { useStencilContext } from '../context'
import styles from './mutation-inspector.module.scss'

export const MutationInspector = ({name}) => {
  const {stencil} = useStencilContext()
  const [path, method, details] = Object.entries(stencil.doc.paths).reduce((acc, [path, methods]) => {
    if (acc) return acc
    const res = Object.entries(methods).find(([method, details]) => method !== 'get' && stencil.strings.pathAndMethodToMutationHook(path, method) === name)
    if (res) return [path, ...res]
    return null
  }, null) || []
  console.log('details', details, method, path)
  const body = details?.requestBody?.content['application/json'].schema.properties || {}
  return (
    <div className={styles['mutation-inspector']} >
      {method &&
        <>
          <div>
            <h5>description</h5>
            <Markdown>
              {details.description}
            </Markdown>
          </div>
          <div>
            <h5>path</h5>
            {path}
          </div>
          <div>
            <h5>method</h5>
            {method}
          </div>
          <div>
            <h5>body</h5>
            <pre>
              {JSON.stringify(body, null, 2)}
            </pre>
          </div>
        </>
      }
    </div>
  )
}
