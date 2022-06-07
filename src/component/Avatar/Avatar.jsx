import "./avatar.css"

export default function Avatar(props) {
  return (
    <div>
      <img src={props.img} alt={props.alt} />
    </div>
  )
}
