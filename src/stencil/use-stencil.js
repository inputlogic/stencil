import { useMemo } from 'react'
import { buildStencil } from './build-stencil'

export const useStencil = (doc, config) => {
  return useMemo(() => {
    if (!doc || !config) return
    return buildStencil(doc, config)
  }, [doc?.info?.title, config.server?.url, config?.useToken])
}
