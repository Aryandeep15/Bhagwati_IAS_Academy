import React from 'react';
import './Register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Register = () => {
  return (
    <div className="Register">
      
      <div className="social-icons">

      <button className="cta-button">
      <FontAwesomeIcon icon={faUser} className="register-logo" />
      Register Now</button>

        <a href="https://www.youtube.com/">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.twitter.com/">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.facebook.com/">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.instagram.com/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      
    </div>
  );
};

export default Register;
