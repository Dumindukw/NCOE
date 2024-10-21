import React from 'react'
import './Imageslider.css'
import Slider from 'react-slick';
import slidingimage01 from '../Images/slide001.png'
import slidingimage02 from '../Images/slide002.png'
import slidingimage03 from '../Images/slide003.png'

const ImageSlider = () => {
    const settings = {
      dots: true,  // Shows navigation dots
      infinite: true,  // Infinite loop sliding
      speed: 500,  // Transition speed in ms
      slidesToShow: 1,  // Number of slides to show at once
      slidesToScroll: 1,  // Number of slides to scroll at a time
      autoplay: true,  // Automatically slide
      autoplaySpeed: 2000,  // Time between slides in ms
    };

  return (
    <Slider {...settings}>
      <div>
        <img src={slidingimage01} alt="Slide 1" />
      </div>
      <div>
        <img src={slidingimage02} alt="Slide 2" />
      </div>
      <div>
        <img src={slidingimage03} alt="Slide 3" />
      </div>
    </Slider>
  );
};

export default ImageSlider;

