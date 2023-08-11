import React from 'react';
import './AboutUs.css';
import IASAcademyImage from './Logo.jpg';

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <div className="about-us-image">
                    <img src={IASAcademyImage} alt="IAS Academy" />
                </div>
                <div className="about-us-description">
                    <h2>About Our Academy</h2>
                    <p>
                    Bhagwah IAS academy is an Indian educational
                    organisation for civil services aspirants. Founded in 2005 by Bharat Singh
                    in Delhi. It provides coaching,
                    guidance and evaluation. Both online and offline.
                    Academy has two branches (Delhi and Kolkata).
                    We care at individual level with freiendly environment
                    and assist you in strategy, time management and
                    syllabus managment.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
