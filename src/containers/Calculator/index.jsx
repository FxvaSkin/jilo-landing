import React, { useState } from 'react'
import cx from 'classnames'
import styles from './calc.module.css'

import { Header } from 'components/Header'
import { Section } from 'components/Section'
import { Input } from 'components/Input'
import { Button } from 'components/Button'
import { Select } from 'components/Select'
import { ArrowSvg } from './ArrowSvg'
import { QuestionSvg } from './QuestionSvg'

const hallmarks = {
  defaultValue: '585',
  options: [
    { value: '375', title: '375' },
    { value: '500', title: '500' },
    { value: '585', title: '585' },
    { value: '750', title: '750' },
    { value: '875', title: '875' },
    { value: '916', title: '916' },
    { value: '999', title: '999' },
  ],
}

const types = {
  defaultValue: 'jewel',
  options: [
    { value: 'jewel', title: 'Изделие' },
    { value: 'newJewel', title: 'Новое изделие' },
    { value: 'scrap', title: 'Лом' },
  ],
}

const rates = {
  defaultValue: 'standart',
  options: [
    {
      value: 'standart',
      title: 'Стандарт',
      percent: 0.25,
      min: 200,
      max: 20000,
      includeToday: true,
    },
    {
      value: 'standartp',
      title: 'Стандарт+',
      percent: 0.2,
      min: 20000,
      max: 40000,
      includeToday: true,
    },
    {
      value: 'premium',
      title: 'Премиум',
      percent: 0.18,
      min: 40000,
      max: 50000,
      includeToday: true,
    },
    {
      value: 'premiump',
      title: 'Премиум+',
      percent: 0.17,
      min: 50000,
      max: 70000,
      includeToday: true,
    },
    {
      value: 'business',
      title: 'Бизнес',
      percent: 0.15,
      min: 50000,
      max: 70000,
      includeToday: true,
    },
    {
      value: 'businessp',
      title: 'Бизнес+',
      percent: 0.13,
      min: 100000,
      includeToday: true,
    },
  ],
}

const amount = {
  scrap: {
    '375': 130,
    '500': 190,
    '585': 230,
    '750': 305,
    '875': 360,
    '916': 380,
    '999': 500,
  },
  jewel: {
    '375': 150,
    '500': 210,
    '585': 250,
    '750': 325,
    '875': 380,
    '916': 400,
    '999': 500,
  },
  newJewel: {
    '375': 170,
    '500': 230,
    '585': 270,
    '750': 345,
    '875': 400,
    '916': 420,
    '999': 500,
  },
}

const defaultMortgagedDays = '30'

const numberMask = {
  mask: Number,
  radix: '.',
  mapToRadix: [','],
}

const Calculator = () => {
  const [rate, setRate] = useState(rates.defaultValue)
  const [hallmark, setHallmark] = useState(hallmarks.defaultValue)
  const [weight, setWeight] = useState('')
  const [type, setType] = useState(types.defaultValue)
  const [mortgagedDays, setMortgagedDays] = useState(defaultMortgagedDays)

  const handlePickup = () => {
    if (typeof window !== 'undefined') {
      const id = 'branches'
      const element = document.getElementById(id)

      if (element) {
        if (window.history.pushState) {
          window.history.pushState(null, null, `/#${id}`)
        } else {
          window.location.hash = id
        }
        element.scrollIntoView({
          behavior: 'smooth',
        })
      }
    }
  }

  const debt = weight ? weight * amount[type][hallmark] : 0
  const percent = rate && rates.options.find((r) => r.value === rate).percent
  const received =
    mortgagedDays && debt && percent
      ? mortgagedDays * ((debt * percent) / 100) + debt
      : 0

  const currentRate = rates.options.find((r) => r.value === rate)

  return (
    <Section id="calculator">
      <Header as="h2">Калькулятор.</Header>

      <div className={cx(styles.container)}>
        <div className={styles.grid}>
          <article className={cx(styles.panel)}>
            <Select
              name="calc-input-rate"
              label="Тариф"
              items={rates.options.map(({ value, title }) => ({
                value,
                title,
              }))}
              value={currentRate.title}
              onChange={(value) => setRate(value)}
              rightDock={
                <QuestionSvg
                  help={`Сумма займа от ${currentRate.min.toLocaleString(
                    'tj',
                  )}${
                    currentRate.max
                      ? ` до ${currentRate.max.toLocaleString('tj')}`
                      : ''
                  } сомони. ${currentRate.percent}% в день`}
                />
              }
              style={{ gridArea: 'rate' }}
            />
            <Select
              name="calc-input-hallmark"
              label="Проба"
              items={hallmarks.options.map(({ value, title }) => ({
                value,
                title,
              }))}
              value={
                hallmarks.options.find((hm) => hm.value === hallmark).title
              }
              onChange={(value) => setHallmark(value)}
            />
            <Input
              name="calc-input-weight"
              label="Вес изделия, гр"
              {...numberMask}
              onChange={(event) => setWeight(event.currentTarget.value)}
            />
            <Select
              name="calc-input-type"
              label="Тип изделия"
              items={types.options.map(({ value, title }) => ({
                value,
                title,
              }))}
              value={types.options.find((t) => t.value === type).title}
              onChange={(value) => setType(value)}
            />
            <Input
              name="calc-input-date"
              label="Срок займа"
              rightDock={
                <QuestionSvg help="По закону РТ закладывать имущество можно максимально на 30 дней, без учета продлений" />
              }
              {...numberMask}
              scale={0}
              value={mortgagedDays}
              max={30}
              onChange={(event) => setMortgagedDays(event.currentTarget.value)}
            />
          </article>

          <div className={cx(styles.devider)}>
            <ArrowSvg />
          </div>
          <article className={styles.result}>
            <div className={styles.row}>
              <span>
                Сумма
                <br />
                на руки
              </span>
              <span>{debt.toFixed(0)} TJS</span>
            </div>
            <div className={styles.row}>
              <span>
                Сумма
                <br />к возврату
              </span>
              <span>{received.toFixed(0)} TJS</span>
            </div>
            <Button disabled={!debt} onClick={handlePickup}>
              Забрать{debt ? ` ${debt.toFixed(0)} TJS` : ''}
            </Button>
          </article>
        </div>
        <footer className={styles.footer}>
          <p>
            Внимание! Для более точного определения пробы и веса изделия, а
            также стоимости займа, пожалуйста, посетите наш ближайший филиал.
            Все операции проводятся только в национальной валюте сомони (TJS).
          </p>
        </footer>
      </div>
    </Section>
  )
}

export { Calculator }
