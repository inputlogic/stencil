import {useMutation} from 'react-query'

// TODO: error handling
export const buildMutationHooks = (doc, stencil) => {
  const toHookName = (name, method) => toolkit.strings.pathAndMethodToMutationHook(path, method)
  return {
    mutations: Object.entries(doc.paths).reduce((acc, [path, methods]) => ({
      ...acc,
      ...Object.entries(methods).filter(([method, detail]) => ['post', 'patch', 'delete'].includes(method)).reduce((acc, [method]) => ({
        ...acc,
        [stencil.strings.pathAndMethodToMutationHook(path, method)]: ({args, reactQueryArgs = {}} = {}) => {
          const token = stencil.config.useToken?.()
          // const defaultErrorHandler = stencil.config.mutations?.useDefaultErrorHandler?.()
          return useMutation(data => stencil.fetch(stencil.strings.pathToName(path), {
            method,
            data,
            args,
            token
          }), reactQueryArgs)
        }
      }), {})
    }), {})
  }
}
