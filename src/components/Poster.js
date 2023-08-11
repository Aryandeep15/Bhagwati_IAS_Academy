import React, { useState, useEffect} from 'react';
import './Poster.css';
import Photo1 from './Photo1.jpg';
import Photo2 from './Photo2.jpg';
import Photo3 from './Photo3.jpg';
import Photo4 from './Photo4.jpg';

const images = [
  Photo1,
  Photo2,
  Photo3,
  Photo4
];

const PosterSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="poster-section">
    <div className="image-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Poster"
          className={`image-slide ${index === currentIndex ? 'active' : ''}`}
        />
      ))}
    </div>
    <div className="arrow-buttons">
      <button onClick={goToPrevImage}>&#8249;</button>
      <button onClick={goToNextImage}>&#8250;</button>
    </div>
  </div>
  );
};

export default PosterSection;
