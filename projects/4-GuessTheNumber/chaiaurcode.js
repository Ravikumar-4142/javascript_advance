let randomNumber = parseInt(Math.random() * 100 + 1)
const submitbtn = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')

const loOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')

let prevGuess = []
let numGuesses = 1
let PlayGame = true

if (PlayGame) {
    submitbtn.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a number')
    } else if (guess > 100) {
        alert('Please enter a number less than 100')
    } else {
        prevGuess.push(guess)
        if (numGuesses === 10) {
            displayGuess(guess)
            displayMessage(`Game over. random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuesses(guess)
        }
    }
}

function checkGuesses(guess) {
    if (guess === randomNumber) {
        displayMessage(`You Guessed it right`)
        endGame()
    } else if (guess < randomNumber) {
        displayMessage(`Number is too Low`)
    } else if (guess > randomNumber) {
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuesses++;
    lastResult.innerHTML = `${11 - numGuesses}`
    
}
function displayMessage(message) {
    loOrHigh.innerHTML = `<h3>${message}</h3>`
}
function guessMessage(guess) {

    
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', true)
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    PlayGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuesses = 1
        guessSlot.innerHTML = ''
        lastResult.innerHTML = `${11 - numGuesses}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        PlayGame = true;
    })
}


