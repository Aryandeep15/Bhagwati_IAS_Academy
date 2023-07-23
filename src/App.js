import React from 'react';
import Header from './components/header';
import Register from './components/Register';
import AboutUs from './components/About';
import Welcome from './components/Welcome';
import PosterSection from './components/Poster';
import Branches from './components/Branches';
import BranchAddress from './components/BranchAddress';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Register />
      <AboutUs />
      <Welcome />
      <PosterSection />
      <Branches />
      <BranchAddress />
      <Footer />
    </div>
  );
};

export default App;
