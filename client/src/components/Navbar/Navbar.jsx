import React, { useState } from 'react';
import './Navbar.css';
import logo from './img/main-logo-3.png';
import { Squash as Hamburger } from 'hamburger-react';

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-center">
          <img src={logo} alt="MyCityFinder Logo" className="logo" />
        </div>
        <div className="navbar-hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className={`nav-right${isOpen ? ' show' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/properties">Properties</a></li>
            <li><a href="/agents">Agents</a></li>
            <li><a href="/blog">Blog</a></li>
            <li>
              <button>
                <a href="/contact" className="contact contact-button">Contact Us</a>
              </button>
            </li>
          </ul>
        </div>
        <div className="contact-info">
          <span className="phone">Call Us: (+91) 9154829627</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
