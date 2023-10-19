import {buildFormComponents} from './build-form-components'
import {getDefaultComponent} from './get-default-component'

export const buildFormErrors = ({config: {theme, anyTheme}}, stencil) => {
  const AllFormErrors = buildFormComponents({
    stencil,
    components: stencil.config.useForm?.formErrors || []
  })
  const FormError = getDefaultComponent({components: AllFormErrors, theme, anyTheme})
  return {
    AllFormErrors,
    FormError
  }
}
