import JsonView from 'react18-json-view'
import unused from 'react18-json-view/src/style.css' // Need to import this as a variable or rollup does not include it
import { useState } from 'react'
import { useStencilContext } from '../context'

// TODO: figure out how to not need to do this and still have rollup include the css in the output js file
const sillyFunc = (unused) => { 
  console.log(unused.slice(0, 1))
}
sillyFunc(unused)

export const QueryInspector = ({name}) => {
  const {stencil} = useStencilContext()
  const token = stencil.config.useToken()
  const useQuery = stencil.queries[name]
  const response = useQuery()
  return (
    <div>
      <JsonView src={response} />
    </div>
  )
}
