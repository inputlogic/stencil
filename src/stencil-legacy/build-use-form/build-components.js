import * as Case from 'case'

/**
 * This function is for building generic form components like form error and buttons
 */
export const buildComponents = ({stencil, components}) => {
  return components.reduce((acc, formComponent) => {
    const fullName = Case.pascal([formComponent.theme || 'default', formComponent.name].join('-'))
    const component = formComponent.component()
    component.priority = formComponent.priority || 0
    component.theme = formComponent.theme || 'default'
    acc[fullName] = component
    return acc
  }, {})
}
