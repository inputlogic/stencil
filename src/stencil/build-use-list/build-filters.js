import * as Case from 'case'

import {getDefaultComponent} from '../../utils/get-default-component'
import {safeComponents} from '../../utils/safe-components'

export const buildFilters = ({config: {properties, theme, anyTheme}, setQueryParam, useQueryParam}, stencil) => {
  const AllFilters = buildAllFilters({stencil, properties, componentArgs: {setQueryParam, useQueryParam}})
  const Filters = Object.entries(AllFilters).reduce((acc, [name, components]) => ({
    ...acc,
    [name]: getDefaultComponent({components, theme, anyTheme})
  }), {})
  return {
    AllFilters,
    Filters: safeComponents({
      components: Filters,
      stencil,
      warningComponent: ({name, availableNames}) => (props) => {
        // TODO: only show this when in development?
        // TODO: add link to README
        console.warn(`You are trying to access a filter, "${name}", that does not exist.`, `The filters that are available are: ${availableNames.join(', ')}. You can manually add filters using the additionalFilters option on the stencil.useList options. See https://github.com/inputlogic/stencil#useListOptions`)
        if (stencil.config.devMode) {
          return <div>{`Warning: You are trying to access a field, "${name}", that does not exist.`}</div>
        }
      }
    })
  }
}

const buildAllFilters = ({properties, stencil, prefixes = [], componentArgs}) => {
  return properties.reduce(
    (acc, property) => {
      return {
        ...acc,
        [Case.pascal([...prefixes, property.name].join('-'))]: buildFilterComponent({
          name: [...prefixes, property.name].join('.'),
          details: property.schema,
          stencil,
          componentArgs,
        })
      }
    },
    {}
  )
}

const buildFilterComponent = ({name, details, stencil, componentArgs}) => {
  return stencil.config?.useList?.filters?.reduce((acc, filter) => {
    if (filter.predicate(name, details)) {
      const component = filter.component({name, details, ...componentArgs})
      const theme = filter.theme ? capitalize(filter.theme) : 'Default'
      component.priority = filter.priority || 0
      acc[`${theme}${filter.name}`] = component
    }
    return acc
  }, {})
}

