// TODO: figure out how to import useQuery without this breaking
// "No QueryClient set, use QueryClientProvider to set one" when used
// in another project
// import {useQuery} from 'react-query'

export const buildQueryHooks = (doc, stencil) => ({
    queries: Object.entries(doc.paths).reduce((acc, [path, methods]) => {
      if (!methods.get) return acc
      const name = stencil.strings.pathToName(path)

      const properties =
        methods.get.responses[200].content['application/json'].schema.properties
      const isList = properties.count && properties.next && properties.resources

      const toHookName = stencil.strings.nameToHookName

      return {
        ...acc,
        [toHookName(name)]: isList
          ? ({ args = {}, queries = {}, reactQueryArgs = {} } = {}) => {
              const token = stencil.config.useToken?.()
              const reactQuery = stencil.config.reactQuery.useQuery(
                [
                  name,
                  ...Object.entries(args).flatMap((x) => x),
                  ...Object.entries(queries).flatMap((x) => x),
                ],
                () => stencil.fetch(name, {args, queries, token}),
                reactQueryArgs
              )
              return [
                reactQuery.data?.results,
                { ...reactQuery, count: reactQuery.data?.count },
              ]
            }
          : ({ args = {}, queries = {}, reactQueryArgs = {} } = {}) => {
              const token = stencil.config.useToken?.()
              const reactQuery = stencil.config.reactQuery.useQuery(
                [
                  name,
                  ...Object.entries(args).flatMap((x) => x),
                  ...Object.entries(queries).flatMap((x) => x),
                ],
                () => stencil.fetch(name, { args, queries, token }),
                reactQueryArgs
              )
              return [reactQuery.data, reactQuery]
            },
        ...(!isList
          ? {}
          : {
              [`${toHookName(name)}Infinite`]: (
                { args = {}, queries: { limit = 25, ...queries } = {} } = {},
                reactQueryArgs
              ) => {
                const token = stencil.config.useToken?.()
                const reactQuery = stencil.config.reactQuery.useInfiniteQuery(
                  [
                    name,
                    ...Object.entries(args).flatMap((x) => x),
                    ...Object.entries(queries).flatMap((x) => x),
                    'infinite',
                  ],
                  async ({ pageParam = 0 }) => {
                    const result = await stencil.fetch(name, {
                      args,
                      queries: {
                        ...queries,
                        limit,
                        offset: pageParam * limit,
                      },
                      token
                    })
                    return { result, pageParam }
                  },
                  {
                    ...reactQueryArgs,
                    getNextPageParam: ({ pageParam, result }) => pageParam + 1,
                    getPreviousPageParam: ({ pageParam, result }) =>
                      pageParam === 0 ? undefined : pageParam - 1,
                  }
                )
                return [
                  reactQuery.data?.pages?.flatMap(
                    (page) => page.result.results
                  ),
                  {
                    ...reactQuery,
                    count: reactQuery.data?.pages?.[0]?.result?.count,
                  },
                ]
              },
            }),
      }
    }, {}),
  })
