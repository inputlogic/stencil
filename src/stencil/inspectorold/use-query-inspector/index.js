import JsonView from 'react18-json-view'
import unused from 'react18-json-view/src/style.css' // Need to import this as a variable or rollup does not include it
import { useState } from 'react'

// TODO: figure out how to not need to do this and still have rollup include the css in the output js file
const sillyFunc = (unused) => { 
  console.log(unused.slice(0, 1))
}
sillyFunc(unused)

const QueryInspector = ({ useQuery }) => {
  const response = useQuery()
  return (
    <div>
      <JsonView src={response} collapseObjectsAfterLength={2} />
    </div>
  )
}

export const UseQueryInspector = ({stencil}) => {
  const [query, setQuery] = useState()
  return (
    <div>
      <h3>useQuery Inspector</h3>
      {stencil && (
        <div>
          <select onChange={(ev) => setQuery(ev.target.value)}>
            <option value="" />
            {Object.keys(stencil.queries).map((query) => (
              <option key={query} value={query}>
                {query}
              </option>
            ))}
          </select>
        </div>
      )}
      {query && <QueryInspector useQuery={stencil.queries[query]} />}
    </div>
  )
}

