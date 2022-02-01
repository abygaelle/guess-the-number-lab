const game = {
  title: 'Guess the Number!',
  biggestNum: 5,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [], 
  
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;

    while(this.prevGuesses[this.prevGuesses.length-1]!== this.secretNum){
      this.prevGuesses.push(this.getGuess())
      
      console.log(this.prevGuesses);
      this.render();
    }
  }
  getGuess: function(){
      let guess 
      do {
        guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
      }
      while (guess < this.smallestNum  || isNaN(guess) || guess > this.biggestNum){
      
      }
      return guess
    },
  
  render: function(){
    if(this.prevGuesses[this.prevGuesses.length - 1]=== this.secretNum){
      alert(`Congrats! you guessed the number ${this.prevGuesses.length} tries`)
    }
    if(this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum){      
        alert(`The guess is too low prevGuesses: ${this.prevGuesses.join(', ')}`)
      }
      if(this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum){      
        alert(`The guess is too high prevGuesses: ${this.prevGuesses.join(', ')}`)
      }
    
  }

}
game.play

