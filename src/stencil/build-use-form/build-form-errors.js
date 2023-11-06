import {buildComponents} from './build-components'
import {getDefaultComponent} from '../../utils/get-default-component'

export const buildFormErrors = ({config: {theme, anyTheme}}, stencil) => {
  const AllFormErrors = buildComponents({
    stencil,
    components: stencil.config.useForm?.formErrors || []
  })
  const FormError = getDefaultComponent({components: AllFormErrors, theme, anyTheme})
  return {
    AllFormErrors,
    FormError
  }
}
