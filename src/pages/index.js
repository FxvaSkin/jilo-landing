import React from 'react'

import SEO from 'components/seo'

import { Layout } from 'containers/Layout'
import { Banner } from 'containers/Banner'
import { Calculator } from 'containers/Calculator'
import { Whyme } from 'containers/Whyme'
import { Branches } from 'containers/Branches'
import { Map } from 'containers/Map'
import { FAQ } from 'containers/FAQ'

import { useMatchPosition } from 'hooks/useMatchPosition'

const IndexPage = () => {
  useMatchPosition()
  return (
    <Layout>
      <SEO title="Home" />
      <Banner />
      <Calculator />
      <Whyme />
      <Branches />
      <Map />
      <FAQ />
    </Layout>
  )
}

export default IndexPage
