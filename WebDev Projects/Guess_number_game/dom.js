"use strict";

//get classes and ids
const score = document.querySelector(".score");
const checkBtn = document.querySelector("#checkBtn");
const message = document.querySelector("#msg");
const wrapper = document.querySelector(".wrapper");
const home = document.querySelector("#modal-home");
const result = document.querySelector("#modal-result");
const replay = document.querySelector("#replay");
const data = document.querySelector("#data");

//event listner
checkBtn.addEventListener("click", checker);
home.addEventListener("click", play);
replay.addEventListener("click", restartGame);

//random number for checking
let ranNumber = Math.trunc(Math.random() * 11);
console.log(ranNumber);

//set value for score default chance = 5
let chance = 5;
score.textContent = chance;

//functions
function play() {
  home.classList.remove("home");
}

function checker() {
  const data = Number(document.querySelector("#data").value);
  console.log(typeof data, data);

  if (!data) {
    handleNoData();
  } else if (data > 20) {
    handleLargeNumberThan20();
  } else if (data === ranNumber) {
    winner();
  } else if (data > ranNumber) {
    tooHigh();
  } else if (data < ranNumber) {
    tooLow();
  }
}

function handleLargeNumberThan20() {
  message.textContent = "Data Must Be Between 1 and 10";
  result.style.backgroundColor = "red";
  setTimeout(() => {
    message.textContent = "!!RESULT!!";
    result.style.backgroundColor = "black";
    data.value = "";
  }, 800);
}
function handleNoData() {
  message.textContent = "Enter a Number";
  result.style.backgroundColor = "red";
  setTimeout(() => {
    message.textContent = "!!RESULT!!";
    result.style.backgroundColor = "black";
    data.value = "";
  }, 800);
}

function winner() {
  message.textContent = "Winner!!";
  result.style.backgroundColor = "green";
  checkBtn.classList.add("btn-replay");
  replay.classList.remove("btn-replay");
}

function tooLow() {
  if (chance > 1) {
    message.textContent = "JUST BELOW !!";
    result.style.backgroundColor = "orange";
    chance--;
    score.textContent = chance;
  } else {
    gameOver();
  }
}

function tooHigh() {
  if (chance > 1) {
    message.textContent = "JUST ABOVE !!";
    result.style.backgroundColor = "orange";
    chance--;
    score.textContent = chance;
  } else {
    gameOver();
  }
}

function restartGame() {
  score.textContent = 5;
  message.textContent = "!!RESULT!!";
  result.style.backgroundColor = "black";
  data.value = "";
  checkBtn.classList.remove("btn-replay");
  replay.classList.add("btn-replay");
}

function gameOver() {
  message.textContent = "GAME OVER!!";
  score.textContent = 0;
  result.style.backgroundColor = "red";
  checkBtn.classList.add("btn-replay");
  replay.classList.remove("btn-replay");
}
