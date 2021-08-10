//6
//Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj"

var prompt = require('prompt-sync')()
userin = prompt('what word do you want to reverse? ')

str = userin

function reverseString() {
    return str.split("").reverse().join("");
}

console.log(reverseString(userin))