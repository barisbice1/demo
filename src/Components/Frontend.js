import React, { useState } from 'react';
import './style.css'; // Import the CSS file
/* import Navbar from './Navbar'; // Import the Navbar component */
import jsPDF from 'jspdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

function Frontend() {
  // State variables to store input values
  const [horizontalMultiplier, setHorizontalMultiplier] = useState('');
  const [verticalMultiplier, setVerticalMultiplier] = useState('');
  const [frequencyMultiplier, setFrequencyMultiplier] = useState('');
  const [distanceMultiplier, setDistanceMultiplier] = useState('');
  const [asymmetricMultiplier, setAsymmetricMultiplier] = useState('');
  const [couplingMultiplier, setCouplingMultiplier] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  // State variable to store the calculated result
  const [calculatedResult, setCalculatedResult] = useState(null);

  // State variable to control which section's content is displayed
  const [activeSection, setActiveSection] = useState('summary');

  // Function to handle calculation
  const handleCalculate = () => {
    // Perform calculation here
    // For demonstration purposes, let's assume the calculation result is 42
    const result = 42; // Replace this with your actual calculation

    // Update the calculated result state
    setCalculatedResult(result);
    // Switch active section to summary after calculation
    setActiveSection('summary');
  };

  // Function to generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Inputs:', 10, 10);
    doc.text(`Horizontal Multiplier: ${horizontalMultiplier}`, 10, 20);
    doc.text(`Vertical Multiplier: ${verticalMultiplier}`, 10, 30);
    doc.text(`Frequency Multiplier: ${frequencyMultiplier}`, 10, 40);
    doc.text(`Distance Multiplier: ${distanceMultiplier}`, 10, 50);
    doc.text(`Asymmetric Multiplier: ${asymmetricMultiplier}`, 10, 60);
    doc.text(`Coupling Multiplier: ${couplingMultiplier}`, 10, 70);
    
    doc.text(`Recommended Weight Limit (RWL): ${calculatedResult} kg`, 10, 90);
    doc.text(`Name: ${name} ${surname}`, 10, 100);
    doc.save('niosh_calculator.pdf');
  };

  // State variables to manage visibility of description pop-ups
  const [showDescriptions, setShowDescriptions] = useState({
    horizontalMultiplier: false,
    verticalMultiplier: false,
    frequencyMultiplier: false,
    distanceMultiplier: false,
    asymmetricMultiplier: false,
    couplingMultiplier: false,
  });

  // Descriptions for each multiplier
  const descriptions = {
    horizontalMultiplier: 'This is what you put here.', 
    verticalMultiplier: 'This is what you put here.',
    frequencyMultiplier: 'Description for frequency multiplier',
    distanceMultiplier: 'Description for distance multiplier',
    asymmetricMultiplier: 'Description for asymmetric multiplier',
    couplingMultiplier: 'Bad-Good',
  };

