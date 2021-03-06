import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Layout } from "components/layout/Layout"
import Seo from "components/layout/seo"
import { PreLoader } from "components/common/PreLoader"
import { Banner, About, ChoosePath, YouTubeFeed } from "components/home"

const IndexPage = () => {
  const [showPreloader, setShowPreloader] = React.useState(true)

  if (showPreloader) {
    return (
      <>
        <Seo title="home" />
        <PreLoader onFinish={() => setShowPreloader(false)} />
      </>
    )
  }

  return (
    <Layout>
      <Seo title="Home" />
      <Banner />
      <About />
      <ChoosePath />
      <YouTubeFeed />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
