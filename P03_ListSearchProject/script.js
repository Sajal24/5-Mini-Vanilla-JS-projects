//taking in the input and storing it in a variable

const searchedCourse = document.querySelector(".search");
const listItems = document.querySelectorAll("ul");

searchedCourse.addEventListener("keyup", () => {
  var sValue = searchedCourse.value;

  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].innerHTML.toLowerCase().includes(sValue)) {
      listItems[i].style.display = "";
    } else {
      listItems[i].style.display = "none";
    }
  }
});
