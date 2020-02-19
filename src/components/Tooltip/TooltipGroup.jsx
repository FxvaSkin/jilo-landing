import React from 'react'
import cx from 'classnames'
import styles from './tooltip.module.css'
import { TooltipContext } from './TooltipContext'
import { useTooltip } from './useTooltip'
import { Portal } from '../Portal'

const TooltipGroup = ({ children }) => {
  const { target, onHover, onUnhover } = useTooltip()
  if (typeof window === 'undefined') return null

  const box = target?.elem.current.getBoundingClientRect()

  const body = document.body
  const docEl = document.documentElement

  const scrollTop = window?.pageYOffset || docEl.scrollTop || body.scrollTop
  const scrollLeft = window?.pageXOffset || docEl.scrollLeft || body.scrollLeft

  const clientTop = docEl.clientTop || body.clientTop || 0
  const clientLeft = docEl.clientLeft || body.clientLeft || 0

  const top = box && box.top + scrollTop - clientTop
  const left = box && box.left + scrollLeft - clientLeft

  return (
    <TooltipContext.Provider value={{ onHover, onUnhover }}>
      <div className={styles.group}>
        {children} {/* Все тултипы (кости) в группе */}
        {top && left && (
          <Portal>
            <div
              onMouseEnter={() =>
                onHover(target.elem, target.label, target.position)
              }
              onMouseLeave={() => onUnhover()}
              className={cx(styles.tooltip, styles[target.position])}
              style={{
                top,
                left,
              }}
            >
              {target && target.label}
            </div>
          </Portal>
        )}
      </div>
    </TooltipContext.Provider>
  )
}

export { TooltipGroup }
