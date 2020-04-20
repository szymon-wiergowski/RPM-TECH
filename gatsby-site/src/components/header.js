import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import styles from "./header.module.css"

import logo from "../images/logo-rpm-tech.svg"

const Header = ({ siteTitle }) => {
  const [active, setActive] = useState(false)
  const [headerActiveClass, setHeaderActiveClass] = useState("")

  const toggleActiveClass = (event, newValue) => {
    setActive(!active)
    console.log(active)
  }
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img src={logo} alt="logo" className={styles.brand_logo} />
          <h1 className={styles.brand_name}>{siteTitle}</h1>
        </div>
        <div className={styles.links} onClick={() => toggleActiveClass()}>
          <Link value={active} className={styles.links_item} to="/">
            <h4>O NAS</h4>
          </Link>
          <Link value={active} className={styles.links_item} to="/services">
            <h4>USŁUGI</h4>
          </Link>
          <Link value={active} className={styles.links_item} to="/projects">
            <h4>REALIZACJE</h4>
          </Link>
          <Link value={active} className={styles.links_item} to="/contact">
            <h4>KONTAKT</h4>
          </Link>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
