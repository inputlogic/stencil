import {useEffect} from 'react'
import {useQuery} from '@tanstack/react-query'

export const buildUseQuery = ({openapi, fetch, config}) => ({
  useQuery: ({
    path,
    method = 'get',
    args = {},
    queries = {},
    useToken = config.useToken || (() => [null, {isLoading: false}]),
    reactQueryArgs: {enabled = true, ...reactQueryArgs} = {enabled: true}
  }) => {
    useEffect(() => {
      if (!openapi.paths[path]?.[method]) {
        console.warn('Openapi document does not include path:', path, 'and method:', method)
      }
    }, [path, method])
    const [token, {isLoading: isLoadingToken}] = useToken()
    const reactQuery = useQuery({
      queryKey: [
        path,
        ...Object.entries(args).flatMap((x) => x),
        ...Object.entries(queries).flatMap((x) => x),
      ],
      queryFn: () => fetch({path, args, queries, token}),
      enabled: !isLoadingToken && enabled,
      ...reactQueryArgs
    })
    return config.useQuery?.formatResponse?.(reactQuery) || [
      reactQuery.data,
      reactQuery
    ]
  }
})
