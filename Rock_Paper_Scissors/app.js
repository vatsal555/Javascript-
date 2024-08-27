let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userCount = document.querySelector("#user-score");
const compCount = document.querySelector("#comp-score");

const genCompChoice = () => {
  const option = ["rock", "paper", "scissor"];
  let randomIdx = Math.floor(Math.random() * 3);
  return option[randomIdx];
};

const gameDraw = () => {
  //   console.log("Game was draw");
  msg.innerText = "Game was draw. Play again!";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // console.log("you won the game");
    userScore++;
    userCount.innerText = userScore;
    msg.innerText = `You won! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    // console.log("you lose the game");
    compScore++;
    compCount.innerText = compScore;
    msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //   console.log("user choice =", userChoice);
  //generate computer choice
  const compChoice = genCompChoice();
  //   console.log("computer choice =", compChoice);

  if (userChoice === compChoice) {
    //gameDraw
    gameDraw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // scissors, rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
