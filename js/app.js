const startButton = document.getElementById('btn__reset');
const game = new Game();

startButton.addEventListener('click', function() {
  // remove all li elements from the phrase
  const phraseDisplay = document.querySelectorAll('#phrase li');
  phraseDisplay.forEach(item => {
    item.remove();
  });

  // enable all the onscreen keyboard buttons
  const keyboard = document.querySelectorAll('.keyrow button');

  keyboard.forEach(key => {
    key.setAttribute('class', 'key');
  });

  // reset all the heart images
  const lives = document.querySelectorAll('.tries');

  lives.forEach(live => {
    let img = live.firstChild;
    img.setAttribute('src', 'images/liveHeart.png');
  });

  game.startGame();
});

// register clicks keyboard buttons
const keyBoard = document.getElementById('qwerty');
keyBoard.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    game.handleInteraction(e.target);
  }
});
