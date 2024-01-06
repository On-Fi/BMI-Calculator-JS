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
    
        // Check if inputs are within valid ranges
        if (isNaN(age) || age < 16 || age > 99 || isNaN(height) || height < 100 || height > 220 || isNaN(weight) || weight < 50 || weight > 300) {
            alert('Please enter valid age (16-99), height (100cm-220cm), and weight (50cm-300kg) values.');
            return;
        }
    
        const bmi = calculateBMIValue(age, height, weight);
        displayResult(bmi);
    }

    function calculateBMIValue(age, height, weight) {
        // BMI formula: weight (kg) / (height (m) * height (m)
        const heightInMeters = height / 100;
        return (weight / (heightInMeters * heightInMeters)).toFixed(2);
    }

    function displayResult(bmi) {
        bmiResult.textContent = `${bmi}`;
    
        let resultText = '';
        if (bmi < 18.5) {
            resultText = 'Underweight (It would be good if you add some weight)';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            resultText = 'Normal Weight (Your weight is in a good place)';
        } else if (bmi >= 25.0 && bmi <= 29.9) {
            resultText = 'Overweight (Please take of your weight)';
        } else if (bmi >= 30.0 && bmi <= 34.9) {
            resultText = 'Obesity Class I (It would be good if you lose some weight)';
        } else if (bmi >= 35.0 && bmi <= 39.9) {
            resultText = 'Obesity Class II (It would be good if you lose some weight)';
        } else {
            resultText = 'Obesity Class III (It would be good if you lose some weight)';
        }
    
        bmiResult.textContent += ` ${resultText}`;
        resultContainer.style.display = 'block';
    }
});
