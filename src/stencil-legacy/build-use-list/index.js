import * as Case from 'case'
import {useRouter} from 'next/router.js'
import {useMemo, useRef} from 'react'
import {buildFilters} from './build-filters'
import {buildComponents} from '../../utils/build-components'

const DEFAULT_PAGE_SIZE = 20

export const buildUseList = (doc, stencil) => ({
  useList: (name, {
    theme = 'default',
    anyTheme = true,
    id,
    useQuery: useQueryProvided,
    loader,
    emptyState,
    defaultQueries = {},
    additionalFilters = [],
    ...options
  } = {}) => {
    const baseQueries = {limit: stencil.config.useList?.defaultPageSize || DEFAULT_PAGE_SIZE}
    defaultQueries = {...baseQueries, ...defaultQueries}
    id = id || name
    const router = useRouter()
    /*
     * Inside of useMemo there are functions that need to access the current router.query values
     * However, we don't want to re-run useMemo every time router.query changes.
     * Using a ref allows us to get the current query values
     * rather than the ones that exist when useMemo is built.
     * (see getCurrentQuery)
     */
    const routerRef = useRef()
    routerRef.current = router
    return useMemo(
      () => {
        const path = stencil.strings.nameToOpenapiPath(name)
        if (!path) {
          throw Error(`No endpoint named ${name}`)
        }
        const properties = [...doc.paths[path].get.parameters || [], ...additionalFilters]

        const builders = [
          buildSetQueryParam,
          buildUseQueryParam,
          buildUseQuery,
          buildUseQueryCount,
          buildEmptyStates,
          buildLoaders,
          buildLoadingErrors,
          buildPaginations,
          buildFilters,
          buildList,
        ]

        return builders.reduce((acc, builder) => ({
          ...acc,
          ...builder(acc, stencil)
        }), {config: {
          properties,
          name,
          theme,
          anyTheme,
          getCurrentQuery: () => routerRef.current.query,
          router: routerRef.current,
          id,
          useQueryProvided,
          path,
          defaultQueries,
          loader,
          emptyState,
        }})
      },
      [name]
    )
  }
})

const buildSetQueryParam = ({config: {getCurrentQuery, router, id}}) => {
  const calculateNewQuery = (name, value) => ({
    pathname: router.pathname,
    query: noNulls({
      ...getCurrentQuery(),
      ...name !== 'page' ? {[`${id}.page`]: null} : {},
      [`${id}.${name}`]: value,
    }),
  })
  return {
    calculateNewQuery,
    setQueryParam: (name, value, nextRouterArgs = { scroll: false }) => {
      router.replace(calculateNewQuery(name, value), undefined, nextRouterArgs)
    },
    resetQueryParams: (nextRouterArgs = {scroll: false}) => {
      router.replace({
        pathname: router.pathname,
        query: Object.fromEntries(Object.entries(getCurrentQuery()).filter(([name, value]) => !name.startsWith(`${id}.`))),
      }, undefined, nextRouterArgs)
    }
  }
}

const buildUseQueryParam = ({config: {id, defaultQueries}}) => ({
  useQueryParam: name => {
    const router = useRouter()
    const queries = parseQuery(id, router.query)
    return queries.hasOwnProperty(name) ? queries[name] : defaultQueries[name]
  },
  useQueryParams: () => {
    const router = useRouter()
    return parseQuery(id, router.query)
  }
})

const buildUseQuery = ({config: {router, id, useQueryProvided, path, defaultQueries}, useQueryParam}, stencil) => {
  const useBaseQuery = useQueryProvided || stencil.queries[stencil.strings.pathToQueryHook(path)]
  return {
    useQuery: ({queries: customQueries = {}, ...rest} = {}) => {
      const limit = useQueryParam('limit')
      const router = useRouter()
      const {page = 1, ...queries} = parseQuery(id, router.query)
      return useBaseQuery({queries: {...defaultQueries, limit, offset: limit * (page - 1), ...queries, ...customQueries}})
    }
  }
}

// Returns the total count of the results for the current query
// with current filters. Once loaded, this value will not reload
// on page change.
const buildUseQueryCount = ({useQuery, useQueryCount}, stencil) => ({
  useQueryCount: () => {
    const [_, { count }] = useQuery({
      queries: { limit: 0, offset: 0 },
    })
    return count
  }
})

