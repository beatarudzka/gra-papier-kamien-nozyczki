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
function startGame() {
  if (!choicesOfHand.playerHand) {
    return information.textContent = "Choose one of the hands !!"
  } else {
    computerChoice()
    const gameResult = checkResult(choicesOfHand.playerHand, choicesOfHand.computerHand)
    console.log(gameResult)
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