import "./about.css"
import Topbar from "../../component/Topbar/Topbar"
import Sidebar from "../../component/sidebar/sidebar"
import img from "../../component/images/laugh.jpg"
import { SettingsSuggestOutlined } from "@mui/icons-material"

export default function About() {
  return (
    <div className="about">
      <Topbar />
      <div className="aboutItem">
        <div className="aboutContent">
          <div className="topSection">
            <span className="update">update your account</span>
            <span className="delete">delete account</span>
          </div>
          <div className="middleSection">
            <img className="aboutImage" src={img} alt="profile pix" />
            <SettingsSuggestOutlined className="settings" />
          </div>
          <form className="aboutForm">
            <div className="formItem">
              <label className="username">UserName</label>
              <input type="text" placeholder="UserName" />
            </div>
            <div className="formItem">
              <label className="username">Email</label>
              <input type="email" placeholder="example@gmail.com" />
            </div>
            <div className="formItem">
              <label className="username">Password</label>
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit">Update</button>
          </form>
        </div>
        <Sidebar className="sidebar" />
      </div>
    </div>
  )
}
