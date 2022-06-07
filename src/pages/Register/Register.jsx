import "./register.css"
import Topbar from "../../component/Topbar/Topbar"
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className="register">
      <div className="registerItems">
        <Topbar className="registerTop" />
        <div className="registerComponent">
          <div className="registerItem">
            <div className="loginlink">
              <Link to="/login">
                <button className="login">Login</button>
              </Link>
            </div>

            <span className="pageTitle">Register</span>
            <form className="registerForm">
              <div className="registerFormitem">
                <label className="username">UserName</label>
                <input type="text" placeholder="UserName" />
              </div>
              <div className="registerFormitem">
                <label className="username">Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="registerFormitem">
                <label className="username">Password</label>
                <input type="password" placeholder="Password" />
              </div>
              <div className="button">
                <button type="submit">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
