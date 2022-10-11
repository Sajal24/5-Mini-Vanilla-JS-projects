//chamoddenge
const generatedJoke = document.querySelector(".joke");
const generateBtn = document.querySelector(".btn");
const gotJoke = "";

generateBtn.addEventListener("click", () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      generatedJoke.innerHTML = data.value;
    });
});
