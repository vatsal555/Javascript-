# Project related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-efpmfp?file=index.html)

# Solution code

## project 1

```javascript
    const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);

    // switch (e.target.id === 'grey') {
    //   case 1:
    //     body.style.backgroundColor = e.target.id;
    //     break;

    //   default:
    //     break;
    // }

    if(e.target.id === "grey") {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "white") {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "blue") {
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id
    }
  });
});
```

## project 2
```javascript
    const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span> ${bmi} </span>`;
  }
});

```
## project 3
```javascript
    const clock = document.getElementById('clock');

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
## project 4 
```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```

## project 5
```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});
```

## project 6

```javascript

//  generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDF';
  let color = '#';
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;

const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```

## project 7

```javascript 
// Tic Tac Toe
let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn')
let newGameBtn = document.querySelector('#new-btn')
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg')

let turnx = true // player x is true

let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame = () => {
    turnx = true
    enableBoxes();
    msgContainer.classList.add('hide')
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        // console.log("button was clicked");
        if (turnx) { // player1 or x
            box.innerText = "x"
            turnx = false
        } else {  // player2 or o
            box.innerText = "o"
            turnx = true
        }  
        box.disabled = true

        checkWinner()
    })
})

const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true
    }
}
const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`
    msgContainer.classList.remove('hide')
    disableBoxes()
}

const checkWinner = () => {
    for (const pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText 
        let pos2Val = boxes[pattern[1]].innerText 
        let pos3Val =  boxes[pattern[2]].innerText

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("Winner ", pos1Val);
                showWinner(pos1Val)
            }
        }
    }
}

newGameBtn.addEventListener('click', resetGame)
resetBtn.addEventListener('click', resetGame)

```