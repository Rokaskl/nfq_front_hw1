console.log("It got nothing to do with task, just some fun stuff");
var button = document.querySelector(".Button");
var pos = [
  "200px",
  "30px",
  "400px",
  "1000px",
  "600px",
  "800px",
  "1300px",
  "1500px"
];
var rnd = 1;
button.addEventListener("mouseover", () => {
  console.log("Better luck next time!");

  button.style.marginRight = pos[generateRnd()];
});
function generateRnd() {
  while (true) {
    var temprnd = Math.floor(Math.random() * 7);
    if (temprnd != rnd) {
      rnd = temprnd;
      return rnd;
    }
  }
}
button.addEventListener("click", () => {
  button.style.backgroundColor = "rgb(63, 236, 141)";
  console.log("CONGRATS you have defeated THE EVIL BUTTON!!! ");
});
