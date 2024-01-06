function calculateBMI() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultContainer = document.getElementById('resultContainer');
    const bmiResult = document.getElementById('bmiResult');

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight values.');
        return;
    }

    const bmi = calculateBMIValue(height, weight);
    displayResult(bmi);
}

function calculateBMIValue(height, weight) {
    // BMI formula: weight (kg) / (height (m) * height (m))
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

function displayResult(bmi) {
    const resultContainer = document.getElementById('resultContainer');
    const bmiResult = document.getElementById('bmiResult');

    bmiResult.textContent = `Your BMI is: ${bmi}`;
    resultContainer.style.display = 'block';
}