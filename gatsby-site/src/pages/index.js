import React from "react"

import Layout from "../components/layout"
import Image from "../components/about"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Image />
    </div>
    <div
      style={{
        margin: `1.6rem auto`,
        maxWidth: 1200,
      }}
    >
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
        aby kompresory sprężonego powietrza działały jak najbardziej efektywnie
        z punktu widzenia płynności pracy oraz jej ekonomiki, a instalacja
        pneumatyczna była optymalnie skonfigurowana. Przygotowujemy analizy,
        wnioski oraz wskazówki, które po wdrożeniu wpływają na większą
        efektywność pracy tych urządzeń oraz redukcję kosztów związanych z
        poborem mocy.
      </p>
      <p>
        Nasi specjaliści udzielają także klientom porad praktycznych,
        dotyczących pracy urządzeń oraz sposobów ich prawidłowej regulacji,
        projektowania instalacji pnaumatycznych. Podejmujemy się ponadto, oprócz
        weryfikacji audytowych, dokonywania prac naprawczych. Służymy wszystkim
        zainteresowanym kompetentnymi poradami i konsultacjami w tym zakresie.
      </p>
    </div>
  </Layout>
)

export default IndexPage
