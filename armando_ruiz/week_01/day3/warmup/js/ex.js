// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:
//
// If the number contains 3 as a prime factor, output 'Pling'.
// If the number contains 5 as a prime factor, output 'Plang'.
// If the number contains 7 as a prime factor, output 'Plong'.
// If the number does not contain 3, 5, or 7 as a prime factor, just pass the number's digits straight through.
// A prime number is one that is divisible only by itself and 1.
// ( x / x ) === 1

var result = "";
var primeFactor = function(number){
  if ( ( number % 3 ) === 0 ){
     result += 'Pling.';
  }
  if ( ( number % 5 ) === 0 ){
     result += 'Plang.';
  }
  if ( ( number % 7 ) === 0 ){
     result += 'Plong.';
  }
  if ( (result.length === 0 ) ){
    result = num.string();
  }

  return result;
};
var test = primeFactor(13);
console.log( test );
