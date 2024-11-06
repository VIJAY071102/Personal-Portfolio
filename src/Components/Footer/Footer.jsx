import React from 'react'
import logo from "../../assets/JS.png";
import './Footer.css';
function Footer() {
  return (
    <>
    <footer>
        <div className="footer-logo">
            <img src={logo} alt="" />
        </div>

        <div className="footer-copyright">
            <p><i class="fa-regular fa-copyright"></i> 2024 JS VIJAY. All Rights reserved </p>
        </div>

        <ul className='footer-social-media'>
            <li><a href="https://www.linkedin.com/in/JSVIJAY"><i class="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://github.com/VIJAY071102?tab=projects"><i class="fa-brands fa-github"></i></a></li>
        
        </ul>
    </footer>
    
    </>
  )
}

export default Footer