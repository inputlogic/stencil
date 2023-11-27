export const ServerUrl = ({stencil, servers, setServers, setActiveServer, activeServerUrl}) => {
  const onClickRemove = (url) => {
    const {[url]: _url, ...remainingServers} = servers
    setServers(remainingServers)
  }
  const onClickSetActive = (url) => {
    setActiveServer(url)
  }
  const onClickApply = () => {
    setServers({
      ...servers,
      [newUrl]: {}
    })
    setActiveServer(newUrl)
  }
  const onChangeSelect = ev => {
    if (!servers[ev.target.value]) {
      setServers({...servers, [ev.target.value]: {}})
    }
    setActiveServer(ev.target.value)
  }
  return <div>
    <h4>Server</h4>
    <div>
      <input placeholder='Server Url' onChange={ev => setNewUrl(ev.target.value)} />
      <button onClick={onClickApply} >Apply</button>
    </div>
    <select onChange={onChangeSelect} >
      <option value='' />
      {stencil.doc.servers.map(server =>
        <option key={server.url} value={server.url} >{server.description} - {server.url}</option>
      )}
    </select>
    <div>
      {Object.keys(servers || {}).map(url =>
        <div key={url}>
          {url}{url === activeServerUrl ? ' (active)' : ''}
          <button onClick={() => onClickRemove(url)} >Remove</button>
          {url !== activeServerUrl && <button onClick={() => onClickSetActive(url)} >Set Active</button>}
        </div>
      )}
    </div>
  </div>
}
