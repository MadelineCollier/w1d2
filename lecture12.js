For each piece of data passed in
  Convert it to a number
  Check to see if it is an integer
    If it is, add it so a total
Output the total

// var total = 0

// var data = process.argv.slice(2);

// data.forEach(function(item) {

// });

// for (var i = 0; i < data.length; i++) {
//   var item = Number(data[i]);
//   if (number.isInteger(item)) {
//     console.log("It's an integer");
//     total += item;
//   } else {
//     console.log("Not an integer");
//   }
// }



ways to test to see if its an integer:
- Number.isInteger();
- Modulo: item % 1 === 0;
- Math.ceil(item) == Math.floor(item);

ways to convert a string to a number:
- Typecast it: Number(item); (obsolete)
- parseInt/parseFloat;
- item.toInteger();
- item * 1;


// Second try:


// var total = 0

// process.argv.forEach(function(item) {
//   item = Number(item);
//   if (Number.isInteger(item)) {
//     total += item;
//   }
// });

// console.log("The total is: ", total);



// FINAL TRY:



var total = 0

function processItem(item) {
  item = Number(item);
  if (Number.isInteger(item)) {
    total += item;
  }
}

process.argv.ForEach(processItem);

console.log("The total is: ", total);

