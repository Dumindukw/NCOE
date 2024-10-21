import React from 'react'
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';

export default function NavBar() {
  return (
    <div>
       <nav className='navbartop'> 
       <Link className="NavBar" to="/Home">HOME</Link>

          <Link className="NavBar" to="/Course">COURSE</Link>
        
          <Link className="NavBar" to="/College">COLLEGE</Link>
        
          <Link className="NavBar" to="/AcadamicStaff">ACADAMIC STAFF</Link>
        
          <Link className="NavBar" to="/Photos">PHOTOS</Link>
        
          <Link className="NavBar" to="/Contact">CONTACT</Link>
    </nav>
    </div>
  )
}
