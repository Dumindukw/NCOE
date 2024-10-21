import React from 'react'
import './College.css'
import ptimage from '../Images/PT.jpeg'
import acadamicimage from '../Images/acadamic.jpg'
import acadamicimage1 from '../Images/acadamic1.jpeg'
import diningimg from '../Images/dining.jpeg'
import diningimg1 from '../Images/dining1.jpeg'
import nonacadamicimg from '../Images/non-acadamic.jpeg'

export default function College() {
  return (
    <div>
      <h2 className='CollegeP'>THIS IS COLLEGE DAILY LIFE</h2>
      <p className='collegepara'>
        5.00AM Wake Up<br/>
        6.00AM Morning Exersise
      </p>
      <div className='container'>
      <img src={ptimage} alt="Pt" className='college-image'/> <br/>
      </div>

      <p className='collegepara'>7.00AM Breakfast<br/> </p>

      <div className='container'>
      <img src={diningimg} alt="Dining lunch" className='college-image' />
      </div>

      <p className='collegepara'>8.00AM - 11.45AM Acadamics <br/> </p>
      
      <div className='container'>
      <img src={acadamicimage} alt="class" className='college-image' />
      </div>
      
      <p className='collegepara'>11.45AM - 01.00PM Lunch<br/> </p>
       
      <div className='container'>
      <img src={diningimg1} alt="dining" className='college-image'/>
      </div>

      <p className='collegepara'>01.00PM - 03.30PM Acadamics <br/> </p>
      
      <div className='container'>
      <img src={acadamicimage1} alt="class" className='college-image'/>
      </div>

      <p className='collegepara'>04.00PM - 06.00PM Non-Acadamics <br/> </p>
      
      <div className='container'>
      <img src={nonacadamicimg} alt="class" className='college-image'/>
      </div>
      
      <p className='collegepara'>07.00PM Dinner <br/> </p>

    </div>
  )
}
