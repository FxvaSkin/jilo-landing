import React from 'react'
import loadable from '@loadable/component'

import { Layout } from 'containers/Layout'
import { Banner } from 'containers/Banner'
import { Calculator } from 'containers/Calculator'
import { Whyme } from 'containers/Whyme'
import { Branches } from 'containers/Branches'
import { FAQ } from 'containers/FAQ'
import SEO from 'components/seo'

// import { Map } from 'containers/Map'
const Map = loadable(() => import('containers/Map'))

const IndexPage = () => (
  <Layout>
    <SEO title="Ломбард" />
    <Banner />
    <Calculator />
    <Whyme />
    <Branches />
    <Map />
    <FAQ />
  </Layout>
)

export default IndexPage
