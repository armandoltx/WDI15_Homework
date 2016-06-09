// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
var greaterNum = function ( number1, number2){
  if ( number1 > number2 ){
    var result = number1 + " is higher than " + number2 + ".";
  }else if ( number2 > number1 ){
    var result = number2 + " is higher than " + number1 + ".";
  }else{
    var result = number1 + "is equal to " + number2 + ".";
  }
  return result;
};
var test = greaterNum( 10, 6 );
console.log( test );
//
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
var greaterNum = function ( number1, number2, number3 ){
  if ( ( number1 > number2 ) && ( number1 > number3 ) ){
    var result = number1 + " is higher than " + number2 + " and " + number3;
  }else if ( (number2 > number1) && (number2 > number3) ){
    var result = number2 + " is higher than " + number1 + " and " + number3;
  }else if ( (number3 > number1) && (number3 > number2) ){
    var result = number3 + " is higher than " + number1 + " and " + number2;
  }
  else{
    var result = number1 + "is equal to " + number2 + + " and " + number3 + ".";
  }
  return result;
};
var test = greaterNum( 10, 6, 14 );
console.log( test );
