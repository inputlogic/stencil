import * as Case from 'case'
import {getDefaultComponent} from './get-default-component'

/**
 * This function is for building generic components from a list of components in stencil config
 */
export const buildComponents = ({stencil, components, name, theme, anyTheme, componentParams}) => {
  const AllComponents = components.reduce((acc, componentDef) => {
    const fullName = Case.pascal([componentDef.theme || 'default', componentDef.name].join('-'))
    const component = componentDef.component(componentParams)
    component.priority = componentDef.priority || 0
    component.theme = componentDef.theme || 'default'
    acc[fullName] = component
    return acc
  }, {})
  return {
    [`All${name}s`]: AllComponents,
    [name]: getDefaultComponent({components: AllComponents, theme, anyTheme})
  }
}
