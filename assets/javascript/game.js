document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded


//Array of characters computer can generate
var characters = ["Bob", "Linda", "Tina", "Gene", "Louise", "Andy", "Ollie", "Tammy", "Zeke", "Mickey"];
var wins = 0;

var word;
//these are empty arrays
var guess = [];
var answer = [];

var countdown = 15;

//Computer randomly generating word from character array and printing in DOM
var currentWord;
	function wordGenerate() {
		currentWord = characters[Math.floor(Math.random() * characters.length)];
    }
  wordGenerate();

//splitting the random word into an array
var splitCurrentWord = currentWord.split("");
	
//taking the ramdom word and assigning and underscore for each letter
    for (var i = 0; i < splitCurrentWord.length; i++) {
      answer[i] = "_ ";
  	}
            console.log(splitCurrentWord)

//printing the underscore random word to the DOM
word = answer.join(" ");
  document.getElementById("puzzle").innerHTML = word;
	

//Computer displaying the guessed letters
document.onkeyup = function(event) {

	//event.key containts the letter pressed
	//.push means to push it into the array "guess"
	guess.push(event.key);
    document.getElementById("lettersGuessed").innerHTML = guess;
    countdown--;
    document.getElementById("countdown").innerHTML = "Number of guesses remaining " + countdown;
 
    if (guess[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }
    
console.log(guess);
}



function addWins() {
document.getElementById("wins").innerHTML = "Wins = " + wins++;

}

});
