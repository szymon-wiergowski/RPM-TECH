import React from "react"
import BackgroundSlider from "gatsby-image-background-slider"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <BackgroundSlider
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile(
              filter: { sourceInstanceName: { eq: "backgrounds" } }
            ) {
              nodes {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `)}
        initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
        transition={4} // transition duration between images
        duration={8} // how long an image is shown
        // specify images to include (and their order) according to `relativePath`
        images={[
          "first.jpg",
          "second.jpg",
          "third.jpg",
          "fourth.jpg",
          "fifth.jpg",
        ]}
        // pass down standard element props
        style={{
          transform: "rotate(-2deg) scale(.9)",
        }}
      >
        {/* Captions in sync with background images*/}
        <div>Woof</div>
        <div>Meow</div>
        <>
          {/* Giraffes don't talk; [they aren't real](https://chivomengro.com/2017/10/23/the-truth-comes-out-giraffes-are-a-hoax/) */}
        </>
        <a href="https://en.wikipedia.org/wiki/Tasmanian_devil#Conservation_status">
          I could use a hand
        </a>
        <div>I need to find better hobbies</div>
      </BackgroundSlider>
    </div>
    <div className={styles.index}>
      <div className={styles.container}>
        <h1>O firmie</h1>
        <p>
          Na zlecenia naszych klientów przeprowadzamy precyzyjny audyt całych
          instalacji kompresorów sprężonego powietrza oraz instalacji
          pneumatycznych. Prace pomiarowe w ramach audytu wykonywane są z
          niezwykłą precyzją. Dysponujemy sprzętem najwyższej klasy, który
          zapewnia nie tylko trafną diagnozę ewentualnych nieszczelności, lecz
          także umożliwia dokonanie kalkulacji związanych z potrzebą
          przeprowadzenia określonych prac naprawczych.
        </p>
        <p>
          Oferujemy także sporządzenie opinii odnośnie właściwej regulacji tak,
          aby kompresory sprężonego powietrza działały jak najbardziej
          efektywnie z punktu widzenia płynności pracy oraz jej ekonomiki, a
          instalacja pneumatyczna była optymalnie skonfigurowana. Przygotowujemy
          analizy, wnioski oraz wskazówki, które po wdrożeniu wpływają na
          większą efektywność pracy tych urządzeń oraz redukcję kosztów
          związanych z poborem mocy.
        </p>
        <p>
          Nasi specjaliści udzielają także klientom porad praktycznych,
          dotyczących pracy urządzeń oraz sposobów ich prawidłowej regulacji,
          projektowania instalacji pnaumatycznych. Podejmujemy się ponadto,
          oprócz weryfikacji audytowych, dokonywania prac naprawczych. Służymy
          wszystkim zainteresowanym kompetentnymi poradami i konsultacjami w tym
          zakresie.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
