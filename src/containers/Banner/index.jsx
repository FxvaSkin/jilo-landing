import React from 'react'
import cx from 'classnames'
import styles from './banner.module.css'

import { Section } from 'components/Section'
import { Header } from 'components/Header'

const Banner = () => (
  <Section id="home" className={cx(styles.container)}>
    <div className={cx(styles.content)}>
      <div>
        <Header className={cx(styles.logo)}>
          Кредит
          <br />
          на руку
          <br />
          за 5 минут.
        </Header>
        <p className={cx(styles.description)}>
          <span>
            Для повторных клиентов выдача займа занимает не более 3-х минут
          </span>
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img
          draggable={false}
          src="https://zigmund.online/images/pair.png"
          alt="banner"
          className={styles.image}
        />
      </div>
    </div>
  </Section>
)

export { Banner }
