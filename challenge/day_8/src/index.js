const chooseForm = document.querySelector("#chooseForm");
const rangeForm = document.querySelector("#rangeNumber");
const guessForm = document.querySelector("#guessNumber");
const result = document.querySelector(".result");
const noticeNumber = document.querySelector("#noticeNumber");
const gameResult = document.querySelector("#gameResult");


function randomGame(event) {
  event.preventDefault();
  const rangeInput = parseInt(rangeForm.value);
  const guessInput = parseInt(guessForm.value);
  if (result.classList.contains("hide")) {
    result.classList.remove("hide");
  }
  const randomNumber = Math.floor(Math.random() * (rangeInput + 1));
  if (randomNumber === guessInput) {
    noticeNumber.innerText = `You chose: ${guessInput},the machine chose: ${randomNumber}.`;
    gameResult.innerText = "You won!"
  }
  else{
    noticeNumber.innerText = `You chose: ${guessInput},the machine chose: ${randomNumber}.`;
    gameResult.innerText = "You lost!"
  }
}

chooseForm.addEventListener("submit", randomGame);
