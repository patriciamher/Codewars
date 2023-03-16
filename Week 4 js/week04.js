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