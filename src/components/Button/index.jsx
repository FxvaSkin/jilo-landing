import React from 'react'
import cx from 'classnames'
import styles from './button.module.css'

const Button = ({ children, className, ...props }) => (
  <button className={cx(styles.button, styles.submit, className)} {...props}>
    {children}
  </button>
)

export { Button }
