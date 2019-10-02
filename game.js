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
function startGame() {
  if (!choicesOfHand.playerHand) {
    information.textContent = "Choose one of the hands !!"
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