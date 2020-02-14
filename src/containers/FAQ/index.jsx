import React from 'react'
import styles from './faq.module.css'

import { Section } from 'components/Section'
import { Header } from 'components/Header'

const cards = [
  {
    key: 'deposit',
    title: 'Что принимается в качестве залога при оформлении займа?',
    body:
      'В качестве залога принимаются изделия из золота и их части (лом) с пробой от 333 до 999.',
  },
  {
    key: 'anotherPerson',
    title:
      'Может ли другой человек погасить мой заём и забрать залоговое изделие?',
    body:
      'Полное погашение займа может сделать только заёмщик, указанный в залоговом билете, либо его представитель, права которого подтверждены нотариально.',
  },
  {
    key: 'percent',
    title: 'Как оплачиваются проценты по займу?',
    body:
      'Вы можете оплатить проценты в любом нашем филиале или через терминалы оплаты. Мы не требуем предоплаты процентов. Платите только по факту.',
  },
]

const FAQ = () => (
  <Section>
    <Header as="h2" id="faq">
      Популярные вопросы
    </Header>
    <div className={styles.cardsContainer}>
      {cards.map(card => (
        <div className={styles.card}>
          <Header as="h3">{card.title}</Header>
          <p>{card.body}</p>
        </div>
      ))}
    </div>
  </Section>
)

export { FAQ }
