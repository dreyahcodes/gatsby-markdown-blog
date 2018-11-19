import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'


const IndexPage = () => (
  <Layout>
    <h1>Hey I'm Dreyah. Learning about Gatsby!</h1>
    <p>This is a sample site for the Gatsby crash course.</p>
    <p>Always learning how to build awesome things.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    {/* <Link to="page-2">Go to page 2</Link> */}
  </Layout>
)


export default IndexPage
