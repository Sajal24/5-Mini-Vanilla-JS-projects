const heightValue = document.getElementById("height");
const weightValue = document.getElementById("weight");
const generateBtn = document.querySelector(".btn");
const resultDisplayed = document.querySelector(".result");

generateBtn.addEventListener("click", () => {
  if (heightValue.value > 0 && weightValue.value > 0) {
    const result =
      weightValue.value /
      ((heightValue.value / 100) * (heightValue.value / 100));
    const n = result.toFixed(2);
    // resultDisplayed.innerHTML = n;

    if (n < 18.5) {
      resultDisplayed.innerHTML = n + " ~  Underweight";
      resultDisplayed.style.color = "yellow";
    } else if (n >= 18.5 && n <= 24.99) {
      resultDisplayed.innerHTML = n + " ~  Normal";
      resultDisplayed.style.color = "green";
    } else if (n >= 25.0 && n <= 29.99) {
      resultDisplayed.innerHTML = n + " ~  Overweight";
      resultDisplayed.style.color = "brown";
    } else if (n >= 30) {
      resultDisplayed.innerHTML = n + " ~  Obese";
      resultDisplayed.style.color = "red";
    }
  } else {
    resultDisplayed.innerHTML = "Enter valid values";
    resultDisplayed.style.color = "red";
  }
});

//here the problem I'm getting is script is loading before the page loads
// happened when only <button></button> - getElementById("button")

//problem solved when <button class="btn"></button>- querySelector(".btn")

// here if I put return keyword infront of my resultDisplayed arguments, i get the same result, so what's the use of return here
