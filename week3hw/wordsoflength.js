//7
//Write a function findLongestWord that takes an array of words and returns the length of the longest one.

myArr = ['word', 'pineapple', 'apple', 'hello', 'supersuperlongword']

function findLongestWord(myArr) {
    var longestWord = [0]
    for (var i = 0; i < myArr.length; i++) {
        if (longestWord.length < myArr[i].length)
        longestWord = myArr[i]
    }
return longestWord

}
console.log(findLongestWord(myArr))


//8
// Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.

let wordList = ['word', 'pineapple', 'apple', 'onetwothree', 'yea']
var wordsLongerThanI = filterLongWords(wordList, 5)

function filterLongWords(words, lengthToCheck) {
    var wordsLongerThanI = []
    for (var i = 1; i < words.length; i++) {
        if (words[i].length > lengthToCheck) {
        wordsLongerThanI.push(words[i]);
    }
}
return wordsLongerThanI;

}
console.log(wordsLongerThanI)


