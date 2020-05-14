import { Link } from "gatsby"
import React from "react"

import styles from "./header.module.css"
import logo from "../images/logo-rpm-tech.svg"
import Drawer from "./drawer"

const Header = ({ siteTitle }) => {
  let width = window.innerWidth
  if (width < 768) {
    return (<Drawer />)
  } else {
    return (
      <header>
        <div className={styles.container}>
          <div className={styles.brand}>
            <img src={logo} alt="logo" className={styles.brand_logo} />
            <h1 className={styles.brand_name}>{siteTitle}</h1>
          </div>
          <div className={styles.links} >
            <Link  className={styles.links_item} to="/">
              <h4>O NAS</h4>
            </Link>
            <Link className={styles.links_item} to="/services">
              <h4>USŁUGI</h4>
            </Link>
            <Link className={styles.links_item} to="/projects">
              <h4>REALIZACJE</h4>
            </Link>
            <Link className={styles.links_item} to="/contact">
              <h4>KONTAKT</h4>
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
