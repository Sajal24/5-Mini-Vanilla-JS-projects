//chamoddenge
const generatedJoke = document.querySelector(".joke");
const generateBtn = document.querySelector(".btn");
const gotJoke = "";

generateBtn.addEventListener("click", () => {
  fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      generatedJoke.innerHTML = data.joke;
    });
});
