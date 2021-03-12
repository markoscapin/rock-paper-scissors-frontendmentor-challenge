//Variables for sections on the page
var game = document.querySelector("#game");
var winOrLose = document.querySelector("#winOrLose");
var rulesOverview = document.querySelector("#rules-overview");

//ComputedStyle from sections on the page
var gameStyle = getComputedStyle(game);
var winOrLoseStyle = getComputedStyle(winOrLose);
var rulesOverviewStyle = getComputedStyle(rulesOverview);


//Circles inside game section
var gameCircles = document.querySelectorAll("#game .circle");

//Circle picked by player inside winOrLose 
var playerPicked = document.querySelector(".picked-container figure");
var playerPickedImg = document.querySelector(".picked-container figure img");

//Circle picked by House
var housePicked =  document.querySelector(".house-picked-container figure");
var housePickedImg = document.querySelector(".house-picked-container figure img");


