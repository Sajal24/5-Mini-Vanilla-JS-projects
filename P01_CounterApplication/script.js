//by this project, we will learn how to use 2 basic things like the query selector and to add event listeners

//selecting elements with queryselector

const count = document.querySelector(".count");
const decrease = document.querySelector(".dec");
const reset = document.querySelector(".res");
const increase = document.querySelector(".inc");

//adding event listeners to change the count number with increase, decrease and reset buttons

decrease.addEventListener("click", () => {
  count.innerHTML--;
  changeColor();
});

increase.addEventListener("click", () => {
  count.innerHTML++;
  changeColor();
});

reset.addEventListener("click", () => {
  count.innerHTML = 0;
  changeColor();
});

//function to change the color of the count number

function changeColor() {
  if (count.innerHTML < 0) {
    count.style.color = "red";
  } else if (count.innerHTML > 0) {
    count.style.color = "white";
  } else {
    count.style.color = "yellow";
  }
}
