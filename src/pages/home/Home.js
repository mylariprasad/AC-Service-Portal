import React from 'react';
import { FaTools, FaWrench, FaCogs, FaTint, FaClipboardCheck, FaExclamationTriangle,FaUserTie, FaClock, FaUserCheck} from 'react-icons/fa';
import Happy from './Happy.png'
import '../../css/home.css'; // Import the CSS file for styling
import PC from './PC.jpg';
import PC1 from './pc1.png';
import PC2 from './pc2.png';
import PC3 from './pc3.png';
import Carousel from '../../components/Carousel';
import data from './data.json'
import AboutUs from './AboutUs.jpg'
import img from './img.jpg'
import testimonial3 from './testimonial3.jpg'
import { BsFillPeopleFill } from 'react-icons/bs';
import FooterComponent from '../../components/FooterComponent';

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
      
      <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h1>What our clients say</h1>
          
        </div>
        <div className='row'>
          {data
            ? data.Testimonials.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>
                      {' '}
                      
                      <img src={d.img} alt='img' />{' '}
                    </div>
                    <div className='testimonial-content'>
                      <p>"{d.text}"</p>
                      <div className='testimonial-meta'> - {d.name} </div>
                    </div>
                  </div>
                </div>
                
              ))
            : 'loading'}
        </div>
      </div>
    </div>
    <div className="company-metrices">
        <div className="row1">
        <div className="rectangle1">
          <FaTools className="icon1" />
          <h1>350</h1>
          <h3>Repairs Daily</h3>
        </div>
        <div className="rectangle1">
          <BsFillPeopleFill className="icon1" />
          <h1>95%</h1>
          <h3>Happy Customers</h3>
        </div>
        <div className="rectangle1">
          <FaUserTie className="icon1" />
          <h1>100+</h1>
          <h3>Active Employees</h3>
        </div>
        </div>
        </div>

    <div id='about'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src={AboutUs} className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h1>About Us</h1>
              <br />
              <p>{data.About ? data.About.paragraph : 'loading...'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="feature">
              <i className="fas fa-tools"></i>
              <h3 className="feature-title">Professional Technicians</h3>
              <p className="feature-description">Our team consists of highly skilled and experienced technicians who ensure top-quality repairs.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature">
              <i className="fas fa-clock"></i>
              <h3 className="feature-title">Fast Turnaround Time</h3>
              <p className="feature-description">We understand the urgency of AC repairs, and our quick turnaround time ensures your comfort is restored promptly.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature">
              <i className="fas fa-check-circle"></i>
              <h3 className="feature-title">Quality Service</h3>
              <p className="feature-description">We are committed to providing excellent service, using high-quality parts and delivering customer satisfaction.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature">
              <i className="fas fa-headset"></i>
              <h3 className="feature-title">24/7 Customer Support</h3>
              <p className="feature-description">Our dedicated customer support team is available 24/7 to assist you with any queries or concerns.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature">
              <i className="fas fa-hand-holding-usd"></i>
              <h3 className="feature-title">Affordable Pricing</h3>
              <p className="feature-description">We offer competitive and transparent pricing without compromising on the quality of our services.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature">
              <i className="fas fa-check"></i>
              <h3 className="feature-title">Satisfaction Guaranteed</h3>
              <p className="feature-description">We strive for complete customer satisfaction and ensure that our customers are happy with the results.</p>
            </div>
          </div>
        </div>
      </div>
      
      <FooterComponent/>
    </div>
  );
};

export default Home;
