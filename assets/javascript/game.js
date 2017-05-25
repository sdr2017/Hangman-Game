document.addEventListener("DOMContentLoaded", function(){
  // Handler when the DOM is fully loaded


//Array of characters computer can generate
var characters = ["zeke", "linda", "andy", "frond", "gayle", "louise", "mickey", "mort", "tina", "bob",];
var wins = 0;
var word;
var guess = [];
var answer = [];
var countdown = 15;
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/sound/linda.mp3");
function play() {
  audioElement.play();
}
console.log(audioElement);


var currentWord = characters[Math.floor(Math.random() * characters.length)];
//var splitCurrentWord = currentWord.split("");   

//taking the ramdom word and assigning and underscore for each letter
for (var i = 0; i < currentWord.length; i++) {
  answer[i] = "_ ";
}

//printing the underscore random word to the DOM
word = answer.join(" ");
document.getElementById("puzzle").innerHTML = word;


    //Computer displaying the guessed letters
    document.onkeyup = function(event) {

        //event.key is the key pressed
        var letter = event.key;

        //event.key contains the letters pressed
        //.push means to push it into the array "guess"
        guess.push(event.key);
        var lettersGuessed = guess.join(" ");
        var upperGuessed = lettersGuessed.toUpperCase();
        document.getElementById("lettersGuessed").innerHTML = upperGuessed;

        //if the current word includes the letter guessed, replace the space in the answer with the letter
        for (var i = 0; i < currentWord.length; i++) {
            if (currentWord[i] == letter) {
                answer[i] = letter;
                var show = answer.join(" ");
                var upperShow = show.toUpperCase();
                document.getElementById("puzzle").innerHTML = upperShow;
            }
        }
        //if the current word does not include the letter guessed, remove one from available guesses
        if (currentWord.includes(letter) || guess[i] === letter) {
            
        }

        else {
          countdown--;
            document.getElementById("countdown").innerHTML = "Number of Guesses Remaining " + countdown;
            console.log(guess);
            console.log(answer);
        }


      if (countdown == 0) {
        reset();
        alert("You Lost!");
      }

      var n = answer.includes("_ ");
      if (n == false) {
        wins++;
        document.getElementById("wins").innerHTML = ("Wins = " + wins);
        document.getElementById("images").src = ("assets/images/" + currentWord + ".jpg");
        var upperCurrentWord = currentWord.toUpperCase();
        document.getElementById("word").innerHTML = (upperCurrentWord);
        play()
        reset();
      } 
    }

    function reset() {
      guess = [];
      answer = [];
      countdown = 15;
      document.getElementById("lettersGuessed").innerHTML = "";
      document.getElementById("countdown").innerHTML = "Number of Guesses Remaining " + countdown;
      currentWord = characters[Math.floor(Math.random() * characters.length)];
      splitCurrentWord = currentWord.split("");    
      for (var i = 0; i < splitCurrentWord.length; i++) {
        answer[i] = "_ ";
      }
      word = answer.join(" ");
      document.getElementById("puzzle").innerHTML = word;
      console.log(word);
      console.log(currentWord);
    }


  });
