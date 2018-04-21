$(document).ready(function() {
//Initialize variables for default value
var tScore_init = 0;
var yScore_init = 0;
var initWins = 0;
var initLosses = 0;
var gStatInit = "Press start!";
//Game object variables
var tScore = 0;
var yScore = 0;
var crystOneVar = 0;
var crystTwoVar = 0;
var crystThreeVar = 0;
var crystFourVar = 0;
var resStatus = false;

//On click event
$("#cryst1").on("click", function() {
    //Alert if user can't click Start Game button
    if(tScore === 0) {
        alert("Please press button Start Game before New Game!");
    }
    calculateScore();
    //Generate random number
    if(crystOneVar === 0 && tScore > 0){
        var crystOneNumbRnd = Math.floor(Math.random() * 9) + 1;
        crystOneVar = crystOneNumbRnd;
        yScore = yScore + crystOneVar;
        $("#your_score").html(yScore);
    //Count resetter
    } else if(resStatus === true){
        yScore = 0;
        $("#your_score").html(yScore);
        resStatus = false;
    //Count score
    } else {
        yScore = yScore + crystOneVar;
        console.log(crystOneVar);
        $("#your_score").html(yScore);
    }
});
$("#cryst2").on("click", function() {
    if(tScore === 0) {
        alert("Please press button Start Game before New Game!");
    }
    calculateScore();
    if(crystTwoVar === 0 && tScore > 0){
        var crystTwoNumbRnd = Math.floor(Math.random() * 9) + 1;
        crystTwoVar = crystTwoNumbRnd;
        yScore = yScore + crystTwoVar;
        $("#your_score").html(yScore);
    } else if (resStatus === true) {
        yScore = 0;
        $("#your_score").html(yScore);
        resStatus = false;
    } else {
        yScore = yScore + crystTwoVar;
        console.log(crystTwoVar);
        $("#your_score").html(yScore);
    }
});
$("#cryst3").on("click", function() {
    if(tScore === 0) {
        alert("Please press button Start Game before New Game!");
    }
    calculateScore();
    if(crystThreeVar === 0 && tScore > 0){
        var crystThreeNumbRnd = Math.floor(Math.random() * 9) + 1;
        crystThreeVar = crystThreeNumbRnd;
        yScore = yScore + crystThreeVar;
        $("#your_score").html(yScore);
    } else if (resStatus === true) {
        yScore = 0;
        $("#your_score").html(yScore);
        resStatus = false;
    } else {
        yScore = yScore + crystThreeVar;
        console.log(crystThreeVar);
        $("#your_score").html(yScore);
    }
});
$("#cryst4").on("click", function() {
    if(tScore === 0) {
        alert("Please press button Start Game before New Game!");
    }
    calculateScore();
    if(crystFourVar === 0 && tScore > 0){
        var crystFourNumbRnd = Math.floor(Math.random() * 9) + 1;
        crystFourVar = crystFourNumbRnd;
        yScore = yScore + crystFourVar;
        $("#your_score").html(yScore);
    } else if (resStatus === true) {
        yScore = 0;
        $("#your_score").html(yScore);
        resStatus = false;
    } else {
        yScore = yScore + crystFourVar;
        console.log(crystFourVar);
        $("#your_score").html(yScore);
    }
});
$("#start_game").on("click", function() {
    makeRndT();
    var gStatNew = "Good luck!";
    yScore = 0;
    $("#gstat").html(gStatNew);
    $("#your_score").html(yScore);
});

//Display values
$("#total_score").html(tScore_init);
$("#your_score").html(yScore_init);
$("#wins").html(initWins);
$("#losses").html(initLosses);
$("#gstat").html(gStatInit);

//Random generator for total game score
function makeRndT() {
    var totalNumbRnd = Math.floor(Math.random() * 49) + 21;
    tScore = totalNumbRnd;
    $("#total_score").html(totalNumbRnd);
  }

function calculateScore() {
    if(tScore < yScore) {
        alert("You looser!");
        initLosses++;
        $("#losses").html(initLosses);
        $("#gstat").html("You loose!");
        resStatus = true;
        makeRndT();
    } else if(tScore === yScore && tScore > 0) {
        alert("You winner!");
        initWins++;
        $("#wins").html(initWins);
        $("#gstat").html("You win!");
        resStatus = true;
        makeRndT();
    }
}

});