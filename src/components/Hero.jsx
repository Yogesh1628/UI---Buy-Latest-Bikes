import React from 'react';
import bikeImage from '../assets/imageNew.jpg';
import NewLaunch from './NewLaunch';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <NewLaunch/>
      </div>
      <div className="hero-image">
        <img src={bikeImage} alt="Kryo X26 MTB" />
      </div>
    </section>
  );
};

export default Hero;
