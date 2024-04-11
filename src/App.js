// App.js

import React, { useState } from 'react';
import Frontend from './Components/Frontend';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import './App.css';
import Footer from './Components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
/* import background from './bgimg.gif'; */

function App() {
  const [currentPage, setCurrentPage] = useState('calculate');

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="momclass" style={{
      backgroundImage: "url(/bgimg.gif)",
      backgroundSize: 'cover'
    }}>
      <Navbar className="navbar-mom" onNavClick={handleNavClick} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'calculate' && <Frontend />}
      <Footer />
    </div>
  );
}

export default App;

