import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header">
      <div className="contact-info">
        <p>
          <FontAwesomeIcon icon={faPhone} /> +91 7001800058
        </p>
        
        <p>
          <FontAwesomeIcon icon={faPhone} /> +91 9304600520
        </p>
        
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> bhagwatiiasacademy@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Header;
