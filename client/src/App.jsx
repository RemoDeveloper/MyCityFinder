import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import './App.css';
import Hero from './components/HeroBanner/hero.jsx';
import Sale from './components/Sale/sale.jsx';

function App() {
  return (
    <>
    <section className="navbar">
      <Navbar />
    </section>
    <section className='hero'>
        <Hero />
      </section>
      <section>
        <Sale />
        </section>
    </>
  );
}

export default App;
