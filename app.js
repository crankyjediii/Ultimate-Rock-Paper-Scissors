const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 9) + 1
   // console.log(randomNumber)
   if (randomNumber === 1) {
    computerChoice = ' Rock'
   }
   if (randomNumber === 2) {
    computerChoice = ' Fire'
   }
   if (randomNumber === 3) {
    computerChoice = ' Scissors'
   }
   if (randomNumber === 4) {
    computerChoice = ' Human'
   }
   if (randomNumber === 5) {
    computerChoice = ' Sponge'
   }
   if (randomNumber === 6) {
    computerChoice = ' Paper'
   }
   if (randomNumber === 7) {
    computerChoice = ' Air'
   }
   if (randomNumber === 8) {
    computerChoice = ' Water'
   }
   if (randomNumber === 9) {
    computerChoice = ' Gun'
   }
   computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = ' Draw!'
    }
    // all rock outcomes
    if (computerChoice === ' Rock' && userChoice === ' Paper') {
        result = ' You Win!'
    }
    if (computerChoice === ' Rock' && userChoice === ' Air') {
        result = ' You Win!'
    }
    if (computerChoice === ' Rock' && userChoice === ' Water') {
        result = ' You Win!'
    }
    if (computerChoice === ' Rock' && userChoice === ' Gun') {
        result = ' You Win!'
    }
    if (computerChoice === ' Rock' && userChoice === ' Scissors') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Rock' && userChoice === ' Sponge') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Rock' && userChoice === ' Human') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Rock' && userChoice === ' Fire') {
        result = ' You Lost :('
    }
    // all fire outcomes
    if (computerChoice === ' Fire' && userChoice === ' Air') {
        result = ' You Win!'
    }
    if (computerChoice === ' Fire' && userChoice === ' Water') {
        result = ' You Win!'
    }
    if (computerChoice === ' Fire' && userChoice === ' Gun') {
        result = ' You Win!'
    }
    if (computerChoice === ' Fire' && userChoice === ' Rock') {
        result = ' You Win!'
    }
    if (computerChoice === ' Fire' && userChoice === ' Scissors') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Fire' && userChoice === ' Sponge') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Fire' && userChoice === ' Human') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Fire' && userChoice === ' Paper') {
        result = ' You Lost :('
    }
    // all scissors outcomes
    if (computerChoice === ' Scissors' && userChoice === ' Fire') {
        result = ' You Win!'
    }
    if (computerChoice === ' Scissors' && userChoice === ' Water') {
        result = ' You Win!'
    }
    if (computerChoice === ' Scissors' && userChoice === ' Gun') {
        result = ' You Win!'
    }
    if (computerChoice === ' Scissors' && userChoice === ' Rock') {
        result = ' You Win!'
    }
    if (computerChoice === ' Scissors' && userChoice === ' Air') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Scissors' && userChoice === ' Sponge') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Scissors' && userChoice === ' Human') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Scissors' && userChoice === ' Paper') {
        result = ' You Lost :('
    }
    // all human outcomes
    if (computerChoice === ' Human' && userChoice === ' Fire') {
        result = ' You Win!'
    }
    if (computerChoice === ' Human' && userChoice === ' Scissors') {
        result = ' You Win!'
    }
    if (computerChoice === ' Human' && userChoice === ' Gun') {
        result = ' You Win!'
    }
    if (computerChoice === ' Human' && userChoice === ' Rock') {
        result = ' You Win!'
    }
    if (computerChoice === ' Human' && userChoice === ' Air') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Human' && userChoice === ' Sponge') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Human' && userChoice === ' Water') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Human' && userChoice === ' Paper') {
        result = ' You Lost :('
    }
    // all sponge outcomes
    if (computerChoice === ' Sponge' && userChoice === ' Fire') {
        result = ' You Win!'
    }
    if (computerChoice === ' Sponge' && userChoice === ' Scissors') {
        result = ' You Win!'
    }
    if (computerChoice === ' Sponge' && userChoice === ' Human') {
        result = ' You Win!'
    }
    if (computerChoice === ' Sponge' && userChoice === ' Rock') {
        result = ' You Win!'
    }
    if (computerChoice === ' Sponge' && userChoice === ' Air') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Sponge' && userChoice === ' Gun') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Sponge' && userChoice === ' Water') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Sponge' && userChoice === ' Paper') {
        result = ' You Lost :('
    }
    // all paper outcomes
    if (computerChoice === ' Paper' && userChoice === ' Fire') {
        result = ' You Win!'
    }
    if (computerChoice === ' Paper' && userChoice === ' Scissors') {
        result = ' You Win!'
    }
    if (computerChoice === ' Paper' && userChoice === ' Human') {
        result = ' You Win!'
    }
    if (computerChoice === ' Paper' && userChoice === ' Sponge') {
        result = ' You Win!'
    }
    if (computerChoice === ' Paper' && userChoice === ' Air') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Paper' && userChoice === ' Gun') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Paper' && userChoice === ' Water') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Paper' && userChoice === ' Rock') {
        result = ' You Lost :('
    }
    // all air outcomes
    if (computerChoice === ' Air' && userChoice === ' Paper') {
        result = ' You Win!'
    }
    if (computerChoice === ' Air' && userChoice === ' Scissors') {
        result = ' You Win!'
    }
    if (computerChoice === ' Air' && userChoice === ' Human') {
        result = ' You Win!'
    }
    if (computerChoice === ' Air' && userChoice === ' Sponge') {
        result = ' You Win!'
    }
    if (computerChoice === ' Air' && userChoice === ' Fire') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Air' && userChoice === ' Gun') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Air' && userChoice === ' Water') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Air' && userChoice === ' Rock') {
        result = ' You Lost :('
    }
    // all water outcomes
    if (computerChoice === ' Water' && userChoice === ' Paper') {
        result = ' You Win!'
    }
    if (computerChoice === ' Water' && userChoice === ' Air') {
        result = ' You Win!'
    }
    if (computerChoice === ' Water' && userChoice === ' Human') {
        result = ' You Win!'
    }
    if (computerChoice === ' Water' && userChoice === ' Sponge') {
        result = ' You Win!'
    }
    if (computerChoice === ' Water' && userChoice === ' Fire') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Water' && userChoice === ' Gun') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Water' && userChoice === ' Scissors') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Water' && userChoice === ' Rock') {
        result = ' You Lost :('
    }
     // all gun outcomes
     if (computerChoice === ' Gun' && userChoice === ' Paper') {
        result = ' You Win!'
    }
    if (computerChoice === ' Gun' && userChoice === ' Air') {
        result = ' You Win!'
    }
    if (computerChoice === ' Gun' && userChoice === ' Water') {
        result = ' You Win!'
    }
    if (computerChoice === ' Gun' && userChoice === ' Sponge') {
        result = ' You Win!'
    }
    if (computerChoice === ' Gun' && userChoice === ' Fire') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Gun' && userChoice === ' Human') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Gun' && userChoice === ' Scissors') {
        result = ' You Lost :('
    }
    if (computerChoice === ' Gun' && userChoice === ' Rock') {
        result = ' You Lost :('
    }
    resultDisplay.innerHTML = result
}