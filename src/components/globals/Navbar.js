import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [css, setCss] = useState("collapse navbar-collapse")
  const [links, setLinks] = useState([
    { id: 1, path: "/", text: "Home" },
    { id: 2, path: "/about", text: "About" },
  ])

  const navbarHandler = () => {
    setNavbarOpen(!navbarOpen)
    if (navbarOpen) {
      setCss("collapse navbar-collapse show")
    } else {
      setCss("collapse navbar-collapse")
    }
  }

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="brand-name" />
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={css}>
        <ul className="navbar-nav mx-auto">
          {links.map(link => {
            return (
              <li key={link.id} className="nav-item">
                <Link to={link.path} className="nav-link text-capitalize">
                  {link.text}
                </Link>
              </li>
            )
          })}
          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
