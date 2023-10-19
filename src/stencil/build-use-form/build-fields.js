import * as Case from 'case'

import {getDefaultComponent} from './get-default-component'

const safeComponents = (components, stencil) => new Proxy(components, {
  get: (target, prop) => {
    if (prop in target) {
      return target[prop]
    }
    return (props) => {
      // TODO: only show this when in development?
      // TODO: add README
      console.warn(`You are trying to access a field, "${prop}", that does not exist.`, `The fields that are available are: ${Object.keys(target).join(', ')}. You can manually add fields using the additionalFields prop on the stencil.useForm.`)
      if (stencil.config.devMode) {
        return <div>{`Warning: You are trying to access a field, "${prop}", that does not exist.`}</div>
      }
    }
  }
})

export const buildFields = ({config: {properties, theme, anyTheme}}, stencil) => {
  const AllFields = buildAllFields({properties, stencil})
  const Fields = Object.entries(AllFields).reduce((acc, [name, components]) => ({
    ...acc,
    [name]: getDefaultComponent({components, theme, anyTheme})
  }), {})
  return {
    AllFields,
    Fields: safeComponents(Fields, stencil)
  }
}

const buildAllFields = ({properties, stencil, prefixes = []}) => {
  // TODO: handle empty properties better
  if (!properties) {
    const name = Case.pascal(prefixes.join('-'))
    return {
      [name]: {
        [`Default${name}`]: () => (
          <div>TODO: Arbitrary Json {prefixes.join(' ')}</div>
        ),
      },
    }
  }
  return Object.entries(properties).reduce(
    (acc, [name, details]) => {
      return {
        ...acc,
        ...details.type === 'object'
          ? buildAllFields({
            properties: details.properties,
            prefixes: [...prefixes, name],
            stencil
          })
          : {
            [Case.pascal([...prefixes, name].join('-'))]: buildFieldComponent({
              name: [...prefixes, name].join('.'),
              details,
              stencil
            })
          } 
      }
    },
    {}
  )
}

const buildFieldComponent = ({name, details, stencil}) => {
  return stencil.config?.useForm?.fields?.reduce((acc, field) => {
    if (field.predicate(name, details)) {
      const component = field.component(name, details)
      const theme = field.theme ? capitalize(field.theme) : 'Default'
      component.priority = field.priority || 0
      acc[`${theme}${field.name}`] = component
    }
    return acc
  }, {})
}

