import {useMemo} from 'react'
import {buildFields} from './build-fields'
import {buildButtons} from './build-buttons'
import {buildFormErrors} from './build-form-errors'
import {buildForms} from './build-forms'
import {buildFormComponents} from './build-form-components'
import {getDefaultComponent} from '../../utils/get-default-component'

export const buildUseForm = (doc, stencil) => ({
  useForm: (name, method, {additionalFields = {}, theme = 'default', anyTheme = true} = {}) => {
    return useMemo(
      () => {
        const {path, details} = findPathAndDetails({name, method, doc, stencil})
        const properties = {
          ...details.requestBody.content['application/json'].schema.properties,
          ...additionalFields
        }
        const builders = [
          buildFields,
          buildButtons,
          buildFormErrors,
          buildForms,
        ]
        return builders.reduce((acc, builder) => ({
          ...acc,
          ...builder(acc, stencil)
        }), {config: {properties, path, name, method, anyTheme, theme}})
      },
      [name, method]
    )
  }
})

const findPathAndDetails = ({name, method, doc, stencil}) => {
  const [path, methods] = Object
    .entries(doc.paths)
    .find(([path]) => stencil.strings.pathToName(path) === name) || []
  if (!path) {
    console.warn('No endpoint named', name)
    return
  }
  const details = methods[method]
  if (!details) {
    console.warn('No endpoint named', name, 'with method', method)
    return
  }
  return {path, details}
}
