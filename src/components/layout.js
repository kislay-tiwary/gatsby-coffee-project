import React from "react"
import "./bootstrap.min.css"
import "./layout.css"
import Navbar from "./globals/Navbar"

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default layout
