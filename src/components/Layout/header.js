import React, { useState } from "react"
import { Link } from "gatsby"
import { Logo } from "../../utils/imgImport"

const Header = () => {
  const [hambugerActive, setHambugerActiveState] = useState(false)
  const hamburgerHandler = () => {
    setHambugerActiveState(!hambugerActive)
  }

  let humbugerClsName = "hamburger my-auto "
  let navMenuClsName = "navbar-nav "

  if (hambugerActive) {
    humbugerClsName += "active"
    navMenuClsName += "active"
  }
  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: "smooth",
    })
  }
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <Link to="/">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
          <div className="d-flex">
            <div className="table-show">
              <button className="btn btn-contact-us">Contact us</button>
            </div>

            <div
              className={humbugerClsName}
              onClick={hamburgerHandler}
              onKeyDown={hamburgerHandler}
              role="button"
              tabIndex="0"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <ul className={navMenuClsName}>
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/edr">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClassName="active"
                to="/forensync"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClassName="active"
                to="/about-us"
              >
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
          </ul>
          <div className="contact-us">
            <button className="btn btn-contact-us" onClick={handleScroll}>
              Contact us
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
