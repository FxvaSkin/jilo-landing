import React, { StrictMode } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import cx from 'classnames'
import 'styles/reset.css'
import 'styles/index.css'
import 'styles/properties.css'

import styles from './layout.module.css'

import { Header } from 'containers/Header'
import { Footer } from 'containers/Footer'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', { offset: () => 16 * 3.5 })
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          items {
            key
            to
            title
          }
        }
      }
    }
  `)

  const { title, items } = data.site.siteMetadata

  return (
    <StrictMode>
      {/* <div className={cx(styles.wrapper)}> */}
      <Header siteTitle={title} items={items} />
      <main className={cx(styles.main)}>{children}</main>
      <Footer />
      {/* </div> */}
    </StrictMode>
  )
}

export { Layout }
