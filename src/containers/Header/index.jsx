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
          <span role="img" aria-label="gem stone" className={styles.logoIcon}>
            💎
          </span>
          Jilo
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
