import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styles from "./layout.module.css"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles.page}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer siteTitle={data.site.siteMetadata.title}/>
    </div>
  )
}

export default Layout
