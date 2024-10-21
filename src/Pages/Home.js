import React from 'react';
import './Home.css'; // optional custom styles
import grlogo from '../Images/grlogo.png'

const Foot = () => {
  return (
    <footer className="foot">
      <div className="container">
        <h2 className='foot-heading'>About Us</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="foot-section">
              <div className="icon">
              <img src={grlogo} className='grlogo' width={60}></img>
              </div>
              <h3>Mission</h3>
              <p>
                To produce continuously developing, professionally competent teachers for Sri Lanka.
              </p>
              <p>
                To develop the personality of the prospective teachers through guidance and influence of productive, creative, exemplary, and talented teacher educators.
              </p>
              <p>
                To nourish the mental health of prospective teachers by creating a pleasant, healthy, and stress-free environment in the college.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="foot-section">
              <div className="icon">
              <img src={grlogo} className='grlogo' width={60}></img>
              </div>
              <h3>Vision</h3>
              <p>
                In the middle of the logo, a swan can be seen. The swan can separate milk from water, symbolizing teachers who pass out from National Colleges of Education. Like the swan, they are able to extract the best from the environment.
              </p>
              <p>
                The five circles around the swan symbolize the first five National Colleges of Education that were established in 1985. The NCoEs provide opportunities to produce high-quality, innovative, reflective, and committed teachers for the national education system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foot;