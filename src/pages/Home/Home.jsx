import "./home.css"
import Sidebar from "../../component/sidebar/sidebar"
import HomePage from "../../component/HomePage/HomePage"
import img from "../../component/images/blog5.jpg"
import Topbar from "../../component/Topbar/Topbar"

export default function Home() {
  return (
    <div className="homeArea">
      <div className="top">
        <Topbar />
      </div>
      <div className="homeHeader">
        <div className="homeTitleImage">
          <img className="homeImage" src={img} alt="blog home Image" />
        </div>
        <div className="homeTitle">
          <span className="homeTitle1">Muh'd Musa</span>
          <span className="homeTitle2">Blog</span>
        </div>
      </div>
      <div className="homeBody">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="pagecontent">
          <HomePage />
        </div>
      </div>
    </div>
  )
}
