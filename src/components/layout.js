import * as React from "react"
import Footer from "./Layout/footer"
import Header from "./Layout/header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
