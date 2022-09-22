//taking in the input and storing it in a variable

const searchedCourse = document.querySelector(".search");

searchedCourse.addEventListener("change", () => {
  const term = searchedCourse.value;
  console.log(term);
});
