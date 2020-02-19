import React from 'react'
import cx from 'classnames'
import styles from './whyme.module.css'

import { Section } from 'components/Section'
import { Header } from 'components/Header'

import { Item1, Item2, Item3, Item4, Item5, Item6 } from 'images/icons'

const rows = [
  {
    key: 'bet',
    title: 'Выгодные процентные ставки',
    description: `You could have our columns here but you won’t. You'll have three, like everyone else.`,
    icon: Item1,
  },
  {
    key: 'cabinet',
    title: 'Удобный личный кабинет',
    description: `Всё в онлайне. Сразу видите сумму следующего погашения, историю погашений в личном кабинете и мобильном приложении`,
    icon: Item2,
  },
  {
    key: 'analysis',
    title: 'Спектральный анализ',
    description: `Спектральный анализ надежно и точно определяет пробу золота и не портит ваши украшения надпилами и реактивами`,
    icon: Item3,
  },
  {
    key: 'branches',
    title: 'Оплата процентов в любом филиале',
    description: `Оплачивать проценты и делать погашения можно в любом нашем филиале, а так же через терминалы приема платежей`,
    icon: Item4,
  },
  {
    key: 'contract',
    title: 'Без сомнительных пунктов в договоре',
    description: `Простые и понятные условия займов`,
    icon: Item5,
  },
  {
    key: 'time',
    title: 'Удобное время обслуживания',
    description: `Режим работы наших ломбардов удобен всем, ведь мы работаем и по выходным`,
    icon: Item6,
  },
]

const Card = ({ className, children, ...props }) => (
  <div className={cx(styles.card, className)} {...props}>
    {children}
  </div>
)

const Whyme = () => {
  return (
    <Section id="why">
      <Header as="h2" className={styles.header}>
        Почему мы?
      </Header>
      <Header as="h2">Удобно. Быстро. Выгодно.</Header>
      <div className={styles.cardContainer}>
        <Card>card1</Card>
        <Card>
          <h3>Прием погашений 24/7</h3>
          <p>
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
}

export { Whyme }
