import * as Case from 'case'

const toFormErrorMessage = (error) => {
  if (error.code === 400) {
    if (error.data?.non_field_errors) {
      return error.data.non_field_errors
    }
    return 'Please fix the errors below and try again.'
  } else if (error.code === 401) {
    return "Looks like you don't have permission to do this."
  } else {
    return "An unexpected error occured. We don't think this was your fault. Please try again later."
  }
}

// This is a default form error handler
export const drfDefaultErrorHandler = (error, methods) => {
  if (error) {
    methods.setError('root.message', {
      type: 'server',
      message: toFormErrorMessage(error),
    })
    methods.setError('root.raw', {
      type: 'server',
      message: error,
    })
  }
  if (error.data) {
    Object.entries(error.data).forEach(([field, errors]) => {
      if (Array.isArray(errors)) {
        errors?.forEach((error) =>
          methods.setError(field, {
            type: 'manual',
            message: Case.sentence(
              error.includes('null') ||
                error.includes('blank') ||
                error.includes('required')
                ? 'This field is required'
                : error
            ),
          })
        )
      } else {
        console.warn(
          'drfDefaultErrorHandler does not know how to handle this error',
          error
        )
      }
    })
  }
}

