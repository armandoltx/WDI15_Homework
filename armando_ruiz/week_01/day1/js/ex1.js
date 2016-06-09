// The Calculator
// Part 1
//
// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

var squareNumber = function(number){
  var result = number * number;
  return result.toFixed(2);
};
var square = squareNumber ( 2 );
console.log(square);
//
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function( number ){
  var result = ( number / 2 );
  return result.toFixed(2);
};
var divideBy2 = halfNumber( 4 );
console.log(divideBy2);
//
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

var precentOf = function(number1, number2){
    var calculation = (( number1 / number2 ) *100 );
    var result = number1 + " is " + calculation + "% of " + number2 + ".";
    return result;
};
var percent = precentOf ( 2, 4 );
console.log( percent );
var percent = precentOf ( 1, 4 );
console.log( percent );
//
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
var calcArea = function (radius){
  var pi = Math.PI;
  var area = (pi * radius * radius).toFixed(2);
  var message = "The area for a circle with radius " + radius + " is " + area;
  return message;
};
var result = calcArea ( 40);
console.log( result );
