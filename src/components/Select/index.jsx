import React, { useState } from 'react'

import { Dropdown } from '../Dropdown'
import { Input } from '../Input'
import { Menu, MenuItem } from '../Menu'

const ArrowSvg = props => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
    shape-rendering="geometricPrecision"
    style={{ display: 'block', cursor: 'pointer' }}
    {...props}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
)

const Select = ({
  name,
  label,
  value,
  onChange,
  className,
  items,
  rightDock,
  style,
  ...props
}) => {
  const [open, setOpen] = useState(open)

  const onClose = () => {
    setOpen(false)
  }

  const onOpen = () => {
    setOpen(true)
  }

  const handleClickItem = (event, value) => {
    onChange && onChange(value)
    onClose()
  }

  const content = (
    <Menu>
      {items?.map(item => (
        <MenuItem
          key={item.value}
          onClick={event => handleClickItem(event, item.value)}
        >
          {item.title}
        </MenuItem>
      ))}
    </Menu>
  )

  return (
    <Dropdown open={open} onClose={onClose} content={content} style={style}>
      <Input
        readOnly
        name={name}
        label={label}
        value={value}
        onClick={onOpen}
        rightDock={
          <>
            {rightDock && rightDock}
            <ArrowSvg onClick={onOpen} />
          </>
        }
        style={{ cursor: 'pointer' }}
        labelStyle={{ cursor: 'pointer' }}
        {...props}
      />
    </Dropdown>
  )
}

export { Select }
