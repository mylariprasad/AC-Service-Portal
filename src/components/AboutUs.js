import React,{useState} from 'react';
import '../css/AboutUs.css';
import about from './about.png';
const ACBrands = [
  'Voltas', 'LG', 'Hitachi', 'Panasonic',
  'Haier', 'Blue Star', 'Daikin', 'Samsung'
];

const reasonsToChooseUs = [
  {
    title: 'Expert Technicians',
    description: 'Our technicians are certified professionals with extensive experience in AC repair and maintenance.',
  },
  {
    title: 'Timely Service',
    description: 'We prioritize timely service to ensure minimal disruption to your comfort.',
  },
  {
    title: 'Quality Parts',
    description: 'We use only genuine and high-quality parts for replacements.',
  },
  {
    title: 'Customer Satisfaction',
    description: 'Our commitment to customer satisfaction is unwavering.',
  },
  {
    title: 'Affordable Pricing',
    description: 'We offer competitive and transparent pricing.',
  },
];

const AboutUs = () => {

  const [activeReasonIndex, setActiveReasonIndex] = useState(0);

  const handleNextSlide = () => {
    setActiveReasonIndex((prevIndex) => (prevIndex + 1) % reasonsToChooseUs.length);
  };

  const chunkArray = (array, chunkSize) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunkedArr.push(array.slice(i, i + chunkSize));
    }
    return chunkedArr;
  };

  const brandsInRows = chunkArray(ACBrands, 4);

  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1 className="about-us-heading">About Us</h1>
      </div>
      <p>
      Our AC Repair is a seasoned provider of top-quality AC repair services. With experienced technicians and a customer-centric approach,
      we prioritize excellence and satisfaction.Our knowledgeable and friendly employees deliver efficient solutions, diagnosing and resolving AC issues promptly. With years
      of experience in the industry, we have established ourselves as a trusted name in AC
      maintenance and repair.
      </p>
      <h2>Brands we service</h2>
      <div className="brands-container">
        {brandsInRows.map((row, rowIndex) => (
          <div key={rowIndex} className="brand-row">
            {row.map((brand, brandIndex) => (
              <div key={brandIndex} className="brand-box">
                {brand}
              </div>
            ))}
          </div>
        ))}
      </div>
      <h2>Our Distinctive Services</h2>
      <div className="d-container">
        <img src= {about} alt="image1" className="d-image" />
        <div className="d-content">
          
          <div className="reasons-container">
            <div className="reason-card">
              <h3>{reasonsToChooseUs[activeReasonIndex].title}</h3>
              <p>{reasonsToChooseUs[activeReasonIndex].description}</p>
            </div>
            <div className="arrow-container">
              <span className="arrow-right" onClick={handleNextSlide}>&#9654;</span>
            </div>
          </div>
        </div>
      </div>
      <div className="additional-info-container">
        <h2>Key Features</h2>
        <div className="circle-container">
          <div className="circle">
            <span>50+ Service Providers</span>
          </div>
          <div className="circle">
            <span>22 Supporting Warehouses</span>
          </div>
          <div className="circle">
            <span>12 Sales Offices</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
