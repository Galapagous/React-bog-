import "./blogItem.css"
import { Outlet, Link } from "react-router-dom"

export default function BlogItem(props) {
  return (
    <div className="blogItem">
      <img className="blogImage" src={props.img} alt={props.title} />
      <span className="imageTitle">{props.time}</span>
      <Link to="/post">
        <h1 className="blogTitle">{props.title}</h1>
      </Link>
      <p className="blogParagraph">{props.paragraph}</p>
    </div>
  )
}
