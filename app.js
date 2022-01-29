const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [(getGuess)], // empty array for previous guesses
  
  play: function() {
    alert('Welcome to guess the number game!')
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

  },
getGuess: function(){
  let guess 
  do{
  guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`))
  } 
  while{
    (this.smallestNum || this.biggestNum !== this.secretNum)
  }
},
}
