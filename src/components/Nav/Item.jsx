import React from 'react'
import cx from 'classnames'
import styles from './nav.module.css'

const Item = ({ children, className, ...props }) => {
  return (
    <li className={cx(styles.item, className)} {...props}>
      {children}
    </li>
  )
}

export { Item }
