import {useState} from 'react'
import JsonView from 'react18-json-view'
import {useFormContext, useForm} from 'react-hook-form'

export const UseFormInspector = ({stencil}) => {
	const [form, setForm] = useState(null)
	return (
		<div>
      <h3>Use Form Inspector</h3>
      <select onChange={(ev) => setForm(ev.target.value)}>
        <option value="" />
        {Object.entries(stencil.doc.paths)
            .filter(([path, methods]) => Object.entries(methods).find(([method, details]) => ['post', 'patch', 'put', 'delete'].includes(method)))
            .flatMap(([path, methods]) => {
              const name = stencil.strings.pathToName(path)
              return Object.entries(methods).filter(([method]) => ['post', 'patch', 'put', 'delete'].includes(method)).flatMap(([method, details]) => (
                <option key={`${name}-${method}`} value={`${name}:${method}`}>
                  {name} - {method}
                </option>
              ))
            })}
      </select>
      {form && <FormPreview
        stencil={stencil}
        formName={form.split(':')[0]}
        method={form.split(':')[1]}
      />}
		</div>
	)

}

const FormPreview = ({stencil, formName, method}) => {
  const [resourceId, setResourceId] = useState()
  const Form = useForm(formName, method)
  const isDetail = formName.endsWith('Detail')
  return <div>
    {isDetail && (
      <input
        placeholder="resourceId"
        onChange={(ev) => setResourceId(ev.target.value)}
      />
    )}
    <Form.Form resourceId={resourceId}>
      <div>
        <div>
          {Object.values(Form.Fields).map((Field, i) => <Field key={i} />)}
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
