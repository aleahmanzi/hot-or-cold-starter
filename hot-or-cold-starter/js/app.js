
$(document).ready(function(){
	
 var compNum = Math.floor(Math.random()*100);


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

 $("a.new").click(function(){
  $('#count').text(0);
  pastGuesses = [];
  $('#guessList').text(" ");
  $('userGuess').text("Enter Your Guess");
  $('#feedback').text('Make your Guess!');
});/// - reset for new game

$('form').submit(function(event){
  event.preventDefault();
  $('#guessList').text(guessHtml);
  $('#count').text(count + 1);
});/// - when form is completed run...

/// - new game button

 var userGuess = "";

  $('#guessButton').click(function(){
  	userGuess = $('#userGuess').val();
  	userGuess=parseInt(userGuess);
  	if (userGuess < 0 || userGuess > 100){
     alert("Please enter a number between 0 and 100.");
    }
    else {
      hotCold();
    };
}); /// - guess button click


  var userHelp = "";
  function hotCold() {
  	if (compNum == userGuess){
		  tellUser = "You Won. Click new game to play again!"
      $('#feedback').text(tellUser);
	} else if (Math.abs(compNum - userGuess)<=10){
  		tellUser = "hot!";
  		$('#feedback').text(tellUser);
  	} else if (Math.abs(compNum - userGuess)>10 && Math.abs(compNum-userGuess)<=20){
  		tellUser="getting warmer!";
  		$('#feedback').text(tellUser);
  	} else if (Math.abs(compNum - userGuess)>20 && Math.abs(compNum-userGuess)<=30){
  		tellUser="chilly!";
  		$('#feedback').text(tellUser);
  	} else {
  		tellUser="ice cold!";
  		$('#feedback').text(tellUser);
  	};
  	

  };  /// - telling user if guess is hot or cold

  var count = 0
  $('form').submit(function(){
    count++
  });  /// - count the number of user guesses

var pastGuesses = [];
var guessHtml = "";
$('#guessButton').click(function(){
  pastGuesses.push(userGuess);
  guessHtml = '';
    $.each(pastGuesses,function(guess,value){
      guessHtml +=  value + ' ';
    });
}); /// - track user guesses on page

}); 
