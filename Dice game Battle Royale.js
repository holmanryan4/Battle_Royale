"use strict";
function startGame(){
   
    var player1 = prompt("what is your name, player 1?");
    var player2 = prompt("What is your name, player 2?");
    var player3 = prompt("what is your name, player 3?");
    var player4 = prompt("What is your name, player 4?");
    var player5 = prompt("what is your name, player 5?");
    var player6 = prompt("What is your name, player 6?");
    var player7 = prompt("what is your name, player 7?");
    var player8 = prompt("What is your name, player 8?");
    var player9 = prompt("what is your name, player 9?");
    var player10 = prompt("What is your name, player 10?");
    
    console.log(players);
    let die4 = document.getElementById("die4"); 
    let die6 = document.getElementById("die6");  
    let die8 = document.getElementById("die8");  
    let die10 = document.getElementById("die10");  
    let die12 = document.getElementById("die12");
    let die20 = document.getElementById("die20");  
        
    die4.innerHTML = d4;
    die6.innerHTML = d6;
    die8.innerHTML = d8;
    die10.innerHTML = d10;
    die12.innerHTML = d12;
    die20.innerHTML = d20;
    let diceTotal = d4 + d6 + d8 + d10 + d12 + d20;
    status.innerHTML = "You rolled "+ diceTotal + " . ";
    
   
    
}

function rollDice4(){
 
     let d4 = Math.floor(Math.random() * 4) + 1;
}
function rollDice6(){
 
    let d6 = Math.floor(Math.random() * 6) + 1;
}
function rollDice8(){
 
    let d8 = Math.floor(Math.random() * 8) + 1;
}
function rollDice10(){
 
    let d10 = Math.floor(Math.random() * 10) + 1;
}
function rollDice12(){
 
    let d12 = Math.floor(Math.random() * 12) + 1;
}
function rollDice20(){
 
    let d20 = Math.floor(Math.random() * 20) + 1;
}
function rollAllDice(){
    rollDice4();
    rollDice6();
    rollDice8();
    rollDice10();
    rollDice12();
    rollDice20();
   
   
}