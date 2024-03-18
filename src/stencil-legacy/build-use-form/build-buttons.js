import {buildComponents} from './build-components'
import {getDefaultComponent} from '../../utils/get-default-component'

export const buildButtons = ({config: {theme, anyTheme}}, stencil) => {
  const AllButtons = buildComponents({
    stencil,
    components: stencil.config.useForm?.buttons || []
  })
  const Button = getDefaultComponent({components: AllButtons, theme, anyTheme})
  return {
    AllButtons,
    Button
  }
}
