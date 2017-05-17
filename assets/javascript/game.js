//Array of characters computer can generate
var characters = ["Bob", "Linda", "Tina", "Gene", "Louise", "Andy", "Ollie", "Tammy", "Zeke", "Mickey"];
var wins = 0;
var guess;

var currentWord = characters[Math.floor(Math.random() * characters.length)];



function addWins() {
document.getElementById("wins").innerHTML = "Wins = " + wins++;

}

function addWins() {
document.getElementById("wins").innerHTML = "Wins = " + wins++;

}
document.onkeyup = function guesses() {
	var guess = event.key;
    document.getElementById("lettersGuessed").innerHTML = guess;
}

console.log(characters[4]);

