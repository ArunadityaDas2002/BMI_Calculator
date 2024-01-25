// const heights = document.getElementById("height");
// const weights = document.getElementById("weight");
// const results = document.getElementById("result");
// const buttons = document.getElementById("button");

// var new_height = heights.innerHTML/100;
// var calculated_res = weights.innerHTML / (new_height*new_height);

// buttons.addEventListener("click",function()
// {
//     results.innerHTML = calculated_res;
// })
const heights = document.getElementById("height");
const weights = document.getElementById("weight");
const results = document.getElementById("result");
const button = document.getElementById("button");

button.addEventListener("click", function() {
    // Get the values from the input fields
    var heightValue = parseFloat(heights.value); // Use parseFloat to convert string to number
    var weightValue = parseFloat(weights.value);

    // Check if height and weight are provided
    if (isNaN(heightValue) || isNaN(weightValue)) {
        alert('Please enter valid height and weight.');
        return;
    }

    // Calculate BMI
    var new_height = heightValue / 100;
    var calculated_res = weightValue / (new_height * new_height);

    // Display the result
    results.innerHTML = 'Your BMI is: ' + calculated_res.toFixed(2);
    if (calculated_res < 18.5) {
        results.innerHTML += '<br>Category: Underweight';
    } else if (calculated_res >= 18.5 && calculated_res <= 24.9) {
        results.innerHTML += '<br>Category: Normal weight';
    } else if (calculated_res >= 25 && calculated_res <= 29.9) {
        results.innerHTML += '<br>Category: Overweight';
    } else if (calculated_res >= 30 && calculated_res <= 34.9) {
        results.innerHTML += '<br>Category: Obesity Class I (Moderate)';
    } else if (calculated_res >= 35 && calculated_res <= 39.9) {
        results.innerHTML += '<br>Category: Obesity Class II (Severe)';
    } else {
        results.innerHTML += '<br>Category: Obesity Class III (Very Severe or Morbid Obesity)';
    }

    // You can add more logic here to categorize BMI into underweight, normal, overweight, etc.
});
