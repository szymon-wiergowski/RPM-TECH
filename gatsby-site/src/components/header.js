import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from "../images/logo-rpm-tech.svg"

const Header = ({ siteTitle }) => (
  <header>
    <div
      className="header-container"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.2rem 1rem`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "1.4rem",
      }}
    >
      <div
        // className="header-brand"
        style={{
          display: "flex",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: "6rem",
            background: "white",
            borderRadius: "50%",
            margin: "0",
          }}
        />
        <Link
          to="/"
          style={{
            fontSize: "2rem",
            marginLeft: "1rem",
            alignSelf: "center",
            textDecoration: "none",
          }}
        >
          <h1
            style={{
              marginLeft: "1rem",
              textDecoration: "none",
              marginTop: "2rem",
              color: "black",
            }}
          >
            {siteTitle}
          </h1>
        </Link>
      </div>
      <div
        className="header-links"
        style={{
          marginLeft: "1rem",
          alignSelf: "center",
          display: "flex",
        }}
      >
        <Link
          to="/"
          style={{
            marginLeft: "1rem",
            textDecoration: "none",
            marginTop: "2rem",
            color: "black",
          }}
        >
          <h4>O NAS</h4>
        </Link>
        <Link
          to="/services"
          style={{
            marginLeft: "1rem",
            textDecoration: "none",
            marginTop: "2rem",
            color: "black",
          }}
        >
          <h4>USŁUGI</h4>
        </Link>
        <Link
          to="/projects"
          style={{
            marginLeft: "1rem",
            textDecoration: "none",
            marginTop: "2rem",
            color: "black",
          }}
        >
          <h4>REALIZACJE</h4>
        </Link>
        <Link
          to="/contact"
          style={{
            marginLeft: "1rem",
            textDecoration: "none",
            marginTop: "2rem",
            color: "black",
          }}
        >
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
