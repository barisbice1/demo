// App.js

import React, { useState } from 'react';
import Frontend from './Components/Frontend'; // Import your main component
import Navbar from './Components/Navbar'; // Import the Navbar component
import Home from './Components/Home'; // Import the Home component
import './App.css'; // Import the CSS file for global styles
import Footer from './Components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Navbar onNavClick={handleNavClick} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'calculate' && <Frontend />}
      <Footer />
    </div>
  );
}

export default App;

