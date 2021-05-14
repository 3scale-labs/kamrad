import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage: React.FC = () => (
  <Layout>
    <h1>This is Kamrad</h1>
    <p>The Developer Portal for Kuadrant!</p>
    <p>
      <Link to="/about/">About</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
