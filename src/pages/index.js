import * as React from 'react'
import Layout from '../Components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../Components/seo.js'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Amazing view is out there"
        src="https://images.unsplash.com/photo-1684737992807-470ed4fe86d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
      />
    </Layout>
  )
}


export const Head = () => <Seo title="Home Page" />


export default IndexPage