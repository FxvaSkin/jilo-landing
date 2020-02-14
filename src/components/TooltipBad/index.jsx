import React, { useState, useRef } from 'react'
import cx from 'classnames'
import styles from './tooltip.module.css'

import { CSSTransition } from 'react-transition-group'

import { Portal } from '../Portal'

const TooltipBody = ({
  targetRef: ref,
  label = 'tooltip',
  position = 'right',
  className,
  ...props
}) => {
  const rect = ref?.current?.getBoundingClientRect()

  console.log(rect)

  // const newRect = rect && {
  //   top: childRect.top - rect.top,
  //   right: childRect.right - rect.right,
  //   bottom: childRect.bottom - rect.bottom,
  //   left: childRect.left - rect.left,
  // }
  return (
    <div
      className={cx(styles.container, className)}
      style={{ top: rect.y + rect.top, left: rect.left }}
      {...props}
    >
      {label}
    </div>
  )
}

const Tooltip = ({ children, ...props }) => {
  const ref = useRef()
  const [open, setOpen] = useState(false)
  const onHover = () => {
    setOpen(true)
  }
  const onUnhover = () => {
    setOpen(true)
  }

  return (
    <>
      <div
        ref={ref}
        onMouseEnter={() => onHover()}
        onMouseLeave={() => onUnhover()}
        className={cx(styles.wrapper)}
      >
        {children}
      </div>
      <Portal>
        <CSSTransition
          in={open}
          timeout={0}
          classNames={styles}
          mountOnEnter={false}
          unmountOnExit
        >
          <TooltipBody targetRef={ref} {...props} />
        </CSSTransition>
      </Portal>
    </>
  )
}

export { Tooltip }
