import * as Case from 'case'

export const buildStrings = (doc) => {
  const pathToName = (path) => Case.camel(path.replace(/(.+)\{(.+)\}/g, '$1Detail'))

  const pathToJSPath = (path) => path.replace(/(.+)\{(.+)\}/g, '$1:$2')

  const pathAndMethodToHttp = (path, method) =>
    `${pathToName(path)}${Case.title(method)}`

  const pathToQueryHook = (path) => `use${Case.pascal(pathToName(path))}`

  const pathAndMethodToMutationHook = (path, method) => {
    const isEdit = method.toLowerCase() === 'patch'
    const isDelete = method.toLowerCase() === 'delete'
    return [
      'use',
      Case.pascal(pathToName(path)),
      ...(isEdit ? ['Edit'] : []),
      ...(isDelete ? ['Delete'] : []),
      'Mutation',
    ].join('')
  }

  return {
    strings: {
      pathToName,
      pathToJSPath,
      pathAndMethodToHttp,
      pathToQueryHook,
      pathAndMethodToMutationHook,
      nameToHookName: name => `use${Case.pascal(name)}`,
      nameToOpenapiPath: name => Object.keys(doc.paths).find(path => name === pathToName(path))
    },
  }
}
