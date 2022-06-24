import { Facebook, Instagram, Search, Twitter, WhatsApp } from "@mui/icons-material"
import "./topbar.css"
import img from "../../Images/musa.jpg"
import { Link } from "react-router-dom"

function Topbar() {
  const user = false
  return (
    <div className="top">
      <div className="topLeft">
        <Facebook className="social" />
        <Twitter className="social" />
        <Instagram className="social" />
        <WhatsApp className="social" />
      </div>
      <div className="topCenter">
        <ul className="navList">
          <Link to="/" className="navItem">
            Home
          </Link>
          <Link to="/settings" className="navItem">
            About
          </Link>
          <Link to="/" className="navItem">
            Contact
          </Link>
          <Link to="/write" className="navItem">
            Write
          </Link>
          {user && (
            <Link to="/register" className="navItem">
              Logout
            </Link>
          )}
        </ul>
      </div>
      {user ? (
        <div className="topRight">
          <img className="topImg" src={img} alt="top avatar" />
          <Search className="search" />
        </div>
      ) : (
        <ul className="navList">
          <Link to="/login" className="navItem">
            Login
          </Link>
          <Link to="/register" className="navItem">
            Register
          </Link>
        </ul>
      )}
    </div>
  )
}

export default Topbar
