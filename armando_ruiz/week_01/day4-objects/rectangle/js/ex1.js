// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not

var rectangle = {
  length: 5,
  width: 4
};

var isSquare = function ( shape ) {
  if( shape.length === shape.width ){
    console.log( "The rectangle is square" );
  } else {
    console.log( "The rectangle is  NOT square" );
  }
};

isSquare( rectangle );
// area - Returns the area of the rectangle
var area = function (shape){
  console.log( shape.length * shape.width);
};
area( rectangle );

// perimeter - Returns the perimeter of the rectangle  P=2(l+w)

var perimeter = function ( shape ){
  console.log( 2 * (shape.length + shape.width) );
};
perimeter ( rectangle );
