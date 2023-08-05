import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer>
      <div className="social-media">
        <a href="https://www.facebook.com/" className="bold white"> Facebook  |</a>
        <a href="https://twitter.com/home?" className="bold white">  Twitter  | </a>
        <a href="https://www.instagram.com/" className="bold white"> Instagram</a>
      </div>
      <div className="footer-content">
        <div className="footer-margin"></div>
        <p className="copyright">© 2023 Bhagwati IAS Academy</p>
      </div>
      <button className="back-to-top" onClick={scrollToTop}>Back on top</button>
    </footer>
  );
};

export default Footer;
