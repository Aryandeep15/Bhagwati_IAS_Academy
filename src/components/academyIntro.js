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
      Bhagwah IAS academy is an Indian educational organisation for civil services aspirants. Founded in 2005 by Bharat Singh in Delhi...
      </p>
      <Link to="/about" className="read-more-btn">Read More</Link>
    </div>
  );
};

const DirectorMessage = () => {
  return (
    <div className="director-message">
      <img src={DirectorPhoto} alt="Director" className="director-photo" />
      <h2>From Director's Desk</h2>
      <p>
        Dear Students,
        Warm welcome and hoping all is well. We are dedicated to your success. But it needs hard work and commitment...
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
