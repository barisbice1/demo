/* eslint-disable no-template-curly-in-string */
import React, { useState, useRef,/*  useEffect */ } from 'react';
import './style.css'; // Import the CSS file
/* import Navbar from './Navbar'; // Import the Navbar component */
import jsPDF from 'jspdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

function Frontend() {
  // State variables to store input values
  const [horizontalMultiplier, setHorizontalMultiplier] = useState('');
  const [verticalMultiplier, setVerticalMultiplier] = useState('');
  const [frequencyMultiplierLifts, setFrequencyMultiplierLifts] = useState('');
  const [frequencyMultiplierHours, setFrequencyMultiplierHours] = useState('');
  const [frequencyMultiplierDuration, setFrequencyMultiplierDuration] = useState('');
  const [distanceMultiplier, setDistanceMultiplier] = useState('');
  const [asymmetricMultiplier, setAsymmetricMultiplier] = useState('');
  const [couplingMultiplier, setCouplingMultiplier] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [showCouplingTextbox, setShowCouplinhgTextbox] = useState(false);
  const [showGroup2, setShowGroup2] = useState(false);
  const [showGroup3, setShowGroup3] = useState(false);
  const [showGroup4, setShowGroup4] = useState(false);
  const [showGroup5, setShowGroup5] = useState(false);
  const [showGroup6, setShowGroup6] = useState(false);
  const [showVerticalWarning, setShowVerticalWarning] = useState(false);
  const [couplingQuality, setCouplingQuality] = useState('');

  const [showDescriptions, setShowDescriptions] = useState({
    horizontalMultiplier: false,
    verticalMultiplier: false,
    frequencyMultiplier: false,
    distanceMultiplier: false,
    asymmetricMultiplier: false,
    couplingMultiplier: false,
  });
  const horizontalMultiplierRef = useRef(null);
  const verticalMultiplierRef = useRef(null);
  const frequencyMultiplierRef1 = useRef(null);
  const frequencyMultiplierRef2 = useRef(null);
  const frequencyMultiplierRef3 = useRef(null);
  const distanceMultiplierRef = useRef(null);
  const asymmetricMultiplierRef = useRef(null);
  const couplingMultiplierRef = useRef(null);
  const nameRef = useRef(null);
  const surnameRef = useRef(null);

  const handleKeyPress = (event, nextRef) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      nextRef?.current?.focus();
    }
  };

  /* const buttonRefs = useRef([]);
  const descriptionPopupRefs = useRef([]);

  useEffect(() => {
    const positionDescriptionPopup = (popupNumber) => {
      const buttonRect = buttonRefs.current[popupNumber].getBoundingClientRect();
      const descriptionPopupRect = descriptionPopupRefs.current[popupNumber].getBoundingClientRect();

      // Position the description popup relative to the button
      descriptionPopupRefs.current[popupNumber].style.top = `${buttonRect.bottom}px`;
      descriptionPopupRefs.current[popupNumber].style.left = `${buttonRect.left}px`;
    };

    const handleResize = () => {
      Object.keys(showDescriptions).forEach((popupNumber) => {
        if (showDescriptions[popupNumber]) {
          positionDescriptionPopup(popupNumber);
        }
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showDescriptions]); */

  const couplingCalculator = (couplingType, verticalMultiplier) => {
    if (verticalMultiplier === '') {
      if (showVerticalWarning === false) {
        setShowVerticalWarning(true);
      }
    }
    else {
      if (showVerticalWarning === true) {
        setShowVerticalWarning(false);
      }

      switch (couplingType) {
        case 'poor': {
          setCouplingQuality('POOR');
          setCouplingMultiplier(0.90);
          break;
        }
        case 'fair': {
          setCouplingQuality('FAIR');
          if (verticalMultiplier < 75) {
            setCouplingMultiplier(0.95);
          }
          else {
            setCouplingMultiplier(1.00);
          }
          break;
        }
        case 'good': {
          setCouplingQuality('GOOD');
          setCouplingMultiplier(1.00);
          break;
        }
        default:
          setCouplingMultiplier(0, 90);

      }
      if (showCouplingTextbox === false) {
        setShowCouplinhgTextbox(true);
      }
    }

  }


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
    doc.text(`Frequency Multiplier: ${frequencyMultiplierLifts}`, 10, 40);
    doc.text(`Frequency Multiplier: ${frequencyMultiplierHours}`, 10, 40);
    doc.text(`Frequency Multiplier: ${frequencyMultiplierDuration}`, 10, 40);
    doc.text(`Distance Multiplier: ${distanceMultiplier}`, 10, 50);
    doc.text(`Asymmetric Multiplier: ${asymmetricMultiplier}`, 10, 60);
    doc.text(`Coupling Multiplier: ${couplingMultiplier}`, 10, 70);

    doc.text(`Recommended Weight Limit (RWL): ${calculatedResult} kg`, 10, 90);
    doc.text(`Name: ${name} ${surname}`, 10, 100);
    doc.save('niosh_calculator.pdf');
  };

  const descriptions = {
    horizontalMultiplier: 'Description for horizontal multiplier.',
    verticalMultiplier: 'Description for vertical multiplier.',
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
        <img className="calc-photo" src="./nioshadam.jpeg" alt="NIOSH calculator"></img>

        <div className='desc-title'>
          <p className="input-label">Horizontal         <FontAwesomeIcon
            icon={faQuestionCircle}
            className="question-mark"
            onMouseEnter={() => toggleDescription('horizontalMultiplier')}
            onMouseLeave={() => toggleDescription('horizontalMultiplier')}
          /></p>
          {showDescriptions.horizontalMultiplier && (
            <div className="description-popup">
              <img src={images.horizontalMultiplier} alt="Description" />
              <p>{descriptions.horizontalMultiplier}</p>
            </div>
          )}
        </div>
        <div className="input-container">
          <input
            ref={horizontalMultiplierRef}
            className="input"
            type="number"
            /* placeholder="Enter horizontal multiplier" */
            value={horizontalMultiplier}
            onChange={(e) => setHorizontalMultiplier(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e, verticalMultiplierRef)}
          />
        </div>

        <div className='desc-title'>
          <p className="input-label">Vertical           <FontAwesomeIcon
            icon={faQuestionCircle}
            className="question-mark"
            onMouseEnter={() => toggleDescription('verticalMultiplier')}
            onMouseLeave={() => toggleDescription('verticalMultiplier')}
          /></p>
          {showDescriptions.verticalMultiplier && (
            <div className="description-popup">
              <img src={images.verticalMultiplier} alt="Description" />
              <p>{descriptions.verticalMultiplier}</p>
            </div>
          )}
        </div>
        <div className="input-container">
          <input
            ref={verticalMultiplierRef}
            className="input"
            type="number"
            /* placeholder="Enter vertical multiplier" */
            value={verticalMultiplier}
            onChange={(e) => setVerticalMultiplier(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e, frequencyMultiplierRef1)}
          />
        </div>

        <div className='desc-title'>
          <p className="input-label">Frequency           <FontAwesomeIcon
            icon={faQuestionCircle}
            className="question-mark"
            onMouseEnter={() => toggleDescription('frequencyMultiplier')}
            onMouseLeave={() => toggleDescription('frequencyMultiplier')}
          /></p>
          {showDescriptions.frequencyMultiplier && (
            <div className="description-popup">
              <img src={images.frequencyMultiplier} alt="Description" />
              <p>{descriptions.frequencyMultiplier}</p>
            </div>
          )}
        </div>
   
        <div className="input-container">
          <div className='freq-input-container'>
          <p className='freq-input-label'>Lifts (per min.)</p>
            <input
              ref={frequencyMultiplierRef1}
              className="input input-small"
              type="number"
              /* placeholder="Enter frequency multiplier" */
              value={frequencyMultiplierLifts}
              onChange={(e) => setFrequencyMultiplierLifts(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e, frequencyMultiplierRef2)}
            />
            
          </div>
          <p>-</p>
 

    
          <div className='freq-input-container'>
          <p className='freq-input-label'>Duration(hour(s))</p>
            <input
              ref={frequencyMultiplierRef3}
              className="input input-small"
              type="number"
              /* placeholder="Enter frequency multiplier" */
              value={frequencyMultiplierDuration}
              onChange={(e) => setFrequencyMultiplierDuration(e.target.value)}
              onKeyDown={(e) => handleKeyPress(e, frequencyMultiplierRef3)}
            />
           
          </div>
        </div>

        <div className='desc-title'>
          <p className="input-label">Distance           <FontAwesomeIcon
            icon={faQuestionCircle}
            className="question-mark"
            onMouseEnter={() => toggleDescription('distanceMultiplier')}
            onMouseLeave={() => toggleDescription('distanceMultiplier')}
          /></p>
          {showDescriptions.distanceMultiplier && (
            <div className="description-popup">
              <img src={images.distanceMultiplier} alt="Description" />
              <p>{descriptions.distanceMultiplier}</p>
            </div>
          )}
        </div>
        <div className="input-container">
          <input
            ref={distanceMultiplierRef}
            className="input"
            type="number"
            /* placeholder="Enter distance multiplier" */
            value={distanceMultiplier}
            onChange={(e) => setDistanceMultiplier(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e, asymmetricMultiplierRef)}
          />
        </div>

        <div className='desc-title'>
          <p className="input-label">Asymmetric           <FontAwesomeIcon
            icon={faQuestionCircle}
            className="question-mark"
            onMouseEnter={() => toggleDescription('asymmetricMultiplier')}
            onMouseLeave={() => toggleDescription('asymmetricMultiplier')}
          /></p>
          {showDescriptions.asymmetricMultiplier && (
            <div className="description-popup">
              <img src={images.asymmetricMultiplier} alt="Description" />
              <p>{descriptions.asymmetricMultiplier}</p>
            </div>
          )}
        </div>
        <div className="input-container">
          <input
            ref={asymmetricMultiplierRef}
            className="input"
            type="number"
            /* placeholder="Enter asymmetric multiplier" */
            value={asymmetricMultiplier}
            onChange={(e) => setAsymmetricMultiplier(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e, couplingMultiplierRef)}
          />
        </div>

        <div className='desc-title'>
          <p className="input-label">Coupling             <FontAwesomeIcon
            icon={faQuestionCircle}
            className="question-mark"
            onMouseEnter={() => toggleDescription('couplingMultiplier')}
            onMouseLeave={() => toggleDescription('couplingMultiplier')}
          />
          </p>
          {showDescriptions.couplingMultiplier && (
            <div className="description-popup">
              <img src={images.couplingMultiplier} alt="Description" />
              <p>{descriptions.couplingMultiplier}</p>
            </div>
          )}
        </div>

        <div className="coupling-decide-group" id="group1">
          <div className="coupling-decide">
            <input type="radio"
              className="coupling-radio"
              id="container"
              name="object-type"
              value="container"
              ref={couplingMultiplierRef}
            />
            <label for="container"
              className="radio-label"
              onClick={() => {
                if (showGroup2 === false) {
                  setShowGroup2(true);
                }
                if (showGroup4 === true) {
                  setShowGroup4(false);
                }
                if (showGroup5 === true) {
                  setShowGroup5(false);
                }
                if (showGroup6 === true) {
                  setShowGroup6(false);
                }
              }
              }>Container</label>
          </div>
          <div className="coupling-decide">
            <input type="radio"
              className="coupling-radio"
              id="loose-object"
              name="object-type"
              value="loose-object"
            />
            <label for="loose-object"
              className="radio-label"
              onClick={() => {
                if (showGroup4 === false) {
                  setShowGroup4(true);
                }
                if (showGroup2 === true) {
                  setShowGroup2(false);
                }
                if (showGroup3 === true) {
                  setShowGroup3(false);
                }
                if (showGroup6 === true) {
                  setShowGroup6(false);
                }
              }
              }>Loose Object</label>
          </div>
        </div>

        {showGroup2 &&
          <div className="coupling-decide-group" id="group2">
            <div className="coupling-decide">
              <input type="radio"
                className="coupling-radio"
                id="optimal-container"
                name="container-optimal"
                value="optimal-container"
              />
              <label for="optimal-container"
                className="radio-label"
                onClick={() => {
                  if (showGroup3 === false) {
                    setShowGroup3(true)
                  }
                }
                }>Container Is Optimal</label>
            </div>
            <div className="coupling-decide">
              <input type="radio"
                className="coupling-radio"
                id="unoptimal-container"
                name="container-optimal"
                value="unoptimal-container"
              />
              <label for="unoptimal-container"
                className="radio-label"
                onClick={() => {
                  if (showGroup3 === true) {
                    setShowGroup3(false);
                  }
                  if (showGroup6 === true) {
                    setShowGroup6(false);
                  }
                  if (showGroup3 === false) {
                    couplingCalculator('poor', verticalMultiplier);
                  }
                }
                }>Container Is Not Optimal</label>
            </div>
          </div>
        }

        {showGroup3 && showGroup2 &&
          <div className="coupling-decide-group" id="group3">
            <div className="coupling-decide">
              <input type="radio"
                className="coupling-radio"
                id="optimal-handles"
                name="handles-optimal"
                value="optimal-handles"
              />
              <label for="optimal-handles"
                className="radio-label"
                onClick={() => {
                  if (showGroup6 === true) {
                    setShowGroup6(false);
                  }
                  if (showGroup6 === false) {
                    couplingCalculator('good', verticalMultiplier)
                  }
                }
                }>Handles Are Optimal</label>
            </div>
            <div className="coupling-decide">
              <input type="radio"
                className="coupling-radio"
                id="unoptimal-handles"
                name="handles-optimal"
                value="unoptimal-handles"
              />
              <label for="unoptimal-handles"
                className="radio-label"
                onClick={() => {
                  if (showGroup6 === false) {
                    setShowGroup6(true)
                  }
                }
                } >Handles Are Not Optimal</label>
            </div>
          </div>
        }

        {showGroup4 &&
          <div className="coupling-decide-group" id="group4">
            <div className="coupling-decide">
              <input type="radio"
                className="coupling-radio"
                id="bulky-object"
                name="object-bulky"
                value="bulky-object"
              />
              <label for="bulky-object"
                className="radio-label"
                onClick={() => {
                  if (showGroup5 === true) {
                    setShowGroup5(false);
                  }
                  if (showGroup6 === true) {
                    setShowGroup6(false);
                  }
                  if (showGroup5 === false) {
                    couplingCalculator('poor', verticalMultiplier);
                  }
                }
                } >Object Is Bulky</label>
            </div>
            <div className="coupling-decide">
              <input type="radio"
                className="coupling-radio"
                id="non-bulky-object"
                name="object-bulky"
                value="non-bulky-object"
              />
              <label for="non-bulky-object"
                className="radio-label"
                onClick={() => {
                  if (showGroup5 === false) {
                    setShowGroup5(true);
                  }
                }
                } >Object Is Not Bulky</label>
            </div>
          </div>
        }

        {showGroup5 && showGroup4 &&
          <div className="coupling-decide-group" id="group5">
            <div className="coupling-decide">
              <input type="radio"
                className="coupling-radio"
                id="optimal-grip"
                name="grip-optimal"
                value="optimal-grip"
              />
              <label for="optimal-grip"
                className="radio-label"
                onClick={() => {
                  if (showGroup6 === true) {
                    setShowGroup6(false);
                  }
                  if (showGroup5 === true) {
                    couplingCalculator('good', verticalMultiplier)
                  }
                }
                } >Grip Is Optimal</label>
            </div>
            <div className="coupling-decide">
              <input type="radio"
                className="coupling-radio"
                id="non-optimal-grip"
                name="grip-optimal"
                value="non-optimal-grip"
              />
              <label for="non-optimal-grip"
                className="radio-label"
                onClick={() => {
                  if (showGroup6 === false) {
                    setShowGroup6(true)
                  }
                }
                } >Grip Is Not Optimal</label>
            </div>
          </div>
        }
        {showGroup6 && (showGroup3 || showGroup5) &&
          <div className="coupling-decide-group" id="group6">
            <div className="coupling-decide">
              <input type="radio"
                className="coupling-radio"
                id="fingers-flexed"
                name="fingers-flex"
                value="fingers-flexed"
              />
              <label for="fingers-flexed"
                className="radio-label"
                onClick={() => {
                  if (showGroup6 === true) {
                    couplingCalculator('fair', verticalMultiplier)
                  }
                }
                } >Fingers Are Flexed 90 Degrees</label>
            </div>
            <div className="coupling-decide">
              <input type="radio"
                className="coupling-radio"
                id="fingers-not-flexed"
                name="fingers-flex"
                value="fingers-not-flexed"
              />
              <label for="fingers-not-flexed"
                className="radio-label"
                onClick={() => {
                  if (showGroup6 === true) {
                    couplingCalculator('poor', verticalMultiplier)
                  }
                }
                } >Fingers Are Not Flexed 90 Degrees</label>
            </div>
          </div>
        }

        {showVerticalWarning && <p className='common-warning'>Please fill Vertical Multiplier section for calculation of Coupling Multiplier.</p>}

        {couplingQuality && <p className='common-warning'>Coupling Quality: {couplingQuality}</p>}

        {showCouplingTextbox &&
          <div className="input-container">
            <input
              className="input"
              type="text"
              value={couplingMultiplier}
              readOnly
            />

          </div>
        }

        <button className="button" onClick={handleCalculate}>
          Calculate
        </button>

        <div className="result"></div>

      </div>

      <div className="additional-content">
        <div className="ac-titles">
          <h3 className={`ac-label ${activeSection === 'summary' ? 'active' : ''}`} onClick={() => setActiveSection('summary')}>Summary</h3>
          <h3 className={`ac-label ${activeSection === 'analysis' ? 'active' : ''}`} onClick={() => setActiveSection('analysis')}>Analysis</h3>
          <h3 className={`ac-label ${activeSection === 'how-to' ? 'active' : ''}`} onClick={() => setActiveSection('how-to')}>How To</h3>
          <h3 className={`ac-label ${activeSection === 'printout' ? 'active' : ''}`} onClick={() => setActiveSection('printout')}>Print Out</h3>
        </div>

        {activeSection === 'summary' && (
          <div className="section-summary">
            {(!horizontalMultiplier && !verticalMultiplier && !frequencyMultiplierLifts && !frequencyMultiplierHours && !distanceMultiplier && !asymmetricMultiplier && !couplingMultiplier) &&
              <p>Welcome to the calculator</p>
            }
            {horizontalMultiplier && (
              <p>Horizontal Multiplier: {horizontalMultiplier}</p>
            )}
            {verticalMultiplier && (
              <p>Vertical Multiplier: {verticalMultiplier}</p>
            )}
            {frequencyMultiplierLifts && (
              <p>Frequency Multiplier: {frequencyMultiplierLifts}</p>
            )}
            {frequencyMultiplierHours && (
              <p>Frequency Multiplier: {frequencyMultiplierHours}</p>
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
          </div>
        )}

        {activeSection === 'analysis' && (
          <div className="section-analysis">
            {(!horizontalMultiplier && !verticalMultiplier && !frequencyMultiplierLifts && !frequencyMultiplierHours && !distanceMultiplier && !asymmetricMultiplier && !couplingMultiplier) &&
              <p></p>
            }
        {/* Implementing logic for horizontal distance */}
        {horizontalMultiplier > 63 && (
          <p>You should focus on lowering the horizontal distance under 63 cm in order to get better results.</p>
        )}
        {horizontalMultiplier >= 25 && horizontalMultiplier <= 63 && (
          <p>Please note that if your value is near 25, you'll get better results.</p>
        )}
        {horizontalMultiplier < 25 && (
          <p>You are in the perfect range. Horizontal Multiplier is equal to 1.</p>
        )}
       
        {verticalMultiplier > 175 && (
          <p>This is more than the upper limit. You should get the product lower than 175 cm. </p>
        )}
        {verticalMultiplier != 75 && verticalMultiplier < 175 && verticalMultiplier != 0 && (
          <p>If you want a perfect range, the vertical value should be 75 cm.</p>
        )}
        {verticalMultiplier == 75 && (
          <p>You are in the ideal vertical position.</p>
        )}
           {verticalMultiplier == 0 && (
          <p>You entered a value 0 cm. Keeping the load closer to 75 centimeters is beneficial for the worker’s body. </p>
        )}
            {frequencyMultiplierLifts && (
              <p>You have entered: {frequencyMultiplierLifts} for the frequency multiplier. The optimal value was 19.</p>
            )}
            {frequencyMultiplierHours && (
              <p>You have entered: {frequencyMultiplierDuration} for the frequency multiplier. The optimal value was 19.</p>
            )}
        {distanceMultiplier > 175 && (
          <p>You’re lifting the product above the upper limit 175 cm. This range is harmful to your body. Try to lower the lifting distance. </p>
        )}
        {distanceMultiplier < 25  && (
          <p>You entered the value under 25 cm. Value of the DM is equal to 1, which is optimal.</p>
        )}
        {distanceMultiplier >= 25 && distanceMultiplier < 175 &&(
          <p>· You entered the value between 25 and 175. Please keep in mind that if the lifting distance is closer to 175 cm, it is ergonomically dangerous. It is better if the distance is closer to 25 cm.</p>
        )}
  
  {asymmetricMultiplier > 135 && (
          <p>You entered a value bigger than 135 for the assymetrical degree, that means AM is equal to 0, and the angle between pick-up and release process poses ergonomic risks. Process  angle requires improvement.</p>
        )}
        {asymmetricMultiplier > 0 && asymmetricMultiplier <= 135  && (
          <p>Angle is not too bad, but not great either. if you want a better value, you should decrease the angle between pick-up and release process.</p>
        )}
        {asymmetricMultiplier == 0 && (
          <p>This is the optimal value.</p>
        )}
            {couplingMultiplier && (
              <p>Your coupling multiplier was: {couplingMultiplier} the optimal would be 1.00</p>
            )}
            {/* Show calculated result after calculation */}
            {calculatedResult && (
              <p>Recommended Weight Limit (RWL): {calculatedResult} kg </p>


            )}
            {calculatedResult && (
              <p>Please see how you can improve these numbers on how-to part.</p>


            )}



          </div>
        )}

        {activeSection === 'how-to' && (
          <div className="section-howto">
            <p>Girilecek</p>
          </div>
        )}

        {activeSection === 'printout' && (
          <div className="section-printout">
            <input className="prinput"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input className="prinput"
              type="text"
              placeholder="Enter your surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <button onClick={generatePDF}>Generate PDF</button>
          </div>
        )}

      </div>
    </div>

  );
}

export default Frontend;