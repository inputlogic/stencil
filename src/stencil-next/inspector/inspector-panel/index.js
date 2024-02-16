import { ReactQueryDevtoolsPanel } from 'react-query/devtools'
import { useState, useEffect, forwardRef, useRef, useMemo } from 'react'
import fuzzy from 'fuzzy'
import classnames from 'classnames'
import styles from './panel.module.scss'

export const InspectorPanel = ({ options = FAKE_OPTIONS }) => {
  const [hoverOption, setHoverOption] = useState()
  const [filteredOptions, setFilteredOptions] = useState(options)
  const [flattenedOptions, setFlattenedOptions] = useState(
    flattenOptions(options),
  )
  const [activeOption, setActiveOption] = useState(options[0])
  const [filter, setFilter] = useState('')
  const [showPanel, setShowPanel] = useState(false)
  const inputRef = useRef()
  const updateFilter = (filter) => {
    const filtered = nestedFuzzyFilter({ options, filter })
    const flattened = flattenOptions(filtered)
    setFilter(filter)
    setFilteredOptions(filtered)
    setHoverOption(flattened.find((opt) => opt.isDirectMatch))
    setFlattenedOptions(flattened)
  }
  const onChangeFilter = (ev) => {
    const filter = ev.target.value
    updateFilter(filter)
  }
  useEffect(() => {
    setFilteredOptions(options)
    setFlattenedOptions(flattenOptions(options))
    setFilter('')
  }, [options])
  useKeyboard((key, ev) => {
    const isActive = inputRef.current === document.activeElement
    if (!isActive) return
    if (key === 'ArrowDown' || (key === 'j' && ev.ctrlKey)) {
      ev.preventDefault()
      const index = flattenedOptions.findIndex(
        (option) => option.label === hoverOption?.label,
      )
      setHoverOption(flattenedOptions[(index + 1) % flattenedOptions.length])
    } else if (key === 'ArrowUp' || (key === 'k' && ev.ctrlKey)) {
      ev.preventDefault()
      const index = flattenedOptions.findIndex(
        (option) => option.label === hoverOption?.label,
      )
      setHoverOption(
        flattenedOptions[index === 0 ? flattenedOptions.length - 1 : index - 1],
      )
    } else if (key === 'Enter') {
      updateFilter('')
      setActiveOption(hoverOption)
      setHoverOption(hoverOption)
    }
  })
  useKeyboard((key, event) => {
    // show / hide the panel when command + alt + n is pressed
    if (key === '~' && event.metaKey && event.altKey) {
      setShowPanel((showing) => {
        if (!showing) {
          setTimeout(() => {
            inputRef.current?.focus()
          }, 10)
        }
        return !showing
      })
    }
  })

  const ActiveComponent = activeOption?.component

  return (
    <div
      className={classnames(styles.panel, showPanel && styles['show-panel'])}
    >
      <nav>
        <input
          value={filter}
          placeholder="Search..."
          onChange={onChangeFilter}
          ref={inputRef}
        />
        <div>
          <Options
            filter={filter}
            onMouseOver={(option) => setHoverOption(option)}
            options={filteredOptions}
            hoverOption={hoverOption}
            activeOption={activeOption}
            onClickOption={(option) => setActiveOption(option)}
          />
          {/* {filteredOptions.map((option) => ( */}
          {/*   <> */}
          {/*     <div key={option.label}>{option.label}</div> */}
          {/*     {option.options?.map((option) => ( */}
          {/*       <div key={option.label}>{option.label}</div> */}
          {/*     ))} */}
          {/*   </> */}
          {/* ))} */}
        </div>
      </nav>
      <div className={styles.content}>
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  )
}

const useKeyboard = (callback) => {
  useEffect(() => {
    const handleKeydown = (event) => {
      callback(event.key, event)
    }

    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [callback])
}

const FAKE_OPTIONS = [
  {
    label: 'config',
    fuzzyText: 'openapi url',
    component: () => <h2>Config</h2>,
    options: [
      {
        label: 'account',
        fuzzyText: 'users',
        component: () => <h2>Account</h2>,
      },
    ],
  },
  {
    label: 'useForm',
    fuzzyText: 'fields',
    component: () => <h2>useForm</h2>,
    options: [
      {
        label: 'publicUserLogin',
        component: () => <h2>publicUserLogin</h2>,
      },
    ],
  },
  {
    label: 'useList',
    component: () => <h2>useList</h2>,
    options: [
      {
        label: 'usePublicSitesSites',
        component: () => <h2>usePublicSitesSites</h2>,
      },
    ],
  },
  {
    label: 'react query',
    component: () => (
      <ReactQueryDevtoolsPanel className={styles['react-query']} />
    ),
  },
]

const Options = ({
  options,
  onMouseOver,
  filter,
  activeOption,
  onClickOption,
  hoverOption,
  nested = 0,
}) => {
  return options.map((option) => (
    <div key={option.label}>
      <button
        title={option.label}
        onClick={() => onClickOption(option)}
        onMouseOver={() => onMouseOver(option)}
        className={classnames(
          !!filter && !option.isDirectMatch && styles['parent-of-active'],
          activeOption?.label === option.label && styles['active-option'],
          hoverOption?.label === option.label && styles['hover-option'],
          styles[`nested-${nested}`],
        )}
      >
        {option.label}
      </button>
      {option.options && (
        <Options
          nested={nested + 1}
          hoverOption={hoverOption}
          options={option.options}
          filter={filter}
          activeOption={activeOption}
          onClickOption={onClickOption}
          onMouseOver={onMouseOver}
        />
      )}
    </div>
  ))
}

const nestedFuzzyFilter = ({ options, filter }) =>
  options
    .map((option) => {
      const isDirectMatch = !!fuzzy.match(
        filter,
        `${option.label} ${option.fuzzyText || ''}`,
      )
      const nested = nestedFuzzyFilter({
        options: option.options || [],
        filter,
      })
      return {
        ...option,
        ...(option.options ? { options: nested } : {}),
        isDirectMatch,
        hasChildMatch: nested.some(
          (opt) => opt.isDirectMatch || opt.hasChildMatch,
        ),
      }
    })
    .filter((option) => option.isDirectMatch || option.hasChildMatch)

const findOption = ({ options, predicate }) =>
  options.reduce(
    (acc, option) =>
      acc
        ? acc
        : predicate(option)
        ? option
        : option.options?.length > 0
        ? findOption({ options: option.options, predicate })
        : null,
    null,
  )

const flattenOptions = (options) =>
  options.reduce((acc, option) => {
    acc.push(option)
    if (option.options) {
      return acc.concat(flattenOptions(option.options))
    }
    return acc
  }, [])

