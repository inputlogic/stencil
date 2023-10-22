import { FormProvider, useForm } from 'react-hook-form'
import {buildFormComponents} from './build-form-components'
import {getDefaultComponent} from './get-default-component'
import {drfDefaultErrorHandler} from '../../utils/drf-default-error-handler'

export const buildForms = ({config: {path, name, method, theme, anyTheme}, FormError, Button, Fields}, stencil) => {
  const useDefaultMutation = stencil.mutations[
    stencil.strings.pathAndMethodToMutationHook(name, method)
  ]
  const AllBasicForms = buildFormComponents({
    stencil,
    components: stencil.config.useForm?.forms || []
  })
  const DefaultBasicForm = getDefaultComponent({components: AllBasicForms, theme, anyTheme})
  return {
    useDefaultMutation,
    Form: buildForm({stencil, path, method, FormComponent: DefaultBasicForm, Fields, FormError, Button, useDefaultMutation})
  }
}

const buildForm = ({stencil, path, method, FormComponent, Fields, FormError, Button, useDefaultMutation}) => {
  const FormWithDefaultValues = ({useDefaultValues, ...props}) => {
    const [defaultValues, { error }] = useDefaultValues()
    if (error) {
      return <div> TODO: Loading Error</div>
    }
    if (!defaultValues) return <div>TODO: Loading...</div>
    return <Form defaultValues={defaultValues} {...props} />
  }

  const Form = ({validation, defaultValues, onSubmit: onSubmitProp, ...props}) => {
    const [metadata, setMetadata] = stencil.config.react.useState({})
    const methods = useForm({
      defaultValues,
      ...(validation
        ? { resolver: yupResolver(y.object().shape(validation)) }
        : {}),
    })
    const onSubmit = async (ev) => {
      methods.clearErrors('root')
      try {
        await methods.handleSubmit(async (data) => {
          await onSubmitProp?.(data, {reactHookFormMethods: methods})
          setMetadata((curr) => ({ ...curr, success: true }))
          setTimeout(() => {
            // if (isMounted.current) {
            setMetadata((curr) => ({ ...curr, success: false }))
            // }
          }, 2000)
        })(ev)
      } catch (error) {
        // TODO: extra error handler
        // methods.setError('root', )
        console.error('Form error', error)
        const errorHandler = stencil.config.useForm?.errorHandler || drfDefaultErrorHandler
        errorHandler(error, methods)
      }
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
          {Object.values(Fields).map((Field, i) => <Field key={i} />)}
          <Button>Submit</Button>
        </>
      }
    </FormWithDefaultValues>
  }

  return AutoForm
}
