export const buildFetch = ({url, config}) => ({
  fetch: async ({path, args, queries, body, token, headers, ...rest}) => {
    const resp = await fetch(url({path, args, queries}), {
      headers: {
        // TODO: consider making config able to pass a function to calculate default headers
        // eg. if there is a token, include Authorization
        ...(config.fetch?.headers?.({path, args, queries, body, token, headers, ...rest}) || {}),
        ...headers
      }
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
