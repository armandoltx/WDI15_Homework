// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '', '', '_' and end with 'F', 'O', 'X').
var letters = ['w', 'e', 'b'];
var guessed = [ ];
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
var guessLetter = function (guessedLetters){
    for (var i = 0; i <= letters.length - 1; i++){
          if (letters[i] === guessedLetters){
            guessed.push(guessedLetters);
            return console.log( "Congrats, " + guessedLetters + "__" + " __");
          } else if (letters[1] ===guessedLetters){
            guessed.push(guessedLetters);
            return console.log( "Congrats, " + "__" +  guessedLetters + "__");
          } else if (letters[2] ===guessedLetters){
            guessed.push(guessedLetters);
            return console.log( "Congrats, " + "__" +  "__" + guessedLetters);
          } else{
            guessed.push(guessedLetters);
            return console.log( "keep going");
          }
    }
};
( guessLetter("b") + ", you have used the following letters " + guessed);
( guessLetter("b") + ", you have used the following letters " + guessed);
( guessLetter("w") + ", you have used the following letters " + guessed);
( guessLetter("w") + ", you have used the following letters " + guessed);
( guessLetter("j") + ", you have used the following letters " + guessed);
( guessLetter("e") + ", you have used the following letters " + guessed);


// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
