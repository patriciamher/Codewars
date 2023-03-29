//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
//No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {  
    let first = Math.min(...numbers)
    numbers.splice(numbers.indexOf(first), 1)
    let second = Math.min(...numbers)
    return first + second
  }