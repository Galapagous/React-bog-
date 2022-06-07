import "./topbar.css"
import Avatar from "../Avatar/Avatar"
import Image1 from "../images/laugh.jpg"
import { Link } from "react-router-dom"
import { Search, Facebook, Twitter, WhatsApp, Instagram } from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <Facebook className="topIcon" />
        <Twitter className="topIcon" />
        <WhatsApp className="topIcon" />
        <Instagram className="topIcon" />
      </div>
      <div className="topbarMiddle">
        <ul className="siteNav">
          <Link to="/">
            <li className="navItem">Home</li>
          </Link>
          <Link to="/about">
            <li className="navItem">About</li>
          </Link>
          <Link to="/">
            <li className="navItem">Contact</li>
          </Link>
          <Link to="/write">
            <li className="navItem">Write</li>
          </Link>
          <Link to="/login">
            <li className="navItem">Logout</li>
          </Link>
        </ul>
      </div>
      <div className="topbarRight">
        <img className="avatar" src={Image1} alt="profile pix" />
        <Search className="topSearch" />
      </div>
    </div>
  )
}
