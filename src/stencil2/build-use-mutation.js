import {useMutation} from '@tanstack/react-query'

export const buildUseMutation = ({config, fetch}) => ({
  useMutation: ({
    path,
    method,
    args = {},
    useToken = config.useQuery?.useToken || (() => [null, {isLoading: false}]),
    reactQueryArgs: {enabled = true, ...reactQueryArgs} = {enabled: true}
  }) => {
    // TODO: validate path and method exists
    const token = useToken()
    return useMutation({
      mutationKey: [
        path,
        ...Object.entries(args).flatMap((x) => x)
      ],
      mutationFn: data => fetch({path, method, args, token, data})
    })
  }
})
