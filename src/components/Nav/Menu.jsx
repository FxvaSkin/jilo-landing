import React from 'react'
import cx from 'classnames'
import styles from './nav.module.css'

const Menu = ({ children, className, ...props }) => {
  return (
    <nav className={cx(styles.nav)} {...props}>
      <ol className={cx(styles.list)}>{children}</ol>
    </nav>
  )
}

export { Menu }
