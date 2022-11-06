import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { useState } from "react";

import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="topnav">
      <span className="site-title">
        POTATO
      </span>
      <ul className={`nav-items ${isOpen && "open"}`}>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/Food">Food</CustomLink>
        <CustomLink to="/Restaurant">Restaurant</CustomLink> 
        <CustomLink to="/Tech">Tech</CustomLink> 
        <CustomLink to="/Kids">Kids</CustomLink>
      </ul>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </nav>
    
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}