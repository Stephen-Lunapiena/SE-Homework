//problem 1

num1 = 8
num2 = 7
maxOfTwoNumbers = (num1,num2) => {
    if (num1 > num2) {
        return num1 + " is the largest number"
    }
    else if (num2 > num1) {
    return num2 + " is the largest number"
    }
    else if (num1=num2) {
        return "numbers are equal"
    }
}
console.log(maxOfTwoNumbers(num1,num2))



//problem 2
//Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

maxOfThree = (num1,num2,num3) => {
    if (num1 > num2 && num1 > num3){
        return num1 
    }
    else if (num2 > num1 && num2 > num3) {
        return num2 
    }
    else if (num3 > num1 && num3 > num2)
    return num3
}

console.log(maxOfThree(5,4,1))