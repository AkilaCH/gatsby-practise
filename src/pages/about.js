import * as React from 'react'
import Layout from '../Components/layout'
import Seo from '../Components/seo'


const AboutPage = () => {
  return (
    <Layout pageTitle="My Blog Posts">
       <main>
        <h1>About Me</h1>
        <p>Hi there! I'm UI/UX Develop interesting in Gatsby</p>
      </main>
    </Layout>
  )
}


export const Head = () => <Seo title="About Me" />

export default AboutPage