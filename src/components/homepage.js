import React from 'react';
import world from '../assets/images/world.jpg';
import Continents from './continents';
import '../App.css';

const HomePage = () => (
  <section className="homepage">
    <div className="homepageImage">
      <span className="gradientLayer" />
      <img src={world} alt="display all continents" className="globe" />
    </div>
    <div className="home">
      <span>Continent Metric</span>
      <Continents />
    </div>
  </section>
);

export default HomePage;
