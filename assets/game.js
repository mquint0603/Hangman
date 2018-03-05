const wordArray = [{name: 'cezanne', img: 'assets/images/cezanne.jpg'}, {name: 'picasso', img: 'assets/images/picasso.jpg'},
    {name: 'frankenthaler', img: 'assets/images/frankenthaler.jpg'}, {name: 'matisse', img: 'assets/images/matisse.jpg'}, {name: 'kahlo', img: 'assets/images/kahlo.jpg'}, 
    {name: 'monet', img: 'assets/images/monet.jpg'}, {name: 'gauguin', img: 'assets/images/gauguin.jpg'}, {name: 'rothko', img: 'assets/images/rothko.jpeg'}, {name: 'dekooning', img: 'assets/images/dekooning.jpg'},
    {name: 'manet', img: 'assets/images/manet.jpg'}, {name: 'degas', img: 'assets/images/degas.jpg'}, {name: 'kandinsky', img: 'assets/images/kandinksy.jpg'}, {name: 'vangogh', img: 'assets/images/vangogh.jpg'},
    {name: 'seurat', img: 'assets/images/seurat.jpg'}, {name: 'mondrian', img: 'assets/images/mondrian.jpg'}, {name: 'munch', img: 'assets/images/munch.jpg'}, {name: 'hopper', img: 'assets/images/hopper.jpeg'},
    {name: 'wyeth', img: 'assets/images/wyeth.jpg'}, {name: 'lichtenstein', img: 'assets/images/lichtenstein.jpg'}];
var winCount = 0;
var lossCount = 0;
document.getElementById('losses').innerHTML = lossCount;
document.getElementById('wins').innerHTML = winCount;

//declaring global variables
var word;
var blanks;
var alreadyGuessed;
var remainingLetters
var remainingTries;


function resetGame(){
    document.getElementById('imageDisplay').innerHTML = "";

    var indexNumber = Math.floor(Math.random() * wordArray.length);
    word = wordArray[indexNumber].name
    var pictureURL = wordArray[indexNumber].img;
    var picture = document.createElement("img")
    picture.src = pictureURL;
    picture.setAttribute("style", "width: 100%;");
    document.getElementById('imageDisplay').appendChild(picture);
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
        alert('You got it! The answer was ' + word.toUpperCase())
        winCount++;
        document.getElementById('wins').innerHTML = winCount;
        resetGame()
    }
}