// Strings
// These exercises will test your knowledge of string functions, conditionals, and arrays. For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.
//
// DrEvil
//
// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)
var DrEvil = function( amount ){
  if( amount > 1000000){
    var result = "DrEvil(" + amount + "): " + amount + " dollars (pinky)";
  } else{
    var result = "DrEvil(" + amount + "): " + amount + " dollars";
  }
  return result;
};
var test = DrEvil( 10 );
console.log( test );
var test = DrEvil( 2000000 );
console.log( test );
// MixUp
//
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!
var mixUp = function(string1, string2){
  var firstWord = string2.substring( 0, 2 ) + (string1.substring( 2, string1.length));
  var secondWord = string1.substring( 0, 2 ) + (string2.substring( 2, string2.length ));
  var result = firstWord + " " + secondWorld;
  return result;
};
var test = mixUp( "mix", "pod");
console.log(test);
var test = mixUp( "dog", "dinner");
console.log(test);
// FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le' barnaby barna*y
//"hotdogs".replace('o', '*');
//"hotdogs".replace(/o/g, '*')

var fixStart = function( string ){
  // Get the first character in the string
  var first = string.substring( 0, 1 );
  // Using replace all the characters in the string matching 'first' with '*'
  var match = new RegExp(first, "g");
  var alteredString = string.replace(match, '*' );
  // Replace the first character in the string returned from the statement above with the first variable
    var result =  alteredString;
    return result;
};
var test = fixStart( 'armando');
console.log(test);
// Verbing
//
// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:
//
//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'
var verbing = function( string ){
// Create a function called verbing. It should take a single argument, a string.
  if (string.length >= 3 ){
//If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead
    if (string.endsWith('ing')){
      var newWord = string + "ly";
    }else{
      var newWord = string + "ing";
    }
  }else {
//If the string length is less than 3, it should leave it unchanged.
    var newWord = string;
  }
  return newWord;
};
var test = verbing ( "starting" );
console.log( test );
// Not Bad
//
// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'
// var re = /apples/gi;
// var str = 'Apples are round, and apples are juicy.';
// var newstr = str.replace(re, 'oranges');
// console.log(newstr);  // oranges are round, and oranges are juicy.

var notBad = function( string ){
// Create a function called notBad that takes a single argument, a string.
  if(string.search("not") < string.search("bad")){
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
    var reNot = /not ?\w* ?bad/gi;
    var newstr = string.replace(reNot, "good");
  } else{
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
    return string;
  }
    return newstr;
};
var test = notBad( 'This dinner is not that bad!' );
console.log( test );
