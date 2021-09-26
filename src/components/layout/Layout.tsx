import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "components/layout/Header"
import { Footer } from "components/layout/Footer"
import "./layout.css"

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
