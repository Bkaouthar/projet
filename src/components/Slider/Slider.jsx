import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';

const Slider = ({ items }) => {
  const [active, setActive] = useState(0);
  const lengthItems = items.length;
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % lengthItems);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + lengthItems) % lengthItems);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000); // Automatically change the slide every 3 seconds
    // return () => clearInterval(intervalRef.current); // Clean up the interval on unmount
  }, [lengthItems]);

  return (
    <div className="slider">
      <div className="list" style={{ transform: `translateX(-${active * 100}%)` }}>
        {items.map((item, index) => (
          <div key={index} className={`item ${index === active ? 'active' : ''}`}>
            {item}
          </div>
        ))}
      </div>

      <button
        id="prev"
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="slider-button"
      >
        «
      </button>
      <button
        id="next"
        onClick={nextSlide}
        aria-label="Next Slide"
        className="slider-button"
      >
        »
      </button>
    </div>
  );
};

export default Slider;
