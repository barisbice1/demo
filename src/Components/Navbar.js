// Navbar.js

import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

function Navbar({ onNavClick }) {
  const handleCalculateClick = () => {
    onNavClick('calculate');
  };

  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <li><a href="#" onClick={() => onNavClick('home')}>Home</a></li>
      </ul>
      <ul className="navbar-right">
        <li><a href="#" onClick={handleCalculateClick}>Calculator</a></li>
        <li><a href="#" onClick={() => onNavClick('NIOSH')}>NIOSH</a></li>
        <li><a href="#" onClick={() => onNavClick('about')}>About Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

