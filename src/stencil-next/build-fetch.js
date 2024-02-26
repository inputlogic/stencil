export const buildFetch = ({openapi, url, config}) => ({
  fetch: async ({path, method = 'get', args, queries, body, token, headers, ...rest}) => {
    if (!openapi.paths[path]?.[method]) {
      console.warn('Openapi document does not include path:', path, 'and method:', method)
    }
    const resp = await fetch(url({path, args, queries}), {
      method: method.toUpperCase(),
      headers: {
        // TODO: consider making config able to pass a function to calculate default headers
        // eg. if there is a token, include Authorization
        ...(config.fetch?.headers?.({path, method, args, queries, body, token, headers, ...rest}) || {}),
        ...headers
      },
      ...(body ? {body: JSON.stringify(body)} : {})
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
})

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
