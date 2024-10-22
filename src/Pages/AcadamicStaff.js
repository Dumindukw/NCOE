import React from 'react'
import './AcadamicStaff.css'
import president from '../Images/president.jpg'

export default function AcadamicStaff() {
  return (
    <div className='acadamiccontainer'>
      <h2 className='CourseP'>ACADAMIC STAFF</h2>
      <table className='collegetable'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>Subject</th>
            <th>Teacher educated science</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ms. P. L. Kaluarachchi</td>
            <td>President</td>
            <td>Psychology of Ed. Measurement & Evaluation</td>
            <td>C1</td>
          </tr>
          <tr>
            <td>Ms. M. W. Laticia</td>
            <td>Senior Lecturer</td>
            <td>Ed. Psychology Counselling</td>
            <td>C22</td>
          </tr>
          <tr>
            <td>Ms. B.A. Kanthi</td>
            <td>Lecturer</td>
            <td>Sinhala, Life Conf. Religion, Teacher Practices</td>
            <td>C22</td>
          </tr>
          <tr>
            <td>Ms. V.P.R. Gunawardana</td>
            <td>Lecturer</td>
            <td>Primary Mathes, Sci. Health & Nutr. Principle of Assessment Library Information Science</td>
            <td>C3</td>
          </tr>
          <tr>
            <td>Mr. S. A. Priyantha</td>
            <td>Lecturer</td>
            <td>Psychology, Education Practice, Sinhala.</td>
            <td>C3</td>
          </tr>
          <tr>
            <td>Mrs A H T T Jayamini</td>
            <td>Lecturer</td>
            <td>Science Measurement & Evaluation</td>
            <td>C3</td>
          </tr>
          <tr>
            <td>Mr. H.D. Sarath</td>
            <td>Lecturer</td>
            <td>Env. Related Act. Educational Psychology, Science</td>
            <td>C3</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
