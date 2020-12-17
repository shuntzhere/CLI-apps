var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;

console.log(chalk.blueBright.bold("Welcome Human" ));
console.log(chalk.underline("Let's see if you know what you drink!!! \n"));

function play(question,answer) {
   var userAnswer = readlineSync.question(question);
  
  if (userAnswer.toUpperCase() === answer) {
    console.log(chalk.greenBright("You're Right!"));
    score = score + 1;

  } else
  {
    console.log(chalk.redBright("That's Incorrect!"));
    console.log(chalk.green(answer,"is the correct answer"));
  }

  console.log("current score: ", score);
  console.log("--------");
}


var questions = [{
  question : "How much of human body is Water? " ,
  answer : "60%" ,
},{
  question : "What is the IUPAC name of Water?  " ,
  answer : "Oxidane" ,
},{
  question : "Hot water freezes faster than Cold water , what's this effect called? " ,
  answer : "Mpemba effect" ,
},{
  question : "Name the unique property of water that led life to survive Ice ages. " ,
  answer : "Density",
},{
  question : "Name the only molecule that's more abundant than water in this universe. " ,
  answer : "Molecular Hydrogen",
}];

for(var i = 0; i < questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
  if(score == 3){
    console.log("You reached level 2!");
  }
}

console.log("You scored : " + score);
if(score == 5){
  console.log("You reached level 3!");
}
if(score < 2){
  console.log("You were at level 1! Try hard and score well!");
}
