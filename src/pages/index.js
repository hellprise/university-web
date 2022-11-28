import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = () => {
  return (
    <Layout location="">
      <h1>Gatsby Example Blog</h1>

      <Link to="/blog">to blog</Link>
    </Layout>
  )
}

export default BlogIndex

export const Head = () => <Seo title="All posts" />
