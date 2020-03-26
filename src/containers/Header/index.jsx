import React from 'react'
import cx from 'classnames'
import styles from './header.module.css'

import { Menu, Item } from 'components/Nav'
import { Link } from 'gatsby'

const Header = ({ items }) => (
  <header className={cx(styles.header)}>
    <div className={cx(styles.headerContent)}>
      <h1 className={cx(styles.logo)}>
        <Link to="/#top" className={styles.logoLink}>
          {/* <span role="img" aria-label="gem stone" className={styles.logoIcon}> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="248.01"
            height="192.03"
            viewBox="0 0 248.01 192.03"
            className={styles.logoIcon}
          >
            <g transform="translate(-0.05 0.35)">
              <path d="M67.91-.35,81.02,12.76,26.21,67.57,137.22,178.58l-13.11,13.1L.05,67.63Z" />
              <path d="M158.27,157.33l-13.21,13.2L108.32,133.8l13.5-13.51Z" />
              <path d="M179.18,136.15l-13.2,13.2-36.74-36.74,13.5-13.5Z" />
              <path d="M111.09,49.44l13.23-13.23s76.71,75.43,76.71,76.71a.984.984,0,0,0,1.12,1.12l-13.53,13.53Z" />
              <path d="M72.08,96.01,84.5,83.59,71.3,70.38,120.38,21.3h57l45.57,45.57L200.56,89.26l-.87.88L212.54,103l35.52-35.52L183.2,2.63H111.59L44.8,69.42Z" />
            </g>
          </svg>
          {/* </span> */}
          <span style={{ letterSpacing: '3px', fontWeight: 400 }}>
            ГАРАВХОНА
          </span>
        </Link>
      </h1>
      <Menu role="navigation" className={styles.nav}>
        {items?.map(item => (
          <Item key={item.key}>
            <Link to={item.to}>{item.title}</Link>
          </Item>
        ))}
      </Menu>
    </div>
  </header>
)

export { Header }
