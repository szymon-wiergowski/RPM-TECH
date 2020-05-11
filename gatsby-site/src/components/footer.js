import React from "react"

import { Link } from "gatsby"

import styles from "./footer.module.css"

const Footer = ({ siteTitle }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <h5>MENU</h5>
          <Link className={styles.links_item} to="/">
            <h6>O NAS</h6>
          </Link>
          <Link className={styles.links_item} to="/services">
            <h6>USŁUGI</h6>
          </Link>
          <Link className={styles.links_item} to="/projects">
            <h6>REALIZACJE</h6>
          </Link>
          <Link className={styles.links_item} to="/contact">
            <h6>KONTAKT</h6>
          </Link>
        </div>
        <div className={styles.brand_description}>
          <h5>CZYM SIĘ ZAJMUJEMY?</h5>
          <p>
            Jestesmy generalnym dystrybutorem amerykańskiego koncernu Quaker
            Chemical i specjalizujemy się w optymalizacji procesów
            produkcyjnych
          </p>
          <p>
            Nasza oferta skierowana jest przede wszystkim do zakładów
            produkcyjnych, szukających zaawansowanego wsparcia technicznego,
            kompleksowej obsługi serwisowej oraz wysokiej jakości produktów.
            Dysponujemy wykwalifikowaną kadrą w celu zapewnienia wysokiej
            jakości obsługi.
          </p>
        </div>
        <address className={styles.address}>
          <h5>KONTAKT</h5>
          <p className={styles.name}>mgr inż. Maciej Pusiak</p>
          <a className={styles.phone} href="tel:+48-606-247-347">
            Tel.: +48 606 247 347
          </a>
          <br />
          <a className={styles.email} href="mailto:maciej@rpmtech.pl">
            maciej@rpmtech.pl
          </a>
        </address>
        <div className={styles.end}>
          <p>© 2020 {siteTitle} – All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
