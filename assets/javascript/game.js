document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded


//Array of characters computer can generate
var characters = ["Bob", "Linda", "Tina", "Gene", "Louise", "Andy", "Ollie", "Tammy", "Zeke", "Mickey"];
var wins = 0;

//this is an empty array
var word;
var guess = [];
var answer = [];

var countdown = 15;

//Computer randomly generating word from character array and printing in DOM

var currentWord;
function wordGenerate() {
	currentWord = characters[Math.floor(Math.random() * characters.length)];

	//splitting the random word into an array
	//var splitCurrentWord = currentWord.split("");
	
    for (var i = 0; i < currentWord.length; i++) {
      answer[i] = "_ ";
  }

  	word = answer.join(" ");
  	document.getElementById("puzzle").innerHTML = word;
}
wordGenerate();

/*for (var i = 0; i < splitCurrentWord.length; i++) {
    	document.getElementById("puzzle").innerHTML = ;splitCurrentWord[i] = "_ ";
      	console.log(splitCurrentWord);*/


//Computer displaying the guessed letters
document.onkeyup = function(event) {

	//event.key containts the letter pressed
	//.push means to push it into the array "guess"
	guess.push(event.key);
    document.getElementById("lettersGuessed").innerHTML = guess;
    countdown--;
    document.getElementById("countdown").innerHTML = "Number of guesses remaining " + countdown;

}

//trying to countdown number of guesses leftq


function addWins() {
document.getElementById("wins").innerHTML = "Wins = " + wins++;

}

});
