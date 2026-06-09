let targetNumber = Math.floor(Math.random() * 100) + 1;
let guess = prompt("Guess a number between 1 and 100:")
let attempts=0
while(attempts<4){
    if(guess==targetNumber){
        alert("Congratulations! You guessed the number!");
        break;
    }if(guess<targetNumber){
        alert("Too low! Try again.");
    }else{
        alert("Too high! Try again.");
    }
    attempts++;
    guess = prompt("Guess a number between 1 and 100:")
}if(attempts==4){
    alert("Sorry, you've used all your attempts. The number was " + targetNumber);
}

