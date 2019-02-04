class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      'This is the thing',
      'Winter is coming',
      'From my cold dead fingers',
      'Lord Vader rise',
      'Thats no moon'
    ];
    this.activePhrase = null;
  }

  startGame() {
    // hide the overlay
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

    // get a random phrase and display it to the screen
    const phrase = this.getRandomPhrase();
    this.activePhrase = new Phrase(phrase);
    this.activePhrase.addPhraseToDisplay();
  }

  getRandomPhrase() {
    // return random phrase
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }

  handleInteraction(key) {
    const keyboard = document.querySelectorAll('.keyrow button.key');
    const letter = key.textContent;
    const phrase = this.activePhrase;

    // Disable the selected letter’s onscreen keyboard button.
    key.disabled = true;

    // check if the phrase includes the guessed letter
    if (this.activePhrase.checkLetter(key.textContent)) {
      key.setAttribute('class', 'chosen');
      this.activePhrase.showMatchedLetter(key.textContent);
      // check if player won the game
      if (this.checkForWin()) {
        this.gameOver();
      }
    } else {
      key.setAttribute('class', 'wrong');
      this.removeLife();
    }
  }

  removeLife() {
    // increment a lost live
    this.missed += 1;
    const lives = document.querySelectorAll('.tries');

    // check if the user has lives left
    if (this.missed !== 5) {
      //remove a live by replacing the image
      for (let i = 0; i < this.missed; i += 1) {
        let live = lives[i];
        let img = live.firstChild;
        img.setAttribute('src', 'images/lostHeart.png');
      }
    } else {
      // the user lost five lives, the game is lost
      this.gameOver();
    }
  }

  // Check if the player has revealed all letters in the active phrase
  checkForWin() {
    const remainingLetters = document.querySelectorAll('.letter');

    // check if there are unguessed letters left
    if (remainingLetters.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  // Show the start screen and update the h1 element with a friendly lose or win message
  gameOver() {
    const overlay = document.getElementById('overlay');
    // show the overlay screen
    overlay.style.display = 'block';
    let gameOverMessage = '';

    // check if the user has won or lost the game
    if (this.missed === 5) {
      // the game is lost
      overlay.setAttribute('class', 'start lose');
      gameOverMessage = 'You have lost, try again!';
    } else {
      // the game is won
      overlay.setAttribute('class', 'start win');
      gameOverMessage = 'Congratulations, you have won!';
    }

    document.getElementById('game-over-message').textContent = gameOverMessage;
  }
}
