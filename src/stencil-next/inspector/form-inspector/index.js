import {useState} from 'react'
import JsonView from 'react18-json-view'
import {useFormContext} from 'react-hook-form'
import { useStencilContext } from '../context'

export const FormInspector = ({path, method}) => {
  const [resourceId, setResourceId] = useState()
  // TODO: support more than one arg with id
  return <div>
    {path.includes('{') && (
      <input
        placeholder="resourceId"
        onChange={(ev) => setResourceId(ev.target.value)}
      />
    )}
    {(!path.includes('{') || resourceId) &&
      <RenderedForm path={path} method={method} args={{id: resourceId}} />
    }
  </div>
}

const RenderedForm = ({path, method, args}) => {
  const {stencil} = useStencilContext()
  const Form = stencil.useForm({path, method, args})
  return <div>
    <Form.Form>
      <div>
        <div>
          {Object.values(Form.DefaultFields).map((Field, i) => <Field key={i} />)}
        </div>
        <div>
          <FormData />
        </div>
      </div>
    </Form.Form>
  </div>
}

const FormData = ({}) => {
  const methods = useFormContext()
  const data = methods.watch()
  return <JsonView src={data} collapseObjectsAfterLength={2} />
}
