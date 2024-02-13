import { buildUrl } from './build-url'
import { buildFetch } from './build-fetch'
import { buildUseQuery } from './build-use-query'
import { buildUseMutation } from './build-use-mutation'
import { buildUseForm } from './build-use-form'

export const buildStencil = ({openapi, config = {}}) => {
  // TODO: validate openapi and config

  const builders = [
    config.buildUrl || buildUrl,
    config.buildFetch || buildFetch,
    config.buildUseQuery || buildUseQuery,
    config.buildUseMutation || buildUseMutation,
    config.buildUseForm || buildUseForm,
    // buildUseForm,
    // buildUseList,
  ]

  return builders.reduce((acc, builder) => {
    const newTools = builder(acc)
    // TODO: warn if newTools overrides any existing keys in acc
    return {
      ...acc,
      ...newTools
    }
  }, {openapi, config})
}

