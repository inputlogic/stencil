import { useState } from 'react'
import { FormProvider } from 'react-hook-form'

// TODO: look into error boundary for defaultValues error
export const buildForm = (formArgs, stencil) => {
  const onSubmit = stencil.config.useForm?.onSubmit?.(formArgs, stencil)
  // TODO: Calculate Base Form 
  const FormComponent = props => <form {...props}/>
  return {
    Form: ({methods, ...props}) => {
      const [metadata, setMetadata] = useState({})
      const onSubmit = async (ev) => {
        ev.preventDefault()
        console.log('todo onsubmit')
      }
      if (methods.formState.isLoading) {
        return 'Loading ...' // TODO: replace with a proper loading indicator
      }
      return <FormProvider {...methods} metadata={metadata} setMetadata={setMetadata} >
        <FormComponent onSubmit={onSubmit} {...props} />
      </FormProvider>
    }
  }
}
