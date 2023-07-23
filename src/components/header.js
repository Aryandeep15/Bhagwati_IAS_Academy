import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header">
      <div className="contact-info">
        <p>
          <FontAwesomeIcon icon={faPhone} /> +1 123 456 789
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> example@example.com
        </p>
      </div>
    </div>
  );
};

export default Header;
