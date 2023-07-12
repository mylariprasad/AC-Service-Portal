/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { FaTools, FaWrench, FaCogs, FaTint, FaClipboardCheck, FaExclamationTriangle } from 'react-icons/fa';
import '../../css/home.css'; // Import the CSS file for styling
import PC from './PC.jpg';
import PC1 from './pc1.png';
import PC2 from './pc2.png';
import PC3 from './pc3.png';
import Carousel from '../../components/Carousel';
const Home = () => {

  const acImages = [
    PC,
    PC1,
    PC2,
    PC3,
  ];

  return (
    <div className="welcome-page">    
      <Carousel images={acImages} />
      <div className="service-box my-5">
        <h1>SERVICES AVAILABLE</h1><br></br>
        <div className="row">
        <div className="rectangle">
          <h2>Installation</h2>
          <FaTools className="icon" />
          <p>Professional AC installation service</p>
        </div>
        <div className="rectangle">
          <h2>Repair</h2>
          <FaWrench className="icon" />
          <p>AC repair and troubleshooting</p>
        </div>
        <div className="rectangle">
          <h2>Maintenance</h2>
          <FaCogs className="icon" />
          <p>Regular AC maintenance and cleaning</p>
        </div>
        </div>
      <div className="row">
        <div className="rectangle">
          <h2>Freon Refill</h2>
          <FaTint className="icon" />
          <p>Recharging AC refrigerant levels</p>
        </div>
        <div className="rectangle">
          <h2>Duct Cleaning</h2>
          <FaClipboardCheck className="icon" />
          <p>Cleaning and maintenance of AC ducts</p>
        </div>
        <div className="rectangle">
          <h2>Emergency Service</h2>
          <FaExclamationTriangle className="icon" />
          <p>24/7 emergency AC service</p>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Home;
