const sneakers = document.querySelector(".astral");
const selecetedShoes = document.querySelectorAll(".selecetedShoes");
const minus = document.querySelector(".minus");
const result = document.querySelector(".number");
const plus = document.querySelector(".plus");
// let list = document.c(".image");
let orderNumber = 0;
function handleSelectedShoes() {
  let src = this.getAttribute("src");
  sneakers.src = src;

  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
}
function add() {
  result.innerHTML = ++orderNumber;
}

function subtract() {
  result.innerHTML = --orderNumber;
}

for (let i = 0; i < selecetedShoes.length; i++) {
  selecetedShoes[i].addEventListener("click", handleSelectedShoes);
}
plus.addEventListener("click", add);
minus.addEventListener("click", subtract);
