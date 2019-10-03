const hands = [...document.querySelectorAll('.select img')]
const startGameButton = document.querySelector('.start')
const information = document.querySelector('.information')


const summaryOfGame = {
  amount: 0,
  wins: 0,
  losses: 0,
  draws: 0,
}

const choicesOfHand = {
  playerHand: null,
  computerHand: null,
}
function computerChoice() {
  const index = Math.floor(Math.random() * 3)
  choicesOfHand.computerHand = hands[index].dataset.option
}
function checkResult(player, computer) {
  if (player === computer) {
    return "draw"
  } else if
    ((player === "paper" && computer === "rock")
    || (player === "scissors" && computer === "paper")
    || (player === "rock" && computer === "scissors")) {
    return "win"
  } else return "loss"
}
function showResult(player, computer, result) {
  const playerResult = document.querySelector('[data-summary="your-choice"]')
  playerResult.textContent = player
  const computerResult = document.querySelector('[ data-summary="ai-choice"]')
  computerResult.textContent = computer
  const resultOfCurrentGame = document.querySelector('[data-summary="who-win"]')
  resultOfCurrentGame.textContent = result
  const numbers = document.querySelector('p.numbers span')
  numbers.textContent = ++summaryOfGame.amount
}
function startGame() {
  if (!choicesOfHand.playerHand) {
    return information.textContent = "Choose one of the hands !!"
  } else {
    computerChoice()
    const gameResult = checkResult(choicesOfHand.playerHand, choicesOfHand.computerHand)
    showResult(choicesOfHand.playerHand, choicesOfHand.computerHand, gameResult)
  }
}

function selectHand() {
  choicesOfHand.playerHand = this.dataset.option
  hands.forEach(hand => (hand.style.boxShadow = ''))
  this.style.boxShadow = '0 0 0 4px black'
}

hands.forEach(hand => {
  hand.addEventListener('click', selectHand)
})

startGameButton.addEventListener('click', startGame)