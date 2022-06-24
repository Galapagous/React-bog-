import "./home.css"
import Homepage from "../../Components/Homepage/Homepage"
import Sidebar from "../../Components/Sidebar/Sidebar"
import Header from "../../Components/Header/Header"

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="homeMain">
        <Homepage />
        <Sidebar />
      </div>
    </div>
  )
}

export default Home
