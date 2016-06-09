// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.


var sumArray = function( numbers ) {
  var sum = 0;
  for ( var i = 0; i<= numbers.length - 1; i++){
    sum += numbers[i];
  }
  return sum;
};

console.log(sumArray([1, 2, 3, 4, 5]));

// var sum = [0, 1, 2, 3, 4].reduce(sumArray, 0);
//
// function sumArray( a,b ){
//   return a + b;
// };
// console.log(sum);

var sum = [0, 1, 2, 3, 4].reduce(function ( a, b ){
  return a + b;
});
//function multiplyArray
var multiplyArray = function ( numbers ){
  var mult = 1;
  for ( var i = 0; i <= numbers.length - 1; i++){
    mult = mult * numbers[i];
  }
  return mult;
};
console.log( multiplyArray([1, 2, 3, 4]));
console.log( multiplyArray([1, 2, 3]));
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
//make the string to an array, reverse the arry and get back to a string.
// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.
//use method filter, try not tu use it.
//
