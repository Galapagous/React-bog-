import "./login.css"
import { Link } from "react-router-dom"

function Login() {
  return (
    <div className="theloginPage">
      <span className="theloginlabel">Login</span>
      <form className="thelogin">
        <label className="theloginLabel">Email</label>
        <input className="theloginInput" type="email" placeholder="example@gmail.com" autoFocus={true} />
        <label className="theloginLabel">Password</label>
        <input className="theloginInput" type="password" placeholder="Password" />
        <button className="theloginButton" type="submit">
          Login
        </button>
        <Link to="/register">
          <button className="theregisterButton">Register</button>
        </Link>
      </form>
    </div>
  )
}

export default Login
