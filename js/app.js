const startButton = document.getElementById('btn__reset');
const game = new Game();

startButton.addEventListener('click', function() {
  game.startGame();
});

const keyBoard = document.getElementById('qwerty');
keyBoard.addEventListener('click', function(e) {
  game.handleInteraction(e.target);
});
