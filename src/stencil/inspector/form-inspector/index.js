import {useState} from 'react'
import JsonView from 'react18-json-view'
import {useFormContext} from 'react-hook-form'
import { useStencilContext } from '../context'

export const FormInspector = ({formName, method}) => {
  const {stencil} = useStencilContext()
  const [resourceId, setResourceId] = useState()
  const Form = stencil.useForm(formName, method)
  const isDetail = formName.endsWith('Detail')
  console.log('resourceId', resourceId)
  return <div>
    {isDetail && (
      <input
        placeholder="resourceId"
        onChange={(ev) => setResourceId(ev.target.value)}
      />
    )}
    <Form.Form {...resourceId ? {resourceId} : {useDefaultValues: () => [{}, {}]}}>
      <div>
        <div>
          {Object.values(Form.DefaultFields).map((Field, i) => <Field key={i} />)}
        </div>
        <div>
          <FormData stencil={stencil} />
        </div>
      </div>
    </Form.Form>
  </div>
}

const FormData = ({stencil}) => {
  const methods = useFormContext()
  const data = methods.watch()
  return <JsonView src={data} collapseObjectsAfterLength={2} />
}
