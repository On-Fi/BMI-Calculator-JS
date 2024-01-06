document.addEventListener('DOMContentLoaded', function () {
    const ageInput = document.getElementById('age');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const calculateBtn = document.getElementById('calculateBtn');

    // Set focus on the age input when the page loads
    ageInput.focus();

    const resultContainer = document.getElementById('resultContainer');
    const bmiResult = document.getElementById('bmiResult');

    calculateBtn.addEventListener('click', function () {
        calculateBMI();
    });

    function calculateBMI() {
        const age = parseFloat(ageInput.value);
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(age) || isNaN(height) || isNaN(weight) || age <= 0 || height <= 0 || weight <= 0) {
            alert('Please enter valid age, height, and weight values.');
            return;
        }

        const bmi = calculateBMIValue(age, height, weight);
        displayResult(bmi);
    }

    function calculateBMIValue(age, height, weight) {
        // BMI formula: weight (kg) / (height (m) * height (m))
        const heightInMeters = height / 100;
        return (weight / (heightInMeters * heightInMeters)).toFixed(2);
    }

    function displayResult(bmi) {
        bmiResult.textContent = `Your BMI is: ${bmi}`;
        resultContainer.style.display = 'block';
    }
});
