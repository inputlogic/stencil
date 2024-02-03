import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import {buildFields} from './build-fields'
import {buildButtons} from './build-buttons'
import {buildFormErrors} from './build-form-errors'
import {buildForm} from './build-form'

export const buildUseForm = (stencil) => ({
  useForm: ({
    path,
    method,
    args = {},
    anyTheme,
    theme,
    useToken = stencil.config.useQuery?.useToken || (() => [null, {isLoading: false}]),
    additionalFields = {},
    reactHookFormArgs = {}
  }) => {
    const [token, {isLoading: isLoadingToken}] = useToken()
    const methods = useForm({
      defaultValues: async () => await stencil.fetch({path, args}), // TODO: figure out default values, figure out error handling
      ...reactHookFormArgs
    })
    const stuff = useMemo(
      () => {
        const properties = {
          ...stencil.openapi.paths[path]?.[method]?.requestBody.content['application/json'].schema.properties || {},
          ...additionalFields
        }
        return [
          buildFields,
          // buildButtons,
          // buildFormErrors,
          buildForm
        ].reduce((acc, build) => ({
          ...acc,
          ...build(acc, stencil)
        }), {config: {properties, path, method, anyTheme, theme}})
      },
      [path, method, ...Object.values(args)]
    )
    return {
      ...stuff,
      Form: useMemo(() => (props) => stuff.Form({methods, ...props}), [methods, stuff]),
      methods
    }
  }
})
