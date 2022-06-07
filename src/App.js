import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Blog from "./pages/BlogPost/Blog"
import Home from "./pages/Home/Home"
import Write from "./pages/Write/Write"
import About from "./pages/About/About"
import Logout from "./pages/Logout/Logout"
import Register from "./pages/Register/Register"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Blog />} />
          <Route path="/write" element={<Write />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Logout />} />
          <Route path="/logout" element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
