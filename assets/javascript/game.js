// I need the computer to pick a character from Bob's Burgers
// I need the computer to display spaces equal to the number of letters in the character's name.

// I need the user to guess letters

// I need the computer to compare the guesses to the letters in the character's name
// If a letter matches the guess then I need the computer to reveal the matched letter.
// If the guess does not match a letter then I need to subtract one from available guesses left. 

// If the user reveals the character then the image changes, music sounds, and score increases and game restarts
// If the user runs out of guesses then the game restarts

// Handler when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function(){


  //Array of characters from which to pull the mystery word
  var characters = ["zeke", "linda", "andy", "frond", "gayle", "louise", "mickey", "mort", "tina", "bob",];

  var wins = 0; //win counter
  var word; //used for printing the word to the DOM
  var guess = []; //holds all our guess letters
  var answer = []; //for holding the underscores for each letter of the random word
  var countdown = 15; //how many guesses remaining

  //audio to play when the game is won
  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "assets/sound/linda.mp3");
  function play() {
    audioElement.play();
  };

  //selecting our random word from the characters array
  var currentWord = characters[Math.floor(Math.random() * characters.length)];

  //taking the ramdom word and assigning and underscore for each letter
  for (var i = 0; i < currentWord.length; i++) {
    answer[i] = "_ ";
  };

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
        };
      };

      //if the current word does not include the letter guessed, remove one from available guesses
      if (currentWord.includes(letter) || guess[i] === letter) {   
      }

      else {
        countdown--;
        document.getElementById("countdown").innerHTML = "Number of Guesses Remaining " + countdown;
      };

      if (countdown == 0) {
        reset();
        alert("You Lost!");
      };

      var n = answer.includes("_ ");

      if (n == false) {
        wins++;
        document.getElementById("wins").innerHTML = ("Wins = " + wins);
        document.getElementById("images").src = ("assets/images/" + currentWord + ".jpg");
        var upperCurrentWord = currentWord.toUpperCase();
        document.getElementById("word").innerHTML = (upperCurrentWord);
        play()
        reset();
      };
    };

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
      };
      word = answer.join(" ");
      document.getElementById("puzzle").innerHTML = word;
    };


  });
