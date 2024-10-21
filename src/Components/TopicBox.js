import React from 'react'
import "./topicbox.css"
import Image from '../Images/Cologo.png';
import Col from 'react-bootstrap/Col';
import SlLogo from '../Images/SlLogo.webp'

export default function TopicBox() {
  return (
    <div>
      <div className="TopicBox">
        <div className='logo right-logo'>
          <img src={SlLogo} alt="SlLogo" width="auto" height="230"/>
        </div>
        <div className='logo left-logo'>
        <Col xs={6} md={4}>
        <img src={Image} alt="Logo" width="175" height="175"/>
        </Col>
        </div>
        <span className='name'>Ruhunu National College Of Education</span>
      </div>
    </div>
  )
}
