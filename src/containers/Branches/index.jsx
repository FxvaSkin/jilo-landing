import React from 'react'

import cx from 'classnames'
import styles from './branches.module.css'

import { Section } from 'components/Section'
import { Header } from 'components/Header'

const Branches = () => {
  return (
    <Section id="branches" contentClassName={cx(styles.section)}>
      <Header as="h2" className={styles.header}>
        Филиалы
      </Header>
      <p className={styles.description}>
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
          className={styles.icon}
        >
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
          <circle cx="12" cy="17" r=".5" />
        </svg>
        Выберите филиал на карте для просмотра режима работы и номера телефона
      </p>
    </Section>
  )
}

export { Branches }
