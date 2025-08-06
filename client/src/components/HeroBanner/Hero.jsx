import React from 'react';
import './Hero.css';
import heroImage from './New folder/hero-3.jpg';

const Hero = () => (
  <section className="hero-section">
    <div className="hero-image">
      <img src={heroImage} alt="Hero Banner" className="hero-img" />
    </div>
    <div className="hero-overlay">
      <div className="hero-content">
        <h1>Find Your Dream Home</h1>
        <p>Explore top properties and find the perfect place for you and your family.</p>
        <div className="hero-search">
          <input type="text" placeholder="Search by city, area, or landmark..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
