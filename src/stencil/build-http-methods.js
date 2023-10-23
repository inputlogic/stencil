
const checkIsProbablyJson = ({body, headers}) => {
  const isFormData = typeof FormData !== 'undefined' && body instanceof FormData
  return headers['Content-Type'] === 'application/json'
    || (typeof(body) === 'object' && !isFormData)
}

const parseResponse = async (response) => {
  const contentType = response.headers.get('Content-Type');
  if (/application\/json/.test(contentType)) {
    return await response.json()
  } else if (/text/.test(contentType)) {
    return await response.text()
  } else if (response.status === 204) {
    return null
  }
}

const _fetch = async (url, {body, headers = {}, token, ...rest}) => {
  const isProbablyJson = checkIsProbablyJson({headers, body})
  const resp = await fetch(url, {
    headers: {
      ...!isProbablyJson ? {} : {'Content-Type': 'application/json'},
      ...!token ? {} : {'Authorization': `Token ${token}`},
      ...headers,
    },
    ...!body ? {} : {
      body: isProbablyJson ? JSON.stringify(body) : body
    },
    ...rest
  })
  const result = await parseResponse(resp)
  if (!resp.ok) {
    throw {
      code: resp.status,
      data: result,
      raw: resp
    }
  } else {
    return result
  }
}

export const buildHttpMethods = (doc, stencil) => {
	return {
    fetch: (name, {method, args, queries, data, token} = {}) => {
      return _fetch(stencil.url(name, { args, queries }), {
        ...!data ? {} : {body: data},
        method,
        token,
      })
    },
		http: Object.entries(doc.paths).reduce((acc, [path, methods]) => ({
			...acc,
			...Object.keys(methods).reduce((acc, method) => {
				const name = stencil.strings.pathToName(path)
				if (!['get', 'post', 'patch', 'delete'].includes(method)) {
					return acc
				}
				return {
					...acc,
					[stencil.strings.pathAndMethodToHttp(name, method)]: async ({
						args,
						queries,
						data,
						token,
					} = {}) => {
            return _fetch(stencil.url(name, { args, params: queries }), {
              ...!data ? {} : {body: data},
              method,
              token,
            })
					},
				}
			}, {}),
		})),
	}
}

