import "./write.css"
import Topbar from "../../component/Topbar/Topbar"
import writer from "../../component/images/write1.jpg"
import { AddCircleOutline, Button } from "@mui/icons-material"

export default function Write() {
  return (
    <div className="write">
      <Topbar />
      <div className="writeItem">
        <img className="writeImage" src={writer} alt="write" />
        <div className="writerTool">
          <AddCircleOutline className="circle" />
          <input type="text" placeholder="Title" />
          <button className="publish">Publish</button>
        </div>
        <textarea className="writeText" placeholder="Story" />
      </div>
    </div>
  )
}
