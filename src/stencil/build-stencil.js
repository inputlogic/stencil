import { buildStrings } from './build-strings'
import { buildUrls } from './build-urls'
import { buildHttpMethods } from './build-http-methods'
import { buildQueryHooks } from './build-query-hooks'
import { buildMutationHooks } from './build-mutation-hooks'
import { buildUseForm } from './build-use-form'

const validateConfig = (config) => {
	// TODO: add README and link to it
	if (!config?.server?.url) {
		console.warn(`Expected config.server.url to have a value of the server you\'re using.`)
	}
	if (!config?.useForm?.fields) {
		console.warn(`Expected config.useForm.fields to be an array of supported fields.`)
	}
  if (!config?.useForm?.errorHandler) {
		console.warn(`Expected config.useForm.errorHandler to be a function to handle errors.`)
  }
  if (!config?.useForm?.buttons) {
		console.warn(`Expected config.useForm.buttons to be an array of supported buttons.`)
  }
  if (!config?.useForm?.formErrors) {
		console.warn(`Expected config.useForm.formErrors to be an array of form errors.`)
  }
	if (!config?.useToken) {
		console.warn(`Expected config.useToken to be a react hook that will return the token of the current user.`)
	}
}

export const buildStencil = (doc, config) => {
	validateConfig(config)

  const toolBuilders = [
    buildStrings,
    buildUrls,
    buildHttpMethods,
    buildQueryHooks,
    buildMutationHooks,
    // buildComponents,
    buildUseForm,
    // buildOpenApiUseForm,
    // buildOpenApiTables,
  ]

  return toolBuilders.reduce(
    (acc, toolBuilder) => ({
      ...acc,
      ...toolBuilder(doc, acc),
    }),
    {
      doc,
      config,
    }
  )
}
