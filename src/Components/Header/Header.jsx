import "./header.css"

function Header() {
  return (
    <div className="header">
      <div className="headerText">
        <span className="bgText">Muh'd Musa</span>
        <span className="smText">Blog</span>
      </div>
      <div className="headerImg">
        <img className="headerImage" src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="headerImg" />
      </div>
    </div>
  )
}

export default Header
