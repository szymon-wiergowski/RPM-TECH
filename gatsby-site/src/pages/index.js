import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      For what it's worth I had this same issue and it came down to a
      case-sensitivity issue. It worked fine on my mac but failed on Netlify's
      servers because of some of the component names:
    </p>
    <div>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
