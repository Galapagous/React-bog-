import "./logout.css"
import Topbar from "../../component/Topbar/Topbar"
import { Link } from "react-router-dom"

export default function Logout() {
  return (
    <div className="logout">
      <Topbar />
      <div className="logoutItem">
        <Link to="/logout">
          <button className="register">Register</button>
        </Link>

        <span className="pageTitle">Login</span>
        <form className="loginForm">
          <div className="loginFormitem">
            <label className="username">UserName</label>
            <input type="text" placeholder="UserName" />
          </div>
          <div className="loginFormitem">
            <label className="username">Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="button">
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}
