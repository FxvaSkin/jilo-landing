import React from 'react'
import cx from 'classnames'
import styles from './menu.module.css'

const Menu = ({ children, ...props }) => {
  return (
    <ul className={cx(styles.menu)} {...props}>
      {children}
    </ul>
  )
}

const MenuItem = ({ children, className, ...props }) => (
  <li className={cx(styles.item, className)} {...props}>
    {children}
  </li>
)

export { Menu, MenuItem }
