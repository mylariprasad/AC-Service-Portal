import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/footer.css';
import { SocialIcon } from 'react-social-icons';

const FooterComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleFooterHover = () => {
    setIsExpanded(true);
  };

  const handleFooterLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div>
      <div className={`container-fluid footer ${isExpanded ? 'expanded' : ''}`} onMouseEnter={handleFooterHover} onMouseLeave={handleFooterLeave}>
        <div className='container-fluid ml-8 mr-8'>
          <div className='row ml-5'>
            <div className='col-12 col-md-4 col-xl-4 col-lg-4'>
              <div className='about_footer'>
                <h3 className='text-black'>About Us</h3>
                <hr className='bg-black'></hr>
                <p className='text-black pr-5' style={{ textAlign: 'left' }}>
                  The AC REPAIR PORTAL, the one-stop solution for you to book repairing of your AC or its franchise partner. We therefore guarantee our product to be 100% genuine and fresh. Organic vegetables or fruits, as we all know, are grown without using any kind of artificial fertilizer, pesticides, or herbicides. They are just grown naturally.
                </p>
              </div>
            </div>

            <div className='col-12 col-md-2 col-xl-2 col-lg-2'>
              <div className='about_footer'>
                <h3 className='text-black'>Quick Links</h3>
                <hr className='bg-black'></hr>
                <ul className='a'>
                  <li><NavLink to="/" >Home</NavLink></li><br></br>
                  <li><NavLink to="/" >About Us</NavLink></li><br></br>
                  <li><NavLink to="/" >Gallery</NavLink></li><br></br>
                  <li><NavLink to="/">Contact Us</NavLink></li><br></br>
                </ul>
              </div>
            </div>

            <div className='col-12 col-md-2 col-xl-2 col-lg-2'>
              <div className='about_footer'>
                <h3 className='text-black'>Follow Us</h3>
                <hr className='bg-black'></hr>
                <ul>
                  <li><SocialIcon url="https://twitter.com" /></li><br></br>
                  <li><SocialIcon url="https://facebook.com" /></li><br></br>
                  <li><SocialIcon url="https://youtube.com" /></li><br></br>
                  <li><SocialIcon url="https://whatsapp.com" /></li><br></br>
                </ul>
              </div>
            </div>

            <div className='col-12 col-md-4 col-xl-4 col-lg-4'>
              <div className='about_footer'>
                <h3 className='text-black'>Contact Us</h3>
                <hr className='bg-black'></hr>
                <span>Address : -</span> <span>Salt Lake Sector V (Kolkata)</span><br></br>
                <a href="tel:+9330379535 tel:+669875"><i className='fas fa-phone'></i> +91-9330379535   <i className='fas fa-phone'></i> +91-9749002205 </a><br></br>
                
                <a href="#"><i className='fas fa-envelope'></i>  mdshoelhossain649@gmail.com <br/><i className='fas fa-envelope'></i>  amilohit.1999@gmail.com</a>

              </div>
              <div className='mt-1 mr-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26081.137909197547!2d88.43282685235556!3d22.574256955373254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1656678985189!5m2!1sen!2sin" width="100%" height="150px" style={{ border: '0px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
          <hr className='bg-black'></hr>

          <div className='row'>
            <div className='col-12'>
              <p className='text-center text-black'>&copy; 2023 Design & Developed by JAVA_REACT_TEAM 1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
