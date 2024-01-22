import {useQuery} from '@tanstack/react-query'

export const buildUseQuery = ({fetch, config}) => ({
  useQuery: ({
    path,
    args = {},
    queries = {},
    useToken = config.useQuery?.useToken || (() => [null, {isLoading: false}]),
    reactQueryArgs: {enabled = true, ...reactQueryArgs} = {enabled: true}
  }) => {
    // TODO: validate path exists
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
