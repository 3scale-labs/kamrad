import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const About: React.FC = () => (
  <Layout>
    <h1>This is the About page</h1>
    <p>Welcome to about</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
