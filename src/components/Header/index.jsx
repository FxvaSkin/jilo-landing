import React from 'react'
import cx from 'classnames'
import styles from './header.module.css'

const Header = ({ as: Comp = 'h1', children, className, ...props }) => (
  <Comp className={cx(styles.header, className)} {...props}>
    {children}
  </Comp>
)

export { Header }
