let BtnRandom = document.getElementById("btnRandom");
let BtnRed = document.getElementById("btnRed");
let BtnBlue = document.getElementById("btnBlue");
let BtnGreen = document.getElementById("btnGreen");

function BtnRandomHendler() {
  let colors = ["crimson", "darkgreen", "darkblue"];
  let number = Math.floor(Math.random() * colors.length);

  let Body = document.querySelector("body");
  Body.style.backgroundColor = colors[number];

  console.log(colors[number]);
}
function BtnRedHendler() {
  let Body = document.querySelector("body");
  Body.style.backgroundColor = "crimson";
}
function BtnBlueHendler() {
  let Body = document.querySelector("body");
  Body.style.backgroundColor = "darkblue";
}
function BtnGreenHendler() {
  let Body = document.querySelector("body");
  Body.style.backgroundColor = "darkgreen";
}

BtnRandom.addEventListener("click", BtnRandomHendler);
BtnRed.addEventListener("click", BtnRedHendler);
BtnBlue.addEventListener("click", BtnBlueHendler);
BtnGreen.addEventListener("click", BtnGreenHendler);
