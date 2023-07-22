import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../css/Carousel.css';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
     <HeaderComponent/>
        <div className="carousel my-5">
          <button className="carousel__button" onClick={handlePrevious}>
            &lt;
          </button>
          <div className="carousel__image-container">
            <img className="carousel__image" src={images[currentIndex]} alt="AC Service" />
            {currentIndex === 0 && (
              <div className="carousel__overlay">
                <h2 className="carousel__text">Welcome to our AC Service Portal</h2>
              </div>
            )}
          </div>
          <button className="carousel__button" onClick={handleNext}>
            &gt;
          </button>
        </div>
        <div className="comtainer my-5">
          
        </div>
</>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
