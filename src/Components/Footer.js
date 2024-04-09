// Footer.js

import React from 'react';
import './Footer.css'; // Import the CSS file for styling

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="social-icons">
                    <a href="https://twitter.com/Bahcesehir" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/bahcesehiruniversity/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                
                <a href="https://www.bau.edu.tr" target="_blank" rel="noopener noreferrer">
                    <img src="./bau.jpeg" alt="Your Image" className="custom-image" />
                </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


