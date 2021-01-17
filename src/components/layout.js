import React from "react"
import "./bootstrap.min.css"
import "./layout.css"
import Navbar from "./globals/Navbar"
import Footer from "./globals/Footer"

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default layout
