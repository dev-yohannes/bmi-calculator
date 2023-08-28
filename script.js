let nameInput = document.querySelector("#name-input");
let heightInput = document.querySelector("#height-input");
let weightInput = document.querySelector("#weight-input");
let finalText = document.querySelector("#final-text");
let calculateButton = document.querySelector("#calculate");

function calculatingHeightWeight() {
  calculating = weightInput.value / heightInput.value ** 2;
  return calculating;
}

calculateButton.addEventListener("click", function () {
  finalText.innerHTML = calculatingHeightWeight();
});
