import {useRouter} from 'next/router'
import {useMemo} from 'react'
import {buildFilters} from './build-filters'
import {buildComponents} from '../../utils/build-components'

export const buildUseList = (doc, stencil) => ({
  useList: (name, {theme = 'default', anyTheme = true, id, useQuery: useQueryProvided, ...options} = {}) => {
    id = id || name
    const router = useRouter()
    return useMemo(
      () => {
        const path = stencil.strings.nameToOpenapiPath(name)
        if (!path) {
          throw Error(`No endpoint named ${name}`)
        }
        const properties = doc.paths[path].get.parameters

        const builders = [
          buildSetQueryParam,
          buildUseQueryParam,
          buildUseQuery,
          buildEmptyStates,
          buildLoading,
          buildLoadingErrors,
          buildFilters,
          buildList,
        ]

        return builders.reduce((acc, builder) => ({
          ...acc,
          ...builder(acc, stencil)
        }), {config: {properties, name, theme, anyTheme, router, id, useQueryProvided, path}})
      },
      [name]
    )
  }
})

const buildSetQueryParam = ({config: {router, id}}) => ({
  setQueryParam: (name, value) => {
    router.replace({
      pathname: router.pathname,
      query: noNulls({
        ...router.query,
        [`${id}.page`]: null,
        [`${id}.f.${name}`]: value,
      }),
    })
  }
})

const buildUseQueryParam = ({config: {router, id}}) => ({
  useQueryParam: name => {
    const router = useRouter()
    const queries = parseQuery(id, router.query)
    return queries.filters?.[name]
  }
})

const buildUseQuery = ({config: {router, id, useQueryProvided, path}}, stencil) => {
  const useBaseQuery = useQueryProvided || stencil.queries[stencil.strings.pathToQueryHook(path)]

  return {
    useQuery: ({queries: customQueries = {}, ...rest} = {}) => {
      const router = useRouter()
      const queries = parseQuery(id, router.query)
      return useBaseQuery({queries: {...customQueries, ...queries.filters}})
    }
  }
}


const parseQuery = (id, query) =>
  Object.entries(query).reduce((acc, [k, v]) => {
    if (k.startsWith(`${id}.`)) {
      if (k.startsWith(`${id}.f.`)) {
        acc.filters = {
          ...(acc.filters || {}),
          [k.slice(id.length + 3)]: v,
        }
      } else {
        acc[k.slice(id.length + 1)] = v
      }
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

const buildList = ({useQuery, EmptyState, Loading, LoadingError}) => ({
    List: ({queries, children, ...props}) => {
      const [results, {error, isLoading}] = useQuery({queries})
      const Child = children
      if (!EmptyState) {
        console.warn('no EmptyState component found. Please add at least one to config.useList.emptyStates')
      }
      if (!Loading) {
        console.warn('no Loading component found. Please add at least one to config.useList.loading')
      }
      if (!LoadingError) {
        console.warn('no LoadingError component found. Please add at least one to config.useList.loadingErrors')
      }
      if (typeof Child !== 'function') {
        console.warn('children should be a function, that accepts the results as an argument', Child)
        return
      }
      return <>
        {isLoading && (Loading ? <Loading /> : '')}
        {error && (LoadingError ? <LoadingError error={error} /> : '')}
        {results?.length === 0 && (EmptyState ? <EmptyState /> : '')}
        {results?.length > 0 && <Child results={results} /> }
      </>
    }
})

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

const buildLoading = ({config: {theme, anyTheme}}, stencil) => {
  const res = buildComponents({
    stencil,
    components: stencil.config.useList?.loading || [],
    theme,
    anyTheme,
    name: 'Loading'
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
