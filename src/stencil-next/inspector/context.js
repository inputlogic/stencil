import { createContext, useContext } from 'react'

export const StencilContext = createContext()
export const useStencilContext = () => useContext(StencilContext)
