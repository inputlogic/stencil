export const buildUrl = ({config}) => {
  return {
    url: ({path, args = {}, queries = {}, server = config.url?.server || ''}) => {
      const pathWithArgs = Object.entries(args).reduce((path, [k, v]) => path.replace(`{${k}}`, v), path)
      const fullPath = Object.keys(queries).length > 0 ? `${pathWithArgs}?${new URLSearchParams(queries).toString()}`: pathWithArgs
      return `${server}${fullPath}`
    }
  }
}
