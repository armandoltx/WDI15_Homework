// Bonus: Make it like Hangman:
//
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
var reward = 0;
var letters = ['w', 'e', 'b'];
var guessed = [ ];
var guessLetter = function (guessedLetters){
  if( guessed.indexOf(guessedLetters) >= 0 ){
	    	return "You already used " + guessedLetters;
  }else {

  	for (var i = 0; i <= letters.length - 1; i++){
	          if (letters[i] === guessedLetters){
	            guessed.push(guessedLetters);
	            return console.log( "Congrats, " + guessedLetters + "__" + " __" + " you won " + "$" + Math.round((Math.random()+1)) * 100 + ", you have used the following letters " + guessed);
	          } else if (letters[1] ===guessedLetters){
	            guessed.push(guessedLetters);
	            return console.log( "Congrats, " + "__" +  guessedLetters + "__" + " you won " + "$" + Math.round((Math.random()+1)) * 100 + ", you have used the following letters " + guessed);
	          } else if (letters[2] ===guessedLetters){
	            guessed.push(guessedLetters);
	            return console.log( "Congrats, " + "__" +  "__" + guessedLetters + " you won " + "$" + Math.round((Math.random()+1)) * 100 + ", you have used the following letters " + guessed);
	          } else{
	            guessed.push(guessedLetters);
	            return console.log( "keep going" + " you lose " + "$" + Math.round((Math.random()+1)) * 100 + ", you have used the following letters " + guessed);
	          }
	    }
  }

};
guessLetter("b") + guessed;
guessLetter("m") + guessed;
guessLetter("m") + guessed;
guessLetter("w") + guessed;
guessLetter("a") + guessed;
guessLetter("e") + guessed;
guessLetter("b") + guessed;
guessLetter("m") + guessed;
