import React, { useState, useEffect } from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope, faBook, faVideo, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo.jpg';

const AboutUs = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  return (
    <div className={`about-us ${isFixed ? 'fixed' : ''}`} id="myHeader">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navigation">
        <ul>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faHome} /> Home
            </a>
          </li>
          <li>
            <a href="/about">
              <FontAwesomeIcon icon={faInfoCircle} /> About Us
            </a>
          </li>
          <li>
            <a href="/contact">
              <FontAwesomeIcon icon={faEnvelope} /> Contact Us
            </a>
          </li>
          <li>
            <a href="/blog">
              <FontAwesomeIcon icon={faBook} /> Blog
            </a>
          </li>
          <li>
            <a href="/videos">
              <FontAwesomeIcon icon={faVideo} /> Videos
            </a>
          </li>
          <li>
            <a href="/courses">
              <FontAwesomeIcon icon={faGraduationCap} /> Courses
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
