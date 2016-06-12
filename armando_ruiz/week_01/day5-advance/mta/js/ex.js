// MTA Lab
// Objectives:
//
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
//
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
var lines = {
    'N' : [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ],
    'L' : [ "8th", "6th", "Union Square", "3rd", "1st" ],
    '6' : ["Gran Central", "33rd", "28th", "23rd", "Union Square", "Astor Place" ]
};
//Single trip: Means travel in the same line.
var singleLineTrip = function ( startLine, startStation, stopStation ){
  var line = lines[startLine];// square brakets instead a dot becasue we want to store in the variable the key part of the property.
  var indexStart = line.indexOf( startStation );
  var indexStop = line.indexOf( stopStation );
  // to go and return we need to check which index is the higher.
  if ( indexStart < indexStop ){
    var stops = line.slice( indexStart, indexStop ); // to create a new array with the stops that are in between of the 2 stops
    var numberStops = stops.length;
  } else {
    var stopsReverse = line.slice( indexStop, indexStart );
    var stops = stopsReverse.reverse();
    var numberStops = stops.length;
  }

  var result = "Your must travel through the following stops on the " +  startLine +  " line: " + stops + " the number of stops is " + numberStops;
  return result;
};

 //REURN MULT!!!!!!

var multiLineTrip = function (startLine, startStation, stopLine, stopStation ){
  var lineStart = lines[startLine];// square brakets instead a dot becasue we want to store in the variable the key part of the property.
  var indexInitialStart = lineStart.indexOf( startStation );
  var indexInitialStop = lineStart.indexOf( "Union Square" );
            if ( indexInitialStart < indexInitialStop ){
              var initialStops = lineStart.slice( indexInitialStart, indexInitialStop );
              var numberinitialStops = initialStops.length;
            } else {
              var stopsReverse = lineStart.slice( indexInitialStop, indexInitialStart );
              var initialStops = stopsReverse.reverse();
              var numberinitialStops = lastStops.length;
            }
  var lineStop = lines[stopLine];// square brakets instead a dot becasue we are using variables.
  var indexLastStart = lineStop.indexOf( "Union Square" );
  var indexLastStop = lineStop.indexOf( stopStation );
          if ( indexLastStart < indexLastStop ){
            var lastStops = lineStop.slice( indexLastStart, indexLastStop );
            var numberlastStops = lastStops.length;
          } else {
            var stopsReverse = lineStop.slice( indexLastStop, indexLastStart );
            var lastStops = stopsReverse.reverse();
            var numberlastStops = lastStops.length;
          }
    var numbertotalStops = numberinitialStops + numberlastStops;

  var result = "You must travel through the following stops on the " +  startLine +  " line: " + initialStops + ", and change in Union Square to line " + stopLine + " and continue through the following stops: " + lastStops + ". The number of stops is " +  numbertotalStops;
  return result;
};

var planTrip = function ( startLine, startStation, stopLine, stopStation ){
  if ( ( startLine === stopLine) && ( startStation === stopStation ) ) {
    return "You are already here."
  } else{
         if (startLine === stopLine) {
            return singleLineTrip(startLine, startStation, stopStation);
         } else {
           return multiLineTrip(startLine, startStation, stopLine, stopStation )
         }
  }
};
var test = planTrip( "N", "28th", "6", "Gran Central");
console.log( test );
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
//
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
//
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
