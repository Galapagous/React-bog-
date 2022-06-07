import "./blog.css"
import Topbar from "../../component/Topbar/Topbar"
import Sidebar from "../../component/sidebar/sidebar"
import Imgf from "../../component/images/poverty1.jpg"

export default function Blog() {
  return (
    <div className="blog">
      <Topbar className="top" />
      <div className="blogBody">
        <div className="sidebar">
          <Sidebar className="sidebar" />
        </div>

        <div className="blogPageItem">
          <img className="blogImage" src={Imgf} />
          <h1>The State Of Nigeria Government</h1>
          <div className="info">
            <span className="info1">The Nigeria Government</span>
            <span className="info2">1hr ago</span>
          </div>
          <p>Education help us to identity what is a fact in all case, regardless of the faith, tribe or religion of the person who point to you. education when it qualitative and broadbase help to moderate social tension, this is the tension between the have and have not. By giving the poor access to thesame quality of education as the rich, you are not only providing the tool to change their social economic circmstance, you are giving them a control over how they express grieviance over those social economic circumstance.</p>
        </div>
      </div>
    </div>
  )
}
