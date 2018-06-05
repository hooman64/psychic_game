var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// For Tracking Purposes
var guesses = [];
var wins = 0;
var losses = 0;
var guesscount = 9;

// For Computer Random Letter Assignment
var randlet = alphabet[Math.floor(Math.random()*alphabet.length)];

// For Keypress Guesses
document.onkeypress = function(event) {
    var tries = event.key;

    if(tries == randlet){
        wins +=1;
        document.getElementById('wins').innerHTML = wins;
        guesscount = 9;
        guesses = [];
        randlet = alphabet[Math.floor(Math.random()*alphabet.length)];
    }else{
        guesscount -=1;
    }

    if(guesscount === 0){
        losses +=1;
        document.getElementById('losses').innerHTML = losses;
        guesscount = 9;
        guesses = [];
        randlet = alphabet[Math.floor(Math.random()*alphabet.length)];
    }

    guesses.push(tries);

    document.getElementById('guesscount').innerHTML = guesscount;
    document.getElementById('guesses').innerHTML = guesses;

}
