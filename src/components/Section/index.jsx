import React from 'react'
import cx from 'classnames'
import styles from './section.module.css'

const Section = ({ id, children, className, contentClassName, ...props }) => (
  <section id={id} className={cx(styles.section, className)} {...props}>
    <div className={cx(styles.content, contentClassName)}>{children}</div>
  </section>
)

export { Section }
