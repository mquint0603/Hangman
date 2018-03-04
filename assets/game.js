const wordArray = ['cezanne', 'picasso', 'frankenthaler', 'matisse', 'monet', 'manet','gaugin', 'degas', 'kandinsky', 'rothko', 'dekooning', 'kahlo', 'van gogh'];
var winCount = 0;
var lossCount = 0;
document.getElementById('losses').innerHTML = lossCount;
document.getElementById('wins').innerHTML = winCount;



function resetGame(){
    word = wordArray [Math.floor(Math.random() * wordArray.length)];
    console.log(word);
    blanks = [];
    //sets up blanks equal to word length
    for (var i = 0; i < word.length; i++) {
     blanks[i] = "_";
    }
    document.querySelector('#blanks').innerHTML = blanks.join(' ');

    alreadyGuessed = [];
    remainingLetters = word.length
    remainingTries = word.length + 5;

    document.getElementById('letterBank').innerHTML = alreadyGuessed;
    document.querySelector('#triesRemaining').innerHTML = remainingTries;
    document.querySelector('#lettersRemaining').innerHTML = remainingLetters;
}

resetGame()


document.onkeyup = function(event){ 
    var guess = event.key;
    guess = guess.toLowerCase();

    //if letter has not already been guessed...
    if (alreadyGuessed.indexOf(guess) < 0){
        alreadyGuessed.push(guess);   
        document.getElementById('letterBank').innerHTML = alreadyGuessed.join(' ');

         //if the guess is right...
        if (word.indexOf(guess) > -1 ){
            console.log('yay');
            for ( i= 0; i < word.length;  i++){
                if (word[i] === guess) {
                blanks[i] = guess.toUpperCase() + " ";
                remainingLetters--;
                document.querySelector('#blanks').innerHTML = blanks.join(' ');
                document.querySelector('#lettersRemaining').innerHTML = remainingLetters;
                }
            }   
            //if guess is wrong...          
        } else {
            remainingTries--;
            document.querySelector('#triesRemaining').innerHTML = remainingTries;
        }
        //if letter has already been guessed...
    } else{
        console.log("You already guessed this letter")
    }


    //win/lose scenarios
    if (remainingTries === 0 && remainingLetters > 0){
        alert('You lose! The answer was ' + word.toUpperCase())
         lossCount++;
         document.getElementById('losses').innerHTML = lossCount;
         resetGame();
    } else if (remainingLetters === 0){
        alert('You got it!')
        winCount++;
        document.getElementById('wins').innerHTML = winCount;
        resetGame()
    }
}