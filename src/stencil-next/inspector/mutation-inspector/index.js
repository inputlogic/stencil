import { useStencilContext } from '../context'
import styles from './mutation-inspector.module.scss'

export const MutationInspector = ({path, method}) => {
  const {stencil} = useStencilContext()
  const details = stencil.openapi.paths[path][method]
  const body = details?.requestBody?.content['application/json'].schema.properties || {}
  return (
    <div className={styles['mutation-inspector']} >
      {method &&
        <>
          <div>
            <h5>description</h5>
            <div>
              {details.description}
            </div>
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
