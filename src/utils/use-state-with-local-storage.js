import {useState, useEffect} from 'react'

export const useStateWithLocalStorage = (name, initialValue) => {
  const [initialized, setInitialized] = useState(false)
  const [value, setValue] = useState()
  useEffect(() => {
    if (!initialized) {
      const existing = JSON.parse(localStorage.getItem(name))
      if (existing?.value) {
        setValue(existing.value)
      } else if (initialValue) {
        setValue(initialValue)
        localStorage.setItem(name, JSON.stringify({value: initialValue}))
      }
      setInitialized(true)
      return
    }
    localStorage.setItem(
      name,
      JSON.stringify({value})
    )
  }, [value, initialized, initialValue])
  return [value || JSON.parse(localStorage.getItem(name))?.value, setValue]
}
