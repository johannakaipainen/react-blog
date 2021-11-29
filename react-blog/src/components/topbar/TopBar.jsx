import "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
        <div className="topCenter">
          <ul className="topList">
           <li className="topListItem"><Link to="/" className="link">HOME</Link></li>         
           <li className="topListItem"><Link to="/" className="link">ABOUT</Link></li>
           <li className="topListItem"><Link to="/" className="link">CONTACT</Link></li>
           <li className="topListItem"><Link to="/write" className="link">WRITE</Link></li>           
           <li className="topListItem">
             {user && "LOGOUT"}
           </li>          
          </ul> 
      </div>

      <div className="topRight">
        {
          user ? (
          <img className="topImg" 
          alt=""
          src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img> 
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">LOGIN</Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">REGISTER</Link>
              </li>
            </ul>
          )
        }
        
        <i className="topSearchIcon fas fa-search"></i>  
      </div>      
  </div>
  )
}
