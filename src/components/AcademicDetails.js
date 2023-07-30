import React from 'react';
import { Link } from 'react-router-dom'; 
import AcademyImage from './Logo.jpg'; 
import './AcademicDetails.css'; 

const AcademyDetails = () => {
  return (
    <div className="academy-details">
    
      <img src={AcademyImage} alt="Academy" className="academy-image" />

     
      <h2>Academy Details</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        lacinia, magna vel iaculis scelerisque, nisi odio lacinia arcu, nec
        auctor tortor tellus vitae elit.
      </p>

      <Link to="/" className="go-back-btn">Go Back</Link>
    </div>
  );
};

export default AcademyDetails;
