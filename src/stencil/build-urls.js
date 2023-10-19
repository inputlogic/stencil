
export const buildUrls = (doc, toolkit) => {
  const urls = Object.keys(doc.paths).reduce(
    (acc, path)=> ({
      ...acc,
      [toolkit.strings.pathToName(path)]: toolkit.strings.pathToJSPath(path),
    }),
    {}
  )

  const url = (name, {args = {}, queries, server = toolkit.config.server?.url}) => {
    // let u = settings.apiUrl + apiUrls[pathName]
    let u = urls[name]
    for (const[k, v] of Object.entries(args)) {
      u = u.replace(`:${k}`, v)
    }
    const fullPath = queries ? `${u}?${new URLSearchParams(queries).toString()}`: u
    return `${server}${fullPath}`
  }

  return {
    urls,
    url,
  }
}
