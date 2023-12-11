import {useQuery, useInfiniteQuery} from 'react-query'

export const buildQueryHooks = (doc, stencil) => ({
    queries: Object.entries(doc.paths).reduce((acc, [path, methods]) => {
      if (!methods.get) return acc
      const name = stencil.strings.pathToName(path)

      const properties =
        methods.get.responses[200].content['application/json'].schema.properties
      const isList = properties.count && properties.next && properties.results

      const toHookName = stencil.strings.nameToHookName

      return {
        ...acc,
        [toHookName(name)]: isList
          ? ({ args = {}, queries = {}, reactQueryArgs = {} } = {}) => {
              const token = stencil.config.useToken?.()
              const reactQuery = useQuery(
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
              const reactQuery = useQuery(
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
                const reactQuery = useInfiniteQuery(
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
