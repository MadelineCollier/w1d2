// take in a number from the command line
// store it in number of rolls
// perform the math random method which simulates a dice roll
// do this the amount of times specified from the number of rolls variable
// push each resulting dice roll number into a resulting rolls array
// return the answer aka "rolled" + number of dice rolls + "dice: " + resulting rolls




// OPTION ONE:
// either you push to resulting rolls as an array
// and then turn it into a string after the fact
// and then use regexp to replace the "," with ", "


// OR


// OPTION TWO:
// you find an qeuivalent way to push to a string
// perhaps using concat
// and add in spaces and commas as you go




// FIRST TRY, ON OPTION ONE:


// var numberOfRolls = process.argv.slice(2)[0];

// var diceRoller = function(numberOfRolls) {
//   var resultingRolls = [];
//   for (var i = 0; i < numberOfRolls; i++) {
//     resultingRolls.push(Math.floor((Math.random() * 6) + 1));
//   }
//   resultingRolls.toString();
//   resultingRolls = resultingRolls.replace(/,/g, ", ");
//   return ("Rolled " + numberOfRolls + " dice: " + resultingRolls);
// }

// var result = diceRoller(numberOfRolls);
// console.log(result);

// NO WAY, TOO COMPLICATED >:[





// SECOND TRY ON OPTION TWO:



var numberOfRolls = process.argv.slice(2)[0];

var diceRoller = function(numberOfRolls) {
  var resultingRolls = "";
  console.log(resultingRolls);
  for (var i = 0; i < numberOfRolls; i++) {
    if (i == numberOfRolls - 1) {
      resultingRolls += Math.floor((Math.random() * 6) + 1);
    } else {
      resultingRolls += (Math.floor((Math.random() * 6) + 1) + ", ");
    }
  }
  return ("Rolled " + numberOfRolls + " dice: " + resultingRolls);
}

var result = diceRoller(numberOfRolls);
console.log(result);














