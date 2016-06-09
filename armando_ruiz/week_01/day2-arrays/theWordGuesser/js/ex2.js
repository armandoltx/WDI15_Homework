// Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.


// Bonus: Make it more like Wheel of Fortune:
//
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
var reward = 0;
var letters = ['w', 'e', 'b'];
var guessed = [ ];
var guessLetter = function (guessedLetters){
  for (var i = 0; i <= letters.length - 1; i++){
          if (letters[i] === guessedLetters){
            guessed.push(guessedLetters);
             console.log( "Congrats, " + guessedLetters + "__" + " __" + " you won " + "$" + Math.round((Math.random()+1)) * 100 + ", you have used the following letters " + guessed);
          } else if (letters[1] ===guessedLetters){
            guessed.push(guessedLetters);
             console.log( "Congrats, " + "w" +  guessedLetters + "__" + " you won " + "$" + Math.round((Math.random()+1)) * 100 + ", you have used the following letters " + guessed);
          } else if (letters[2] ===guessedLetters){
            guessed.push(guessedLetters);
             console.log( "Congrats, " + "__" +  "__" + guessedLetters + " you won " + "$" + Math.round((Math.random()+1)) * 100 + ", you have used the following letters " + guessed);
          } else{
            guessed.push(guessedLetters);
             console.log( "keep going" + " you lose " + "$" + Math.round((Math.random()+1)) * 100 + ", you have used the following letters " + guessed);
          }
    }
};
guessLetter("b") + guessed;
guessLetter("b") + guessed;
guessLetter("a") + guessed;
guessLetter("e") + guessed;
guessLetter("b") + guessed;
guessLetter("m") + guessed;
