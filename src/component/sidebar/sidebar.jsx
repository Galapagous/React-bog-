import BlogItem from "../BlogItem/BlogItem"
import "./sidebar.css"
import img2 from "../../component/images/rasta.jpg"
import { Search, Facebook, Twitter, WhatsApp, Instagram } from "@mui/icons-material"

export default function sidebar() {
  return (
    <div className="sidebar">
      <BlogItem
        img={img2}
        title="Power for all"
        paragraph="The upcoming presidential election is heating up, ever since the current vice president of the country had decleared his
         interest, the current administration party leader had felt the heat, organising seminars to compain on his impact on the last elections. He also narated how he had stepped down 
         and release his position as the vice president of the country, providing a single candidate, which is this person competing with him. in his words 'this my people is the height of
          betrayal' "
      />
      <div className="sideTitle">
        <hr />
        <span className="title">categories</span>
        <hr />
      </div>
      <div className="sideLinks">
        <div className="sideLeft">
          <span className="sideLink">Life</span>
          <span className="sideLink">Music</span>
          <span className="sideLink">Style</span>
        </div>
        <div className="sideRight">
          <span className="sideLink">Sport</span>
          <span className="sideLink">Cinema</span>
          <span className="sideLink">Tech</span>
        </div>
      </div>
      <div className="sideTitle">
        <hr />
        <span className="title">follow us</span>
        <hr />
      </div>
      <div className="sideSocial">
        <Facebook className="topIcon" />
        <Twitter className="topIcon" />
        <WhatsApp className="topIcon" />
        <Instagram className="topIcon" />
      </div>
    </div>
  )
}
