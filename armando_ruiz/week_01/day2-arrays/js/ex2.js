// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
var character = function (word){
  //takes a character
  for ( var i = 0; i <= word.length -1; i++){
    var char = word.charAt(i);
    if ( ( char === 'a' ) || ( char === 'e' ) || ( char === 'i' ) || ( char === 'o' ) || ( char === 'u' ) ){
      var result = char + " is a vowel";
    } else {
    var result = char + " is a consonant";
    }
    console.log(result);
  };

}
character ("general");
character ("armando");
