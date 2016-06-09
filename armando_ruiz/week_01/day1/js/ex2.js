// Part 2
//
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
var calculations = function( number ){
  var half = number / 2;
  console.log( half );
  var square = half * half;
  console.log( square );
  var area = (Math.PI * square * square);
  console.log( area );
  var percentage = (( area / square ) *100 );
  console.log ( percentage );
};
 calculations( 3 );
