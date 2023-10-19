import * as Case from 'case'

export const getDefaultComponent = ({components, theme: givenTheme, anyTheme}) => {
  const theme = Case.pascal(givenTheme)
  const orderedByPriority = Object.entries(components).sort(
    ([_n1, component1], [_n2, component2]) => component1.priority > component2.priority ? -1 : 1
  )
  const topPriorityWithTheme = orderedByPriority.filter(([name]) =>
    name.startsWith(theme)
  )[0]?.[1]
  const topPriorityIgnoreTheme = orderedByPriority[0]?.[1]
  // TODO: nicer missing field
  return topPriorityWithTheme || (anyTheme && topPriorityIgnoreTheme) || (() => <div>TODO: uh oh</div>)
}
