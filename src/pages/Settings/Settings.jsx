import "./settings.css"
import musa from "../../Images/musa.jpg"
import Sidebar from "../../Components/Sidebar/Sidebar"
import { FileUpload } from "@mui/icons-material"

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsChange">
          <span className="settingsUpdate">Update Your Account</span>
          <span className="settingsDelete">Delete Account</span>
        </div>
        <form className="settingsPP">
          <label>Profile Picture</label>
          <img className="profileImage" src={musa} alt="profile pic" />
          <div className="settingsEdit">
            <label htmlFor="fileInput">
              <FileUpload className="update" />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <div className="formItems">
            <label className="formLabel">UserName</label>
            <input className="formInput" type="text" placeholder="UserName" />
            <label className="formLabel">Email</label>
            <input className="formInput" type="email" placeholder="examle@gmail.com" />
            <label className="formLabel">Password</label>
            <input className="formInput" type="password" placeholder="password" />
          </div>
          <div className="button">
            <button className="submitButton">Update</button>
          </div>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Settings
