let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guessesSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let playGame = true;
prevGuesses = [];
noOfGuesses = 0;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateField(guess);
  });
}

function validateField(guess) {
  if (guessField == "") {
    alert(` enter a number`);
  } else if (isNaN(guess)) {
    alert("Enter any number ");
  } else if (guessField < 1 || guessField > 100) {
    alert("Enter number between 1 and 100");
  } else {
    prevGuesses.push(guess);
    if (noOfGuesses === 9) {
      displayGuessInfo(guess);
      message(`Game over , Random number was ${randomNumber}..`);
      endGame();
    } else {
      displayGuessInfo(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (randomNumber === guess) {
    message(`${guess} You guessed right`);
    endGame();
  } else if (guess < randomNumber) {
    message(`guess is too low`);
  } else if (guess > randomNumber) {
    message(`guess is too high`);
  }
}

function displayGuessInfo(guess) {
  userInput.value = "";
  guessesSlot.innerHTML += `${guess}, `;
  noOfGuesses++;
  remaining.innerHTML = `${10 - noOfGuesses}`;
}

function message(message) {
  lowOrHi.innerHTML = `<p>${message}</p>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuesses = [];
    noOfGuesses = 1;
    guessesSlot.innerHTML = "";
    remaining.innerHTML = `${10 - noOfGuesses} `;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
