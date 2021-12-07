import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css"

export default function SideBar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats();
  }, [])
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
        {cats.map(c => (
          <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
          </Link>
          
        ))}
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

