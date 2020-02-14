import React from 'react'
import cx from 'classnames'
import styles from './input.module.css'

import { IMaskInput } from 'react-imask'

const Input = ({
  name,
  label,
  rightDock,
  className,
  labelStyle,
  onClick,
  ...props
}) => {
  return (
    <div className={cx(styles.container)}>
      <IMaskInput
        id={name}
        name={name}
        type="text"
        placeholder=" "
        className={cx(styles.input)}
        autoComplete="off"
        onClick={onClick}
        {...props}
      />
      <label
        htmlFor={name}
        className={cx(styles.label)}
        onClick={onClick}
        style={labelStyle}
      >
        {label}
      </label>
      {rightDock && <span className={styles.rightDock}>{rightDock}</span>}
    </div>
  )
}

export { Input }
