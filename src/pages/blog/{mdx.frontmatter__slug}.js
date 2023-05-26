import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../Components/layout'
import Seo from '../../Components/seo'

const BlogPost = ({data, children}) => {
  console.log(data, children)
  return (
    <Layout  pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost