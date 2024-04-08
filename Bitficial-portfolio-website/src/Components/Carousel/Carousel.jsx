import React, { useState, useEffect } from "react";
import "./Carousel.scss"; // Ensure your CSS file is updated accordingly

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <div className="textcontainer">
        <h1>Featured Projects</h1>
      </div>
      <button className="left-arrow" onClick={goToPrevious}>
        &laquo;
      </button>
      <div className="image-container">
        <img src={images[currentIndex].url} alt="carousel" />
        <p>{images[currentIndex].description}</p>
      </div>
      <button className="right-arrow" onClick={goToNext}>
        &raquo;
      </button>
      <div className="progress-bar-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`progress-bar ${currentIndex === index ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
