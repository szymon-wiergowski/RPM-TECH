import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <div
      style={{
        backgroundColor: "white",
        margin: `2rem auto`,
        padding: "3rem",
        minHeight: 250,
        textAlign: "center",
      }}
    >
      <h1>Usługi</h1>
      <p>Witamy na podstronie usług</p>
      <Link to="/">Wróć do strony startowej</Link>
    </div>
  </Layout>
)

export default Services
