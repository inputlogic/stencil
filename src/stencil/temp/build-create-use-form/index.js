import { useForm as useFormBase } from 'react-hook-form'

export const buildCreateUseForm = (stencil) => ({
  createUseForm: ({
    path,
    method,
    additionalFields
  }) => {
    const useForm = ({args, reactHookFormArgs = {}}) => {
      const methods = useFormBase({
        defaultValues: async () => {
          const token = await stencil.config.getToken()
          console.log('yo token', token)
          await stencil.fetch({path, args, token})
        },
        ...reactHookFormArgs
      })

      const Form = useMemo(() => props => <Form methods={...methods} {...props} />, [methods])

      return {
        methods,
        Form: 
      }
    }
  }
})
