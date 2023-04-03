//Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  let upstr = str.toUpperCase()
  return upstr
}

//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
//[Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name){
  return `Hello, ${name} how are you doing today?`
}
  
//Let's play! You have to return which player won! In case of a draw return Draw!. Examples(Input1, Input2 --> Output):

const rps = (p1, p2) => {
  if (p1 == p2){
      return "Draw!";
  }
  
  else if ((p1 == "scissors" && p2 == "paper") || (p1 == "paper" && p2 == "rock") || (p1 == "rock" && p2 == "scissors") ){
      return "Player 1 won!";
  }
  
  else { 
      return "Player 2 won!";
  }
}

//Clock shows h hours, m minutes and s seconds after midnight.
//Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
  const convertHours = h * 60 * 60 * 1000
  const convertMins = m * 60 * 1000
  const convertSeconds = s * 1000
  return convertHours + convertMins + convertSeconds;
}
//You get an array of numbers, return the sum of all of the positives ones. Example [1,-4,7,12] => 1 + 7 + 12 = 20
//Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      sum = sum + arr[i];
    }
  }
  return sum
}
