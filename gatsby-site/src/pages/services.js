import React from "react"
import { Link } from "gatsby"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "services.jpg" }) {
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

const Services = () => (
  <Layout>
    <SEO title="Services" />
    <h1>Hi from the Services page</h1>
    <p>Welcome to page Services</p>
    <Image />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Services
