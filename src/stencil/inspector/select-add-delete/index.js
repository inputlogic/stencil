
import { useState, useEffect } from 'react'
import { Root, Trigger, Portal, Content } from '@radix-ui/react-popover'
import classnames from 'classnames'
import styles from './select-add-delete.module.scss'

export const SelectAddDelete = ({ label, activeOption, otherOptions = [], onClickDelete, onClickOption, addComponent: AddComponent }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [addAnother, setAddAnother] = useState(false)
  useEffect(() => {
    if (!isOpen) setAddAnother(false)
  }, [isOpen])

  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger asChild>
        <button className={styles.trigger} title={`Openapi Document: ${activeOption?.label}`} >
          {label}{activeOption ? ': ' : ''}<span>{activeOption?.label}</span>
        </button>
      </Trigger>
      <Portal>
        <Content className={styles['content']} sideOffset={8} align={'start'}>
          {!addAnother && (
            <div>
              {activeOption && (
                <div className={styles.current}>
                  <span title={activeOption.label} >{activeOption.label}</span>
                  {activeOption.canDelete && (
                    <button
                      onClick={() => {
                        onClickDelete() 
                        setIsOpen(false)
                      }}
                      className={styles['text-button']}
                    >
                      Delete
                    </button>
                  )}
                </div>
              )}
              <div className={styles['other-list']}>
                {otherOptions.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => {
                      onClickOption(option)
                      setIsOpen(false)
                    }}
                    className={styles.option}
                    title={option.label}
                  >
                    {option.label}
                  </button>
                ))}
                <button
                  title="Add another"
                  onClick={() => setAddAnother(true)}
                  className={classnames(styles.option, styles.add)}
                >
                  + Add another
                </button>
              </div>
            </div>
          )}
          {addAnother && (
            <div className={styles['second-menu']}>
              <button
                className={styles['text-button']}
                onClick={() => setAddAnother(false)}
              >
                Back
              </button>
              <AddComponent close={() => setIsOpen(false)} />
            </div>
          )}
        </Content>
      </Portal>
    </Root>
  )
}

