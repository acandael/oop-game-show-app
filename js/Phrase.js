class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    const phraseDiv = document.querySelector('#phrase ul');

    for (let i = 0; i < this.phrase.length; i += 1) {
      let li = document.createElement('li');
      let char = this.phrase[i];
      if (char === ' ') {
        li.className = 'hide space';
      } else {
        li.className = `hide letter ${char}`;
      }
      li.textContent = char;
      phraseDiv.appendChild(li);
    }
  }

  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }

  showMatchedLetter(letter) {
    const letters = document.querySelector('#phrase li');
    console.log(letter);
  }
}
