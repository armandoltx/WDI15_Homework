// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not      three sides are equal
// isIsosceles - Returns whether the triangle is isosceles or not           2 sides are equal
// area - Returns the area of the Triangle                                A= (heigh*base)/2
// isObtuse - Returns whether the triangle is obtuse or not               A = √[s(s-a)(s-b)(s-c)] s= (a+b+c)/2
//                                                                    Math.pow(4, 0.5);  // 2 (raíz cuadrada de 4)
//                                            Therefore, an obtuse triangle satisfies one of a^2+b^2<c^2

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

// isEquilateral - Returns whether the triangle is equilateral or not
var isEquilateral = function ( shape ){
  var a = shape.sideA;
  var b = shape.sideB;
  var c = shape.sideC;
  if( ( a === b ) && ( a === c ) && ( b === c ) ){
      console.log( "The triangle is equilateral." );
  } else {
    console.log( "The triangle is NOT equilateral." );
  }
};
isEquilateral ( triangle );

// isIsosceles - Returns whether the triangle is isosceles or not
var isIsosceles = function ( shape ){
  var a = shape.sideA;
  var b = shape.sideB;
  var c = shape.sideC;
  if ( ( a ===  b) || ( a === c ) || ( b === c ) ){
    console.log( 'The triangle is isosceles' );
  } else {
    console.log ( 'The triangle is NOT isosceles' );
  }
};
isIsosceles ( triangle );
// area - Returns the area of the Triangle
//               A= (heigh*base)/2
//               A = √[s(s-a)(s-b)(s-c)] s= (a+b+c)/2
//               Math.pow(4, 0.5);  // 2 (raíz cuadrada de 4)

var area = function ( shape ){
    var a = shape.sideA;
    var b = shape.sideB;
    var c = shape.sideC;
    var s = ( a + b + c ) / 2
    var step1 = (s * ( s - a ) * ( s - b ) * ( s - c ));
    var A = Math.sqrt( step1 );
    console.log( A );
};
area( triangle );

// isObtuse - Returns whether the triangle is obtuse or not
//  Therefore, an obtuse triangle satisfies one of a^2+b^2<c^2 al cuadrado
//
var isObtuse = function ( shape ){
    var a = shape.sideA * shape.sideA;
    var b = shape.sideB * shape.sideB;
    var c = shape.sideC * shape.sideC;
    if ( ( ( a + b ) < c ) || ( ( b + c ) < a ) || ( ( c + a ) < b ) ){
      console.log( "The triangle is Obtuse." );
    } else {
      console.log( "The triangle is  NOT Obtuse." );
    }
};
isObtuse( triangle );
