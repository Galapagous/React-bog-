import "./register.css"
import { Link } from "react-router-dom"

function Register() {
  return (
    <div>
      <div className="registerPage">
        <span className="registerheader">Register</span>
        <form className="register">
          <label className="registerLabel">UserName</label>
          <input className="registerInput" type="text" placeholder="UserName" autoFocus={true} />
          <label className="registerLabel">Email</label>
          <input className="registerInput" type="email" placeholder="example@gmail.com" />
          <label className="registerLabel">Password</label>
          <input className="registerInput" type="password" placeholder="Password" />
          <button className="registerButton" type="submit">
            Register
          </button>
          <Link to="/login">
            <button className="newregisterlogin musaregister">Login</button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Register
