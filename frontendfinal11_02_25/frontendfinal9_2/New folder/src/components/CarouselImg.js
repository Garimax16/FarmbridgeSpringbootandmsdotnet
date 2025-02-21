import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import cimg1 from '../media/cimg1.jpg';
import cimg2 from '../media/cimg2.jpg';
import cimg3 from '../media/cimg3.jpg';
function CarouselImg() {
    return (
        
      <Carousel data-bs-theme="dark" >
        <Carousel.Item>
        <img
            className="d-block w-100"
            src={cimg1}
            width={100}
            height={500}
            alt="Second slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cimg2}
            width={100}
            height={500}
            alt="Second slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cimg3}
            width={100}
            height={500}
            alt="Third slide"
          />
          
        </Carousel.Item>
      </Carousel>
    
    );
}

export default CarouselImg;