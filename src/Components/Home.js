// Home.js

import React from 'react';
import './Home.css'; // Import the CSS file for styling

function Home() {
    return (
        <div className="home-container">
            <h1 className="title">Welcome to the RWL NIOSH Lifting Equation Calculator!</h1>
            <div className="content">
                <p>This is a Capstone Project done by:</p>
                <ul className="team-list">
                    <li>Taylan</li>
                    <li>Ezgi</li>
                    <li>Ömer</li>
                    <li>Barış</li>
                    <li>Deniz</li>
                    <li>Ayşe</li>
                </ul>
            </div>
        </div>
    );
}

export default Home;

