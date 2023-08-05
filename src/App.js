import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/header';
import Register from './components/Register';
import AboutUs from './components/About';
import Welcome from './components/Welcome';
import PosterSection from './components/Poster';
import Branches from './components/Branches';
import BranchAddress from './components/BranchAddress';
import Footer from './components/Footer';
import Academy from './components/academyIntro';
import AcademyDetails from './components/AcademicDetails';
import DirectorsDetails from './components/directorsdesk';
import ContactUs from './components/ContactUs';

const HideableSections = ({ children, hideOnRoutes }) => {
  const location = useLocation();
  const shouldHide = hideOnRoutes.includes(location.pathname);

  return shouldHide ? null : children;
};

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Register />
        <AboutUs />

        <Routes>
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        <HideableSections hideOnRoutes={['/contact']}>
          <PosterSection />
          <Welcome />
          
          
        

          <Routes>
            <Route path="/" element={<Academy />} />
            <Route path="/academy/details" element={<AcademyDetails />} />
            <Route path="/directors/details" element={<DirectorsDetails />} />
          </Routes>

          <Branches />
          <BranchAddress />

        </HideableSections>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
