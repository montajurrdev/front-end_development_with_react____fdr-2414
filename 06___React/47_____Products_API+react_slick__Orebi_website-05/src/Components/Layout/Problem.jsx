import React from 'react'

import Slider from "react-slick";
import Container from '../Container';
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Problem = () => {
      var settings = {
        
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <>
  {/* // prevArrow and nextArrow are not showing */}
<Container>
         <Slider {...settings}>
      <div>
        <h3>Montajur </h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
</Container>
    </>
  )
}

export default Problem