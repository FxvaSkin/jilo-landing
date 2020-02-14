import React from 'react'
import cx from 'classnames'
import styles from './header.module.css'

import { Menu, Item } from 'components/Nav'

import { Link } from 'gatsby'
import { TooltipGroup, Tooltip } from '../../components/Tooltip'

const Header = ({ items }) => (
  <header className={cx(styles.header)}>
    <div className={cx(styles.headerContent)}>
      <h1 className={cx(styles.logo)}>
        <Link to="/#home" className={styles.logoLink}>
          <span role="img" aria-label="gem stone">
            💎
          </span>{' '}
          ЛОМБАРД 61
        </Link>
      </h1>
      <Menu role="navigation">
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
