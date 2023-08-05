import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [isFlipped, setIsFlipped] = useState({ kolkata: false, delhi: false });

  const handleFlip = (location) => {
    setIsFlipped((prevState) => ({
      ...prevState,
      [location]: !prevState[location],
    }));
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="location-boxes">
        <div
          className={`location-box ${isFlipped.kolkata ? 'flipped' : ''}`}
          onClick={() => handleFlip('kolkata')}
        >
          <h3>Kolkata</h3>
          {isFlipped.kolkata && (
            <div className="address">
              <p>Address Line 1, Kolkata</p>
              <p>Address Line 2, Kolkata</p>
            </div>
          )}
        </div>
        <div
          className={`location-box ${isFlipped.delhi ? 'flipped' : ''}`}
          onClick={() => handleFlip('delhi')}
        >
          <h3>Delhi</h3>
          {isFlipped.delhi && (
            <div className="address">
              <p>Address Line 1, Delhi</p>
              <p>Address Line 2, Delhi</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
