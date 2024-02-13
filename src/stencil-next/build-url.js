export const buildUrl = ({openapi, config}) => {
  return {
    url: ({path, args = {}, queries = {}, server = config.url?.server || ''}) => {
      if (!openapi.paths[path]) {
        console.warn('Openapi document does not include path:', path)
      }
      const pathWithArgs = Object.entries(args).reduce((p, [k, v]) => p.replace(`{${k}}`, v), path)
      const fullPath = Object.keys(queries).length > 0 ? `${pathWithArgs}?${new URLSearchParams(queries).toString()}`: pathWithArgs
      return `${server}${fullPath}`
    }
  }
}
