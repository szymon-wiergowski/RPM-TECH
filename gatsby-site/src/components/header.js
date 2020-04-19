import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./header.module.css"

import logo from "../images/logo-rpm-tech.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div className={styles.container}>
      <div className={styles.brand}>
        <img src={logo} alt="logo" className={styles.brand_logo} />
        <Link to="/" className={styles.brand_name}>
          <h1>{siteTitle}</h1>
        </Link>
      </div>
      <div className={styles.links}>
        <Link to="/" className={styles.links_item}>
          <h4>O NAS</h4>
        </Link>
        <Link to="/services" className={styles.links_item}>
          <h4>USŁUGI</h4>
        </Link>
        <Link to="/projects" className={styles.links_item}>
          <h4>REALIZACJE</h4>
        </Link>
        <Link to="/contact" className={styles.links_item}>
          <h4>KONTAKT</h4>
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
