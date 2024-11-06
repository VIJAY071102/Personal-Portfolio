import React from 'react'
import logo from "../assets/JS.png"
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
    <div className='nav-logo'>
        <img src={logo} alt="logo" />
    </div>
    <div className="nav-links">
        <ul>
            <li>
                <NavLink to="/" className="link">Home</NavLink>
            </li>
            <li>
                <NavLink to="/skills" className="link">Skills</NavLink>
            </li>
            <li>
                <NavLink to="/projects" className="link">Projects</NavLink>
            </li>
            <li>
                <NavLink to="/education" className="link">Education</NavLink>
            </li>
            <li>
                <NavLink to="/certifications" className="link">Certifications</NavLink>
            </li>
            <li>
                <NavLink to="/internships" className="link">Internships</NavLink>
            </li>
        </ul>

    </div>
    </nav>
  )
}

export default Navbar