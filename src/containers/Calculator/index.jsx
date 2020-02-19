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
  defaultValue: 'classic',
  options: [
    {
      value: 'classic',
      title: 'Классический',
      percent: 0.25,
      includeToday: true,
    },
    {
      value: 'jewelry',
      title: 'Ювелирный',
      percent: 0.2,
      includeToday: true,
    },
  ],
}

const amount = {
  scrap: {
    '375': 110,
    '500': 150,
    '585': 220,
    '750': 240,
    '875': 280,
    '916': 340,
    '999': 360,
  },
  jewel: {
    '375': 130,
    '500': 160,
    '585': 230,
    '750': 260,
    '875': 300,
    '916': 350,
    '999': 370,
  },
  newJewel: {
    '375': 150,
    '500': 180,
    '585': 250,
    '750': 280,
    '875': 320,
    '916': 370,
    '999': 380,
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
        // window.scrollBy(0, -3.5 * 16)
      }
    }
  }

  const debt = weight ? weight * amount[type][hallmark] : 0
  const percent = rate && rates.options.find(r => r.value === rate).percent
  const received =
    mortgagedDays && debt && percent
      ? mortgagedDays * ((debt * percent) / 100) + debt
      : 0

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
              value={rates.options.find(r => r.value === rate).title}
              onChange={value => setRate(value)}
              rightDock={<QuestionSvg help="Tooltip number one" />}
              style={{ gridArea: 'rate' }}
            />
            <Select
              name="calc-input-hallmark"
              label="Проба"
              items={hallmarks.options.map(({ value, title }) => ({
                value,
                title,
              }))}
              value={hallmarks.options.find(hm => hm.value === hallmark).title}
              onChange={value => setHallmark(value)}
            />
            <Input
              name="calc-input-weight"
              label="Вес изделия, гр"
              {...numberMask}
              onChange={event => setWeight(event.currentTarget.value)}
            />
            <Select
              name="calc-input-type"
              label="Тип изделия"
              items={types.options.map(({ value, title }) => ({
                value,
                title,
              }))}
              value={types.options.find(t => t.value === type).title}
              onChange={value => setType(value)}
            />
            <Input
              name="calc-input-date"
              label="Срок займа"
              rightDock={
                <QuestionSvg help="Tooltip number two Tooltip number two Tooltip number two Tooltip number two Tooltip number two " />
              }
              {...numberMask}
              scale={0}
              value={mortgagedDays}
              onChange={event => setMortgagedDays(event.currentTarget.value)}
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
            Внимание! Расчет суммы к возврату не учитывает изменение банковского
            курса сомони. Для более точного определения пробы, веса изделия, а
            также стоимости займа и суммы к возврату, пожалуйста, посетите наш
            ближайший филиал.
          </p>
        </footer>
      </div>
    </Section>
  )
}

export { Calculator }