const parseQuery = (id, query) =>
  Object.entries(query).reduce((acc, [k, v]) => {
    if (k.startsWith(`${id}.`)) {
      acc[k.slice(id.length + 1)] = v
    }
    return acc
  }, {})

const noNulls = (obj) =>
  Object.entries(obj).reduce((acc, [k, v]) => {
    if (v === null || v === '') {
      return acc
    }
    acc[k] = v
    return acc
  }, {})

const buildList = ({useQuery, EmptyState, Loader, LoadingError, AllLoaders, AllEmptyStates, config: {loader, emptyState, theme}}) => ({
    List: ({queries, children, ...props}) => {
      // TODO: refactor finding the empty state and loader components
      const LoaderComponent = getLoaderComponent({AllLoaders, DefaultLoader: Loader, theme, loader})
      const EmptyStateComponent = getEmptyStateComponent({AllEmptyStates, DefaultEmptyState: EmptyState, theme, emptyState})
      const [results, {error, isLoading}] = useQuery({queries})
      const Child = children
      if (!EmptyState) {
        console.warn('no EmptyState component found. Please add at least one to config.useList.emptyStates')
      }
      if (!LoaderComponent) {
        console.warn('no Loading component found. Please add at least one to config.useList.loader')
      }
      if (!LoadingError) {
        console.warn('no LoadingError component found. Please add at least one to config.useList.loadingErrors')
      }
      if (typeof Child !== 'function') {
        console.warn('children should be a function, that accepts the results as an argument', Child)
        return
      }
      return <>
        {isLoading && (LoaderComponent ? <LoaderComponent /> : '')}
        {error && (LoadingError ? <LoadingError error={error} /> : '')}
        {results?.length === 0 && (EmptyState ? <EmptyStateComponent /> : '')}
        {results?.length > 0 && <Child results={results} /> }
      </>
    }
})

const getLoaderComponent = ({AllLoaders, DefaultLoader, theme, loader}) => {
  if (!loader) {
    return DefaultLoader
  }
  if (typeof loader === 'string') {
    const Component = AllLoaders[Case.pascal(`${theme}${loader}`)] || Object
      .entries(AllLoaders)
      .sort(([n1, c1], [n2, c2]) => c1.priority > c2.priority ? -1 : 1)
      .find(([name, component]) => name === Case.pascal(`${component.theme}${loader}`))?.[1]
    if (!Component) {
      console.warn(`Could not find loader component with name ${loader}`)
      return DefaultLoader
    }
    return Component
  }
  return loader
}

const getEmptyStateComponent = ({AllEmptyStates, DefaultEmptyState, theme, emptyState}) => {
  if (!emptyState) {
    return DefaultEmptyState
  }
  if (typeof emptyState === 'string') {
    const Component = AllEmptyStates[Case.pascal(`${theme}${emptyState}`)] || Object
      .entries(AllEmptyStates)
      .sort(([n1, c1], [n2, c2]) => c1.priority > c2.priority ? -1 : 1)
      .find(([name, component]) => name === Case.pascal(`${component.theme}${emptyState}`))?.[1]
    if (!Component) {
      console.warn(`Could not find empty state component with name ${emptyState}`)
      return DefaultEmptyState
    }
    return Component
  }
  return emptyState
}

const buildEmptyStates = ({config: {theme, anyTheme}}, stencil) => {
  const res = buildComponents({
    stencil,
    components: stencil.config.useList?.emptyStates || [],
    theme,
    anyTheme,
    name: 'EmptyState'
  })
  return res
}

const buildLoaders = ({config: {theme, anyTheme}}, stencil) => {
  const res = buildComponents({
    stencil,
    components: stencil.config.useList?.loaders || [],
    theme,
    anyTheme,
    name: 'Loader'
  })
  return res
}

const buildLoadingErrors = ({config: {theme, anyTheme}}, stencil) => {
  const res = buildComponents({
    stencil,
    components: stencil.config.useList?.loadingErrors || [],
    theme,
    anyTheme,
    name: 'LoadingError'
  })
  return res
}

const buildPaginations = ({useQuery, setQueryParam, useQueryCount, useQueryParam, calculateNewQuery, config: {theme, anyTheme}}, stencil) => {
  const res = buildComponents({
    stencil,
    components: stencil.config.useList?.paginations || [],
    theme,
    anyTheme,
    componentParams: {useQuery, useQueryCount, setQueryParam, useQueryParam, calculateNewQuery},
    name: 'Pagination'
  })
  return res
}