const images = {
  horizontalMultiplier: './funnyimg.gif',
  verticalMultiplier: './funnyimg.gif',
  frequencyMultiplier: './funnyimg.gif',
  distanceMultiplier: './funnyimg.gif',
  asymmetricMultiplier: './funnyimg.gif',
  couplingMultiplier: './funnyimg.gif',
};

  // Function to toggle description pop-up
  const toggleDescription = (field) => {
    setShowDescriptions({ ...showDescriptions, [field]: !showDescriptions[field] });
  };

  return (
    <div className="container">
      <div className="calculator">
        {/* Your current calculator component */}
        <img className="photo" src="./nioshadam.jpeg" alt="NIOSH calculator"></img>
        <div className = "input-container1">
          <input
          className="input"
          type="number"
          placeholder="Enter horizontal multiplier"
          value={horizontalMultiplier}
          onChange={(e) => setHorizontalMultiplier(e.target.value)}
        />
        <FontAwesomeIcon
              icon={faQuestionCircle}
              className="question-mark"
              onClick={() => toggleDescription('horizontalMultiplier')}
            />
            {showDescriptions.horizontalMultiplier && (
              <div className="description-popup">
                <img src={images.horizontalMultiplier} alt="Description" />
                <p>{descriptions.horizontalMultiplier}</p>
              </div>
            )}
        </div>

        <div className = "input-container2">
          <input
          className="input"
          type="number"
          placeholder="Enter vertical multiplier"
          value={verticalMultiplier}
          onChange={(e) => setVerticalMultiplier(e.target.value)}
        />
        <FontAwesomeIcon
              icon={faQuestionCircle}
              className="question-mark"
              onClick={() => toggleDescription('verticalMultiplier')}
            />
            {showDescriptions.verticalMultiplier && (
              <div className="description-popup">
                <img src={images.verticalMultiplier} alt="Description" />
                <p>{descriptions.verticalMultiplier}</p>
              </div>
            )}
        </div>
        
        <div className = "input-container3">
          <input
          className="input"
          type="number"
          placeholder="Enter frequency multiplier"
          value={frequencyMultiplier}
          onChange={(e) => setFrequencyMultiplier(e.target.value)}
        />
        <FontAwesomeIcon
              icon={faQuestionCircle}
              className="question-mark"
              onClick={() => toggleDescription('frequencyMultiplier')}
            />
            {showDescriptions.frequencyMultiplier && (
              <div className="description-popup">
                <img src={images.frequencyMultiplier} alt="Description" />
                <p>{descriptions.frequencyMultiplier}</p>
              </div>
            )}
        </div>
        
        <div className = "input-container4">
          <input
          className="input"
          type="number"
          placeholder="Enter distance multiplier"
          value={distanceMultiplier}
          onChange={(e) => setDistanceMultiplier(e.target.value)}
        />
        <FontAwesomeIcon
              icon={faQuestionCircle}
              className="question-mark"
              onClick={() => toggleDescription('distanceMultiplier')}
            />
            {showDescriptions.distanceMultiplier && (
              <div className="description-popup">
                <img src={images.distanceMultiplier} alt="Description" />
                <p>{descriptions.distanceMultiplier}</p>
              </div>
            )}
        </div>
        
        <div className = "input-container5">
          <input
          className="input"
          type="number"
          placeholder="Enter asymmetric multiplier"
          value={asymmetricMultiplier}
          onChange={(e) => setAsymmetricMultiplier(e.target.value)}
        />
        <FontAwesomeIcon
              icon={faQuestionCircle}
              className="question-mark"
              onClick={() => toggleDescription('asymmetricMultiplier')}
            />
            {showDescriptions.asymmetricMultiplier && (
              <div className="description-popup">
                <img src={images.asymmetricMultiplier} alt="Description" />
                <p>{descriptions.asymmetricMultiplier}</p>
              </div>
            )}
        </div>
        
        <div className = "input-container6">
          <input
          className="input"
          type="number"
          placeholder="Enter coupling multiplier"
          value={couplingMultiplier}
          onChange={(e) => setCouplingMultiplier(e.target.value)}
        />
        <FontAwesomeIcon
              icon={faQuestionCircle}
              className="question-mark"
              onClick={() => toggleDescription('couplingMultiplier')}
            />
            {showDescriptions.couplingMultiplier && (
              <div className="description-popup">
                <img src={images.couplingMultiplier} alt="Description" />
                <p>{descriptions.couplingMultiplier}</p>
              </div>
            )}
        </div>
        
        <button className="button" onClick={handleCalculate}>
          Calculate
        </button>
        <div className="result"></div>
      </div>
      <div className="additional-content">
        <div className="section">
          <h3 onClick={() => setActiveSection('summary')}>Summary</h3>
          {activeSection === 'summary' && (
            <>
              {(!horizontalMultiplier && !verticalMultiplier && !frequencyMultiplier && !distanceMultiplier && !asymmetricMultiplier && !couplingMultiplier) &&
                <p>Welcome to the calculator</p>
              }
              {/* Show input values after user starts inputting */}
              {horizontalMultiplier && (
                <p>Horizontal Multiplier: {horizontalMultiplier}</p>
              )}
              {verticalMultiplier && (
                <p>Vertical Multiplier: {verticalMultiplier}</p>
              )}
              {frequencyMultiplier && (
                <p>Frequency Multiplier: {frequencyMultiplier}</p>
              )}
              {distanceMultiplier && (
                <p>Distance Multiplier: {distanceMultiplier}</p>
              )}
              {asymmetricMultiplier && (
                <p>Asymmetric Multiplier: {asymmetricMultiplier}</p>
              )}
              {couplingMultiplier && (
                <p>Coupling Multiplier: {couplingMultiplier}</p>
              )}
              {/* Show calculated result after calculation */}
              {calculatedResult && (
                <p>Recommended Weight Limit (RWL): {calculatedResult} kg</p>
              )}
            </>
          )}
        </div>
        <div className="section">
          <h3 onClick={() => setActiveSection('analysis')}>Analysis</h3>
          {activeSection === 'analysis' && (
            <p>Girilecek</p>
          )}
        </div>
        <div className="section">
          <h3 onClick={() => setActiveSection('how-to')}>How</h3>
          {activeSection === 'how-to' && (
            <p>Girilecek</p>
          )}
        </div>
        <div className="section">
          <h3 onClick={() => setActiveSection('printout')}>Printout</h3>
          {activeSection === 'printout' && (
            <>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter your surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              <button onClick={generatePDF}>Generate PDF</button>
            </>
          )}
        </div>
      </div>
    </div>
    
  );
}

export default Frontend;
