const heightValue = document.getElementById("height");
const weightValue = document.getElementById("weight");
const generateBtn = document.getElementById("button");

generateBtn.addEventListener("click", () => {
  const result =
    weightValue.value / ((heightValue.value / 100) * (heightValue.value / 100));
  console.log(heightValue.value);
  console.log(result);
});

//here the problem I'm getting is script is loading before the page loads
