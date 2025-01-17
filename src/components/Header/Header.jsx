import React, { useState } from 'react';
import './Header.css';
import Slider from '../../components/Slider/Slider'; // Import Slider component
import hed1 from '../../assets/hed1.png'; 
import hed2 from '../../assets/hed2.png'; 
import hed3 from '../../assets/hed3.png';

const Header = () => {
  const [category, setCategory] = useState("All");

  // List of slider items (dynamically created)
  const sliderItems = [
    <div key="1" className="item">
      <img src={hed1} alt="Header 2" className="slider-image"  />
    </div>,
    <div key="2" className="item">
      <img src={hed2} alt="Header 3" className="slider-image" />
    </div>,
    <div key="3" className="item">
      <img src={hed3} alt="Header 4" className="slider-image" />
    </div>,
  ];

  return (
    <div className='header'>
      <Slider items={sliderItems}/>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Explore our menu to discover your favorite items, and don't forget to check out 
          our special deals and combos for great savings. Ready to place your order? 
          Simply browse our menu, select your desired items, and proceed to checkout. 
          We offer convenient delivery and pickup options to ensure you get your food exactly 
          how you want it, when you want it.
        </p>
        <button style={{ cursor: "pointer" }}>View menu</button>
      </div>
    </div>
  );
};

export default Header;
