let nameInput = document.querySelector("#name-input");
let heightInput = document.querySelector("#height-input");
let weightInput = document.querySelector("#weight-input");
let finalText = document.querySelector("#final-text");
let calculateButton = document.querySelector("#calculate");

function basicCalculation() {
  changingToMeter = heightInput.value / 100;

  calculating = weightInput.value / changingToMeter ** 2;
  rounding = Math.round(calculating);
}

function matchingUpValues() {
  basicCalculation();
  if (rounding < 18.5) {
    console.log("Under Weight");
  } else if (rounding > 18.5 && rounding < 24.9) {
    console.log("Healty");
  } else if (rounding > 25 && rounding < 29.9) {
    console.log("Overweight");
  } else if (rounding > 30 && rounding < 34.9) {
    console.log("Class I Obesity");
  } else if (rounding > 35 && rounding < 39.9) {
    console.log("Class II Obesity");
  } else {
    console.log("Class III Obesity");
  }

  return rounding;
}

calculateButton.addEventListener("click", function () {
  finalText.innerHTML = matchingUpValues();
});
