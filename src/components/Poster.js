import React from 'react';
import Poster from './Poster.png';
import './Poster.css'
const PosterSection = () => {
  return (
    <div className="poster-section">
      <img src={Poster} alt="Poster" />
    </div>
  );
};

export default PosterSection;
