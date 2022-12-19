import * as React from "react"
import { Link } from "gatsby"
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Logo,
  Twitter,
} from "../../utils/imgImport"

const socials = [
  { to: "https://linkedin.com", icon: Linkedin },
  { to: "https://linkedin.com", icon: Facebook },
  { to: "https://linkedin.com", icon: Github },
  { to: "https://linkedin.com", icon: Instagram },
  { to: "https://linkedin.com", icon: Twitter },
]
const Footer = () => (
  <footer>
    <div className="container">
      <nav className="navbar">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/edr">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/foresync">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about-us">
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>
        </ul>
        <ul className="social-icons">
          {socials.map((item, idx) => (
            <li key={idx}>
              <a href={item.to}>
                <img
                  src={item.icon}
                  alt="social icon"
                  className="social-icon"
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </footer>
)

export default Footer
