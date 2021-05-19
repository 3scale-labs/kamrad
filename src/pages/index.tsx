import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage: React.FC = () => (
  <Layout>
    <h1>This is Kamrad</h1>
    <p>The Developer Portal for Kuadrant!</p>
    <p>This is a React page</p>
    <p>
      This is a markdown page: <Link to="/pages/page-1">Page 1</Link>
    </p>
    <p>
      This is a MDX (markdown + JSX) page: <Link to="/hello">Hello</Link>
    </p>
  </Layout>
)

export default IndexPage
