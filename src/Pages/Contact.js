import React from 'react'
import mapimg from '../Images/map2.jpg'
import './Contact.css'

export default function Contact() {
  return (
    <div>
      <h2 className='CourseP'>CONTACT US</h2>
      <h1 className='contactH'>OFFICE</h1>
      <p className='contactaddrs'>Ruhuna National College of Education<br/>
          Kurunduwatta, Walahanduwa,Galle<br/>
            Sri Lanka.</p>
      <p className='contactaddrs'>Telephone: (060) 2600579, (060) 2901396</p>
      <a href='mailto:ruhuna_ncoe@yahoo.com' className='contactaddrs'>ruhuna_ncoe@yahoo.com</a><br/>
      <a href='rncoegalle@yahoo.com' className='contactaddrs'>rncoegalle@yahoo.com</a><br/>
      <div className='containe'>
      <img src={mapimg} className='mapimg'></img>
      </div>
      

    </div>
  )
}
