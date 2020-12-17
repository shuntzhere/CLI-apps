var readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;


var userName = readlineSync.question("Hello , What's your name? ");
console.log(chalk.blueBright.bold("Welcome " +userName + "!!!"));


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

var question = [
  {
    question: "What's my Full Name? ",
    answer: "MASOOM KUMAR"
  },
  {
    question: "Name my favourite tool. ",
    answer: "FIGMA"
  },
  {
    question: "What is my favourite anime? ",
    answer: "DEATHNOTE"
  },
  {
    question: "What's my favourite game? ",
    answer: "CHESS"
  },
  {
    question: "Which musical instrument do I play? ",
    answer: "GUITAR"
  },
  {
    question: "Where am I from? ",
    answer: "BOKARO"
  }];

  for (var i=0; i<question.length; i++) {
    var currentQuestion = question[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
  if(score <= 1){
    console.log(chalk.magenta.strikethrough("HEY,you got" ,chalk.white(score) ,"correct answer."));
  }
  else{
    console.log(chalk.bold("Nice,you got" ,chalk.cyan.underline(score) ,"correct answers."));
  }
