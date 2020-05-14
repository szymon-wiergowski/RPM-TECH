import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import styles from "./layout.module.css";

import Header from "./header";
import Footer from "./footer";

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
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main className={styles.container}>{children}</main>
      </div>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </div>
  )
}

export default Layout
