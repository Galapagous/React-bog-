import "./sidebar.css"
import side from "../../Images/musa.jpg"
import { Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sideTitle">about me</div>
      <span className="sideParagraph">We are here to explore the posibilities of a nigeria where everyone is free to become who they seems and deem to be, a country where religion, tribe and gender do not limit our chance to explore all posibilities within our reach</span>
      <img className="sideImg" src={side} alt="sidebarImg" />
      <div className="sideTitle">categories</div>
      <ul className="sideList">
        <li className="sideItem">Life</li>
        <li className="sideItem">Music</li>
        <li className="sideItem">Style</li>
        <li className="sideItem">Sport</li>
        <li className="sideItem">Tech</li>
        <li className="sideItem">Cinema</li>
      </ul>
      <div className="social">
        <Facebook className="socialItem" />
        <Twitter className="socialItem" />
        <Instagram className="socialItem" />
        <WhatsApp className="socialItem" />
      </div>
    </div>
  )
}

export default Sidebar
