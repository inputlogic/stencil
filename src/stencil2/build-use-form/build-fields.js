import {getPriority} from '../../utils/get-priority'

export const buildFields = ({config: {properties}}, stencil) => {
  const Fields = buildAllFields = ({properties, stencil})
  return {
    Fields
  }
}

const buildAllFields = ({properties, stencil, prefixes = []}) => {
  if (!properties) {
    // TODO: look into this
    return {}
  }
  return Object.entries(properties).reduce(
    (acc, [name, details]) => ({
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
    })
  )
}

const buildFieldComponent = ({name, details, stencil}) =>
  stencil.config?.useForm?.fields?.reduce((acc, field) => {
    if (field.predicate({name, details})) {
      const component = field.component({name, details})
      const theme = Case.pascal(field.theme || '')
      component.priority = getPriority({priority: field.priority, args: {name, details}})
      acc[`${theme}${field.name}`] = component
    }
    return acc
  }, {})
