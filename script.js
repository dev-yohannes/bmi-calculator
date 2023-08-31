const nameInput = document.querySelector("#name-input");
const heightInput = document.querySelector("#height-input");
const weightInput = document.querySelector("#weight-input");
const finalText = document.querySelector("#final-text-parent");
const calculateButton = document.querySelector("#calculate");
const bmiResultText = document.querySelector("#bmi-result-text");

function basicCalculation() {
  changingToMeter = heightInput.value / 100;
  calculating = weightInput.value / changingToMeter ** 2;

  rounded = Math.round(calculating);
  return rounded;
}

function matchingUpValues() {
  // basicCalculation();

  if (rounded < 18.5) {
    finalText = bmiFinalResult.innerText = "Underweight";
  } else if (rounded > 18.5 && rounded < 24.9) {
    finalText = bmiFinalResult.innerText = "Healty";
  } else if (rounded > 25 && rounded < 29.9) {
    finalText = bmiFinalResult.innerText = "Overweight";
  } else if (rounded > 30 && rounded < 34.9) {
    finalText = bmiFinalResult.innerText = "Class I Obesity";
  } else if (rounded > 35 && rounded < 39.9) {
    finalText = bmiFinalResult.innerText = "Class II Obesity";
  } else if (rounded > 40) {
    finalText = bmiFinalResult.innerText = "Class III Obesity";
  }

  // return finalText;
}

calculateButton.addEventListener("click", function () {
  bmiResultText.innerHTML = `Hey your BMI is ${basicCalculation()}, and you are ${matchingUpValues(
    basicCalculation()
  )}`;
  console.log(basicCalculation());
});
