const nameInput = document.querySelector("#name-input");
const heightInput = document.querySelector("#height-input");
const weightInput = document.querySelector("#weight-input");
const finalText = document.querySelector("#final-text-parent");
const calculateButton = document.querySelector("#calculate");

const bmiFinalResult = document.createElement("p");
const finalMixedText = document.createElement("p");

function basicCalculation() {
  changingToMeter = heightInput.value / 100;

  calculating = weightInput.value / changingToMeter ** 2;
  rounding = Math.round(calculating);
}

function matchingUpValues() {
  basicCalculation();

  finalText = document.createElement("p");

  if (rounding < 18.5) {
    console.log("Under Weight");
    bmiFinalResult.innerText = "Underweight";
  } else if (rounding > 18.5 && rounding < 24.9) {
    console.log("Healty");
    bmiFinalResult.innerText = "Healty";
  } else if (rounding > 25 && rounding < 29.9) {
    console.log("Overweight");
    bmiFinalResult.innerText = "Overweight";
  } else if (rounding > 30 && rounding < 34.9) {
    console.log("Class I Obesity");
    bmiFinalResult.innerText = "Class I Obesity";
  } else if (rounding > 35 && rounding < 39.9) {
    console.log("Class II Obesity");
    bmiFinalResult.innerText = "Class II Obesity";
  } else {
    console.log("Class III Obesity");
    bmiFinalResult.innerText = "Class III Obesity";
  }

  return rounding;
}

calculateButton.addEventListener("click", function () {
  // bmiResultText.innerHTML = matchingUpValues();
  finalMixedText.innerText = `Your BMI is ${matchingUpValues()}`;

  finalText.append(bmiFinalResult);
  finalText.append(finalMixedText);
});
