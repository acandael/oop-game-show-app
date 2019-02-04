class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    const phraseDiv = document.querySelector('#phrase ul');

    // loop through the phrase and add for every letter or space a list element to the unorderd list
    for (let i = 0; i < this.phrase.length; i += 1) {
      let li = document.createElement('li');
      let char = this.phrase[i];

      if (char === ' ') {
        // an li with a space gets the 'space' class
        li.className = 'hide space';
      } else {
        // an li with a letter gets the 'letter' class
        li.className = `hide letter ${char}`;
      }
      li.textContent = char;
      phraseDiv.appendChild(li);
    }
  }

  checkLetter(letter) {
    // check if the guessed letter is in the phrase
    if (this.phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  showMatchedLetter(letter) {
    const letters = document.querySelectorAll('#phrase li');
    // loop through the phrase and give any matched letter the 'show' class
    letters.forEach(key => {
      if (key.textContent === letter) {
        key.setAttribute('class', 'show');
      }
    });
  }
}
