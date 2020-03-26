import React from 'react'
import cx from 'classnames'
import styles from './whyme.module.css'
import { Section } from 'components/Section'
import { Header } from 'components/Header'

import { Item1, Item2, Item3, Item4, Item5, Item6 } from 'images/icons'

import tyanImg from 'images/tyan.png'
import kynImg from 'images/kyn.png'

const rows = [
  {
    key: 'bet',
    title: 'Выгодные процентные ставки',
    description: `Проценты считаются ежедневно. От 3,9% до 7,5% в месяц, в зависимости от суммы займа`,
    icon: Item1,
  },
  {
    key: 'cabinet',
    title: 'Удобный личный кабинет',
    description: `Всё в онлайне. Сразу видите сумму следующего погашения, историю погашений в личном кабинете и мобильном приложении`,
    icon: Item2,
  },
  {
    key: 'contract',
    title: 'Без сомнительных пунктов в договоре',
    description: `Простые и понятные условия займов`,
    icon: Item5,
  },
  {
    key: 'fine',
    title: '3 дня без штрафных пений',
    description: `3 дня штрафы не начисляются, а считаются обычные проценты, но если клиент опоздал на 4-й день, то штрафы начисляются с первого дня опоздания`,
    icon: Item3,
  },
  {
    key: 'time',
    title: 'Удобное время обслуживания',
    description: `Режим работы наших ломбардов удобен всем, ведь мы работаем и по выходным`,
    icon: Item6,
  },
  {
    key: 'branches',
    title: 'Оплата процентов в любом филиале',
    description: `Оплачивать проценты и делать погашения можно в любом нашем филиале, а так же через терминалы приема платежей`,
    icon: Item4,
  },
]

const Card = ({ className, children, ...props }) => (
  <div className={cx(styles.card, className)} {...props}>
    {children}
  </div>
)

const Whyme = () => (
  <Section id="why">
    <Header as="h2" className={styles.header}>
      Почему мы?
    </Header>
    <Header as="h2">Удобно. Быстро. Выгодно.</Header>
    <div className={styles.cardContainer}>
      <Card style={{ textAlign: 'end' }}>
        <h3>Надежное хранение</h3>
        <p>
          <img
            draggable={false}
            src={kynImg}
            alt="заложенное имущество пломбируется"
            className={styles.kynImg}
          />
          Все залоговые имущества пломбируются при владельцах и хранятся в
          надежных и хорошо охраняемых хранилищах ведущих банков Таджикистана
        </p>
      </Card>
      <Card>
        <h3>Прием погашений 24/7</h3>
        <p>
          <img
            draggable={false}
            src={tyanImg}
            alt="Прием погашений 24/7"
            className={styles.tyanImg}
          />
          Моментальное погашение и автоматическое продление залогового билета
          через терминальные сети по всему городу
        </p>
      </Card>
    </div>
    <div className={styles.columnContainer} style={{ marginTop: '2em' }}>
      {rows.map(row => (
        <div key={row.key} className={styles.row}>
          <img src={row.icon} alt={row.title} className={styles.rowIcon} />
          <div className={styles.rowContent}>
            <Header as="h3">{row.title}</Header>
            <p>{row.description}</p>
          </div>
        </div>
      ))}
    </div>
  </Section>
)

export { Whyme }
