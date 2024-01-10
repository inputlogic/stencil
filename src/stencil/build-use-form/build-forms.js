import { useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {buildComponents} from './build-components'
import {getDefaultComponent} from '../../utils/get-default-component'

export const buildForms = ({config: {path, name, method, theme, anyTheme}, FormError, Button, DefaultFields}, stencil) => {
  const useDefaultMutation = stencil.mutations[
    stencil.strings.pathAndMethodToMutationHook(name, method)
  ]
  const AllBasicForms = buildComponents({
    stencil,
    components: stencil.config.useForm?.forms || []
  })
  const DefaultBasicForm = getDefaultComponent({components: AllBasicForms, theme, anyTheme})
  return {
    useDefaultMutation,
    Form: buildForm({stencil, path, method, FormComponent: DefaultBasicForm, DefaultFields, FormError, Button, useDefaultMutation})
  }
}

const buildForm = ({stencil, path, method, FormComponent, DefaultFields, FormError, Button, useDefaultMutation}) => {
  const FormWithDefaultValues = ({useDefaultValues, useFormOptions = {}, ...props}) => {
    const [defaultValues, { error }] = useDefaultValues()
    if (error) {
      return <div> TODO: Loading Error</div>
    }
    if (!defaultValues) return <div>TODO: Loading...</div>
    return <Form useFormOptions={{defaultValues: defaultValues, ...useFormOptions}} {...props} />
  }

  const Form = ({validation, onSubmit: onSubmitProp, useFormOptions = {}, ...props}) => {
    const [metadata, setMetadata] = useState({})
    const methods = useForm(useFormOptions)
    const onSubmit = async (ev) => {
      methods.clearErrors('root')
      await methods.handleSubmit(async (data) => {
        try {
          await onSubmitProp?.(data, {reactHookFormMethods: methods})
          setMetadata((curr) => ({ ...curr, success: true }))
          methods.reset(methods.getValues(), {keepValues: true})
          setTimeout(() => {
            setMetadata((curr) => ({ ...curr, success: false }))
          }, 2000)
        } catch (error) {
          console.error('Form error', error)
          stencil.config.useForm?.errorHandler?.(error, {reactHookFormMethods: methods})
        }
      })(ev)
    }
    return <FormProvider {...methods} metadata={metadata} setMetadata={setMetadata} >
      <FormComponent onSubmit={onSubmit} {...props} />
    </FormProvider>
  }

  const AutoForm = ({resourceId, useDefaultValues, children, onSuccess, ...props}) => {
    useDefaultValues = useDefaultValues
      ? useDefaultValues
      : method === 'patch'
      ? () =>
        stencil.queries[stencil.strings.pathToQueryHook(path)](
          {
            args: { id: resourceId },
          },
          { cacheTime: 0 }
        )
      : () => [{}, {}]
    const mutation = useDefaultMutation({args: {id: resourceId}})
    const onSubmit = async (data, rest) => {
      const response = await mutation.mutateAsync(data)
      onSuccess?.({response, request: data, ...rest})
    }
    return <FormWithDefaultValues useDefaultValues={useDefaultValues} onSubmit={onSubmit} {...props}>
      {children
        ? children
        : <>
          <FormError />
          {Object.values(DefaultFields).map((Field, i) => <Field key={i} />)}
          <Button>Submit</Button>
        </>
      }
    </FormWithDefaultValues>
  }

  return AutoForm
}
