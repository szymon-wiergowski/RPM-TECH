import React from "react"
import styles from "./about-css-modules.module.css"
import Container from "../components/container"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default () => (
  <Container>
    <h1>About CSS Modules</h1>
    <p>CSS Modules are cool</p>
    <User
      username="Mirka Bronk"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
      excerpt="I'm Mirka Bronk. I like my son."
    />
    <User
      username="Leon Wiergowski"
      avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
      excerpt="I'm Leon Wiergowski, a vertically aligned type of guy. I love my parents."
    />
  </Container>
)