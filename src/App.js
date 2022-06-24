import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Topbar from "./Components/Topbar/Topbar"
import Single from "./Pages/Single/Single"
import Register from "./Pages/Register/Register"
import Write from "./Pages/Write/Write"
import Login from "./Pages/Login/Login"
import Home from "./Pages/Home/Home"
import Settings from "./Pages/Settings/Settings"

function App() {
  const user = false
  return (
    <div className="App">
      <Router>
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/settings" element={user ? <Settings /> : <Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
