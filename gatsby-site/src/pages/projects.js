import React from "react"

import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "projects.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Hi from the Projects page</h1>
    <p>Welcome to page Projects</p>
    <Image />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Projects
