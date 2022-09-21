// taking in the input for min and max range numbers

const generate = document.querySelector(".btn");

generate.addEventListener("click", () => {
  const minimum = document.getElementById("min").value;
  console.log(minimum);
  const maximum = document.getElementById("max").value;
  console.log(maximum);

  const a = Math.floor(Math.random() * (maximum - minimum));
  const b = a + Number(minimum);

  document.querySelector(".generated").innerHTML = b;
});
