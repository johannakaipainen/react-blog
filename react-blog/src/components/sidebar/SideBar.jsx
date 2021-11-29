import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://images.pexels.com/photos/9800099/pexels-photo-9800099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt="me"></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim animi in quidem, facere harum aliquid, quo impedit eveniet numquam autem recusandae consequatur dolorum excepturi assumenda minus dolores natus et aspernatur?</p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Life</li>
        <li className="sidebarListItem">Music</li>
        <li className="sidebarListItem">Style</li>
        <li className="sidebarListItem">Sport</li>
        <li className="sidebarListItem">Cinema</li>
        <li className="sidebarListItem">Tech</li>
      </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>

    </div>
  )
}

