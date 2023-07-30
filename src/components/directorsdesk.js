import React from 'react';
import { Link } from 'react-router-dom';
import DirectorImage from './director_photo.jpg'; 
import './directorsdesk.css';

const DirectorsDesk = () => {
  return (
    <div className="directors-desk">

      <img src={DirectorImage} alt="Director" className="director-image" />

      <h2>Director's Desk</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        lacinia, magna vel iaculis scelerisque, nisi odio lacinia arcu, nec
        auctor tortor tellus vitae elit.
      </p>
      <Link to="/" className="go-back-btn">Go Back</Link>
    </div>
  );
};

export default DirectorsDesk;
