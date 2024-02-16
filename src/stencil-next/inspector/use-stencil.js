import { useMemo } from 'react'
import { buildStencil } from '../build-stencil'

export const useStencil = (stencil) => {
  return useMemo(() => {
    if (!stencil) return
    return buildStencil({openapi: stencil.openapi, config: stencil.config})
  }, [stencil?.openapi?.info?.title, stencil?.config?.server?.url, stencil?.config?.useToken])
}

