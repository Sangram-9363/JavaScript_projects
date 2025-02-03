let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#last-Message");
const userScorePara = document.querySelector("#user-Score");
const compScorePara = document.querySelector("#comp-Score");

// dark mode

const mode = document.querySelector(".button");
let body = document.querySelector("body");
let currmode = "light";

mode.addEventListener("click", () => {
    if (currmode === "light") {
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");

        mode.classList.add("dark");
        mode.classList.remove("light");
        
    }
    else {
        currmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");

        mode.classList.add("light");
        mode.classList.remove("dark");
        
    
    }
});

// ==========================================================================================================



const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    let randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose !  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};
const drawGame = () => {
    msg.innerText = "game was draw ! play again";
    msg.style.backgroundColor = "#081b31"
};

const playGame = (userChoice) => {
    console.log("user choice :", userChoice);
    const compChoice = genCompChoice();
    console.log("computer choice :", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        //paper , scissor
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;

        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        // console.log("choice was clicked")
        const userChoice = choice.getAttribute("id");
        // console.log("you choose",userChoice);
        playGame(userChoice);

    });
});



