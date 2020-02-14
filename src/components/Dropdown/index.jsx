import React, { useRef } from 'react'
import cx from 'classnames'
import styles from './dropdown.module.css'

import { useClickOutside } from 'hooks/useClickOutside'

const Dropdown = ({
  open,
  onClose,
  content,
  children,
  className,
  ...props
}) => {
  const ref = useRef()
  useClickOutside(ref, onClose)
  return (
    <div ref={ref} className={cx(styles.dropdown)} {...props}>
      {children}
      <div className={cx(styles.content, open && styles.open, className)}>
        {content}
      </div>
    </div>
  )
}

export { Dropdown }
