import React from 'react'
import cx from 'classnames'
import styles from './badge.module.css'

const Badge = ({ value, children, className, ...props }) => (
  <div className={styles.container}>
    {children}
    <div className={cx(styles.badge, className)} {...props}>
      {value}
    </div>
  </div>
)

export { Badge }
