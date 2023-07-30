import React from 'react';
import './academyIntro.css';
import Logo from './Logo.jpg';
import DirectorPhoto from './director_photo.jpg';
import { Link } from 'react-router-dom';

const AcademyIntro = () => {
  return (
    <div className="academy-intro">
      <img src={Logo} alt="Academy Logo" className="academy-logo" />
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        lacinia, magna vel iaculis scelerisque, nisi odio lacinia arcu, nec
        auctor tortor tellus vitae elit.
      </p>
      <Link to="/academy/details" className="read-more-btn">Read More</Link>
    </div>
  );
};

const DirectorMessage = () => {
  return (
    <div className="director-message">
      <img src={DirectorPhoto} alt="Director" className="director-photo" />
      <h2>From Director's Desk</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        lacinia, magna vel iaculis scelerisque, nisi odio lacinia arcu, nec
        auctor tortor tellus vitae elit. Nulla facilisi. Sed nec est elit.
      </p>
      <Link to="/directors/details" className="read-more-btn">Read More</Link>
    </div>
  );
};

const Academy = () => {
  return (
    <div className="academy-container">
      <AcademyIntro />
      <DirectorMessage />
    </div>
  );
};

export default Academy;
