document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded


//Array of characters computer can generate
var characters = ["linda", "tina", "louise", "andy", "mickey"];
var wins = 0;

var word;
var guess = [];
var answer = [];
var countdown = 15;
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

//printing the underscore random word to the DOM
        word = answer.join(" ");
          document.getElementById("puzzle").innerHTML = word;
	

//Computer displaying the guessed letters
document.onkeyup = function(event) {

//event.key is the key pressed
var letter = event.key;
var letterGuessInWord = splitCurrentWord.indexOf(letter);

  //event.key contains the letters pressed
  //.push means to push it into the array "guess"
	guess.push(event.key);
    document.getElementById("lettersGuessed").innerHTML = guess;
    
        //if the guess is correct, add it to the DOM
        if (currentWord.includes(letter)) {
        answer.splice(letterGuessInWord, 1, letter);
        document.getElementById("puzzle").innerHTML = answer;
          }

  for (var i = 0; i < answer.length; i++)
    var n = answer.includes("_ ");
        if (n == false) {
          alert("you won!")
          } 
           console.log(word);
           console.log(answer);
           console.log(n);
           }





    //counting down the number of guesses remaining
    countdown--;
    document.getElementById("countdown").innerHTML = "Number of guesses remaining " + countdown;





function addWins() {
document.getElementById("wins").innerHTML = "Wins = " + wins++;

}

});
