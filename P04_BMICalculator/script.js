const heightValue = document.getElementById("height");
const weightValue = document.getElementById("weight");
const generateBtn = document.querySelector(".btn");

generateBtn.addEventListener("click", () => {
  const result =
    weightValue.value / ((heightValue.value / 100) * (heightValue.value / 100));
  const n = result.toFixed(2);
  console.log(n);
});

//here the problem I'm getting is script is loading before the page loads
// happened when only <button></button> - getElementById("button")

//problem solved when <button class="btn"></button>- querySelector(".btn")
