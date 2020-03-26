import React from 'react'
import cx from 'classnames'
import styles from './banner.module.css'

import { Section } from 'components/Section'
import { Header } from 'components/Header'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "mainpic.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
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
              Для повторных клиентов выдача займа занимает не более 3 минут
            </span>
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Img
            draggable={false}
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="Кредит за пять минут"
          />
        </div>
      </div>
    </Section>
  )
}

export { Banner }
