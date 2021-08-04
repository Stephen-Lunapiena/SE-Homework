// - Create an array of at least 10 values.
// - Take an input from the user to look for in the array
// - Find and display the total number of occurrences of the user input value in the array
// - Also, display the positions in which they occur.      HINT: Create another array for keeping track of positions

var prompt = require('prompt-sync')()
var book = prompt('Type in the book title to see how many copies are available: ');

array = ['book1', 'book2', 'book3', 'book3', 'book4', 'book5', 'book5', 'book5', 'book5', 'book5', 'book6', 'book5'];
array2 = [] //use this to display positions
counter = 0 //this will show number of occurances
found = false

for (var i = 0; i < array.length; i++) {
  if (book == array[i]) {
      counter++
      array2.push(i+1) //add the positions to the array
      found = true
    }
     
}

if (!found) {
  console.log(book + " is not available to rent")
}
else{
  console.log('there are ' + counter + ' copies of this book, at positions: ' + array2)
}


