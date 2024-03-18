import {useEffect} from 'react'
import {useMutation} from '@tanstack/react-query'

export const buildUseMutation = ({openapi, config, fetch}) => ({
  useMutation: ({
    path,
    method,
    args = {},
    useToken = config.useToken || (() => [null, {isLoading: false}]),
    reactQueryArgs: {enabled = true, ...reactQueryArgs} = {enabled: true}
  }) => {
    useEffect(() => {
      if (!openapi.paths[path]?.[method]) {
        console.warn('Openapi document does not include path:', path, 'and method:', method)
      }
    }, [path, method])
    const [token] = useToken()
    return useMutation({
      mutationKey: [
        path,
        ...Object.entries(args).flatMap((x) => x)
      ],
      mutationFn: data => fetch({path, method, args, token, body: data})
    })
  }
})
