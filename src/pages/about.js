import * as React from 'react'
import Seo from '../Components/seo'

const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </main>
  )
}


export const Head = () => <Seo title="About Me" />

export default AboutPage