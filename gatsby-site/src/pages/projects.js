import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <div
      style={{
        backgroundColor: "white",
        margin: `2rem auto`,
        padding: "3rem",
        minHeight: 250,
        textAlign: "center"
      }}
    >
      <h1>Realizacje</h1>
      <p>Witamy na podstronie realizacje</p>
      <Link to="/">Wróć do strony startowej</Link>
    </div>
  </Layout>
)

export default Projects
