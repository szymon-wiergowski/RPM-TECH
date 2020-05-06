import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Image />
    </div>
    <div
      style={{
        margin: `2rem auto`,
        maxWidth: 1200,
      }}
    >
      <h1>O firmie</h1>
      <p>
        Kancelaria Majątkowa została założona w 2017 r. przez rzeczoznawcę
        majątkowego Tomasza Rzóska, posiadającego uprawnienia zawodowe numer
        7159 w zakresie szacowania nieruchomości.
      </p>
      <p>
        Świadczymy usługi w zakresie wyceny nieruchomości oraz doradztwa
        majątkowego, skierowane do klientów indywidualnych, przedsiębiorstw oraz
        instytucji z finansowego i publicznego. Zapewniamy profesjonalną i
        kompleksową obsługę klienta, terminowość oraz rzetelne wykonanie
        zlecenia, zgodnie z obowiązującymi przepisami prawa i standardami
        zawodowymi rzeczoznawców majątkowych.
      </p>
      <p>
        Właściciel firmy jest członkiem Pomorskiego Towarzystwa Rzeczoznawców
        Majątkowych.
      </p>
    </div>
  </Layout>
)

export default IndexPage
