import { useForm } from 'react-hook-form'
import {buildFields} from '../build-use-form/build-fields'
import {buildButtons} from '../build-use-form/build-buttons'
import {buildFormErrors} from '../build-use-form/build-form-errors'
import {buildForm} from '../build-use-form/build-form'

const buildUseForm = ({config: {path, method}}, stencil) => {
  return {
    useForm: ({args, reactHookFormArgs = {}}) => {
      const methods = useForm({
        defaultValues: async () => {
          const token = await stencil.config.getToken()
          console.log('yo token', token)
          await stencil.fetch({path, args, token})
        }, // TODO: figure out default values, figure out error handling
        ...reactHookFormArgs
      })
      return {
        methods
      }
    }
  }
}

export const buildCreateForm = (stencil) => ({
  createForm: ({
    path,
    method,
    additionalFields = {}
  }) => {
    const properties = {
      ...stencil.openapi.paths[path]?.[method]?.requestBody.content['application/json'].schema.properties || {},
      ...additionalFields
    }
    return [
      buildFields,
      // buildButtons,
      // buildFormErrors,
      buildForm,
      buildUseForm
    ].reduce((acc, build) => ({
      ...acc,
      ...build(acc, stencil)
    }), {config: {properties, path, method}})
  }
})
