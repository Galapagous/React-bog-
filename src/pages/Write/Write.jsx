import { Add } from "@mui/icons-material"
import "./write.css"

function Write() {
  return (
    <div className="write">
      <img className="writeImage" src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d3JpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="writeImage" />
      <form className="form">
        <div className="writeFormGroup">
          <label htmlFor="fileInput" className="AddInput">
            <Add className="add" />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} className="fileInput" />
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea className="writeInput TextArea" placeholder="Tell Your Story ...."></textarea>
        </div>
        <button type="submit" className="submitButton">
          Publish
        </button>
      </form>
    </div>
  )
}

export default Write
