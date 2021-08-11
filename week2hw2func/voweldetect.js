//Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
var prompt = require('prompt-sync')()
userin = prompt('Is this character a vowel? ')

isCharacterAVowel = (i) => { 
    if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
    return true
}
    else {
        return false
    }
}

console.log(isCharacterAVowel(i))