var currentWord;
var guessingWord;
var guessedLetters;
var words = ["ironman","hulk","captainamerica","thor","avengers","guardiansofthegalaxy","antman","doctorstrange","spiderman","blackpanther","batman","superman","flash","wonderwoman","greenlantern","cyborg","greenarrow","supergirl"]
var availableGuess = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var guessesLeft;
var spaces;
var gameStart = false;
var guessingWordDisplay = "";
var currentWord;



function startGame() {

    guessesLeft = 12;
    guessedLetters = [];
    guessingWord = [];
    gameStart = true;
    currentWord = words[Math.floor(Math.random() * words.length)];


    for (var i=0;i<currentWord.length;i++) {
        guessingWord.push(" _ ");
    }

    
    for (var i=0;i<guessingWord.length;i++) {
        guessingWordDisplay += guessingWord[i];
    }

    document.getElementById("CurrentWord").innerHTML = guessingWordDisplay;
    document.getElementById("wins").innerHTML = "Wins: " + wins + " ";
    document.getElementById("guessLeft").innerHTML = "Guesses Left: " + guessesLeft + " ";
    document.getElementById("guesses").innerHTML = "Your Guesses so far: ";

    return currentWord
}

function playGame() {

    
    var userGuess = event.key;
    var positions = [];

    for (var i=0;i<currentWord.length;i++) {
        if (userGuess === currentWord[i]) {
            positions.push(i)
        }

    }

    if (positions.length <= 0) {
        guessesLeft--;
    } else {
        for(var i=0;i<positions.length;i++) {
            guessingWordDisplay[positions[i]] = userGuess;    
        }
    }

    document.getElementById("CurrentWord").innerHTML = guessingWordDisplay;
    document.getElementById("guessLeft").innerHTML = "Guesses Left: " + guessesLeft + " ";
    document.getElementById("guesses").innerHTML += userGuess + " ";

    if (guessingWord.indexOf(" _ ") === -1) {
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        gameStart = false;
    }

    if (guessesLeft < 1) {

    }
}

document.onkeyup = function(event) {

    if (gameStart === false){
        currentWord = startGame();
    }
    playGame();

        


    //if ((userGuess !== computerGuess) && (guessesLeft > 0)) {
    //    guessesLeft--;
    //    document.getElementById("guessLeft").innerHTML = "Guesses Left: " + guessesLeft + " ";
    //    document.getElementById("guesses").innerHTML += " " + userGuess + " ";
    //} else if (userGuess !== computerGuess) {
    //    losses++;
    //    guessesLeft = 9;
    //    document.getElementById("losses").innerHTML = "Losses: " + losses + " ";
     //   document.getElementById("guessLeft").innerHTML = "Guesses Left: " + guessesLeft + " ";
    //    document.getElementById("guesses").innerHTML = "Your Guesses so far: ";
    //} else {
    //    wins++;
    //    guessesLeft = 9;
    //    document.getElementById("wins").innerHTML = "Wins: " + wins + " ";
    //    document.getElementById("guessLeft").innerHTML = "Guesses Left: " + guessesLeft + " ";
    //    document.getElementById("guesses").innerHTML = "Your Guesses so far: ";
    //} 

}