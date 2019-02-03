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
    keyboard.forEach(button => {
      if (button.nodeValue === letter) {
        button.setAttribute('disable', true);
      }
      // check if letter guess is correct
      if (!phrase.checkLetter(letter)) {
        button.setAttribute('class', 'wrong');
        this.removeLife();
      } else {
        button.setAttribute('class', 'chosen');
        phrase.showMatchedLetter(letter);
        if (this.checkForWin) {
          this.gameOver();
        }
      }
    });
  }

  removeLife() {
    this.missed += 1;
    if (this.missed !== 5) {
      //remove a live
      const live = document.querySelector('.tries');
      live.parentNode.removeChild(live);
    } else {
      this.gameOver();
    }
  }

  // Check if the player has revealed all letters in the active phrase
  checkForWin() {
    const remainingLetters = document.querySelectorAll('.letter');
    if (remainingLetters.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  // Show the start screen and update the h1 element with a friendly lose or win message
  gameOver() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
    let gameOverMessage = '';
    if (this.missed === 5) {
      overlay.setAttribute('class', 'start lose');
      gameOverMessage = 'You have lost, try again!';
    } else {
      overlay.setAttribute('class', 'start win');
      gameOverMessage = 'Congratulations, you have won!';
    }
    document.getElementById('game-over-message').textContent = gameOverMessage;
  }
}
