import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div
      style={{
        backgroundColor: "white",
        margin: `2rem auto`,
        padding: "3rem",
        minHeight: 250,
        textAlign: "center",
      }}
    >
      <h1>Kontakt</h1>
      <p>Witamy na podstronie kontakt</p>
      <Link to="/">Wróć do strony startowej</Link>
    </div>
  </Layout>
)

export default Contact
