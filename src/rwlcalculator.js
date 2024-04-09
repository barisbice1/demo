// LiftCalculator.js

// Constants for NIOSH lifting equation parameters
const HORIZONTAL_MULTIPLIER = 0.75;
const VERTICAL_MULTIPLIER = 10;
const FREQUENCY_MULTIPLIER = 0.03;
const DISTANCE_MULTIPLIER = 0.25;
const ASYMMETRIC_MULTIPLIER = 0.2;
const COUPLING_MULTIPLIER = 0.35;

// Function to calculate the Recommended Weight Limit (RWL)
function calculateRWL(horizontal, vertical, frequency, distance, asymmetric, coupling) {
    // Calculate the lifting index (LI)
    const LI = (
        (horizontal / HORIZONTAL_MULTIPLIER) +
        (vertical / VERTICAL_MULTIPLIER) +
        (frequency / FREQUENCY_MULTIPLIER) +
        (distance / DISTANCE_MULTIPLIER) +
        (asymmetric / ASYMMETRIC_MULTIPLIER) +
        (coupling / COUPLING_MULTIPLIER)
    );

    // Calculate the Recommended Weight Limit (RWL)
    const RWL = 23 / (Math.pow(LI, 0.61));

    return RWL;
}

export { calculateRWL };
