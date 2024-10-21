import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import TopicBox from './Components/TopicBox';
import Course from './Pages/Course';
import College from './Pages/College';
import AcadamicStaff from './Pages/AcadamicStaff';
import Photos from './Pages/Photos';
import Contact from './Pages/Contact';
import Col from 'react-bootstrap/Col'
import Home from './Pages/Home';
import Footer from './Components/Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Imageslider from './Pages/Imageslider';
import Frontview from './Pages/Frontview';

function App() {
  return (
    <Router>
      <div>
        <span>
        <TopicBox/>
        <NavBar/>

        <Routes>
         <Route path="/" element={<><Frontview/><Imageslider/></>}/>
         <Route path="/Home" element={<Home/>}/>
          <Route path="/Course" element={<Course/>}/>
          <Route path="/College" element={<College/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Photos" element={<Photos/>}/>
          <Route path="/AcadamicStaff" element={<AcadamicStaff/>}/>
        </Routes>
        <br></br>
        <br></br>
        <Footer/>
        </span>
      </div>
    </Router>
  )
}

export default App;
