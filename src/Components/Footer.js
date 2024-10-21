import React from 'react'
import './Footer.css'
import facebook from '../Images/facebook.png'
import youtube from '../Images/youtube.png'
import Home from '../Pages/Home';

const Footer = () => {
    return (
        <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/Home">Home</a></li>
              <li><a href="/Course">Course</a></li>
              <li><a href="College">College</a></li>
              <li><a href="Acadamicstaff">Acadamic Staff</a></li>
              <li><a href="Contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Get Help</h3>
            <ul>
              <li><a href="https://moe.gov.lk/">Ministry of Education</a></li>
              <li><a href="https://www.nie.ac.lk/">National Institution of Education</a></li>
              <li><a href="https://moe.gov.lk/academics/education-services/">Department of Education</a></li>
              <li><a href="http://www.edupub.gov.lk/">Education Publication Department</a></li>
              <li><a href="https://www.edumin.sp.gov.lk/">Western Provincial Department of Education</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Ruhuna National College of Education,Kurunduwatta, Walahanduwa,Galle,Sri Lanka.</p>
            <p>(060) 2600579, (060) 2901396</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <ul className="social-icons">
              <li><a href="https://www.facebook.com/p/Ruhuna-National-College-of-Education-100069660740529/"><img src={facebook} alt="Facebook"/></a></li>
              <li><a href="https://www.youtube.com/watch?v=f_p9VuN5e10"><img src={youtube} alt="Youtube"/></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Created by Dumindu Wellala | © 2024 All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
