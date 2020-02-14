import React, { useRef, useContext } from 'react'
import cx from 'classnames'
import styles from './tooltip.module.css'
import { TooltipContext } from './TooltipContext'

const Tooltip = ({ label, position = 'bottom', children }) => {
  const ref = useRef()
  const { onHover, onUnhover } = useContext(TooltipContext)
  return (
    <div
      className={cx(styles.container)}
      onMouseEnter={() => onHover(ref, label, position)}
      onMouseLeave={() => onUnhover()}
    >
      {children}
      <div ref={ref} className={cx(styles.bone, styles[position])} />
    </div>
  )
}

export { Tooltip }
