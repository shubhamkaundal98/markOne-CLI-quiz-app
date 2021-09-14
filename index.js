var readlineSync = require('readline-sync');
const chalk = require("chalk");

var score =0;
var userName = readlineSync.question("What is your Name?");

console.log(
  chalk.yellowBright(
    `Hello ${userName}, Enter a / b / c to answer the questions. For each right answer, you'll get 1 point.\n`
  )
);

console.log("Welcome "+userName+ " to Do you know Shubham?");
function play(question,answer){

var userAnswer = readlineSync.question(question);

if(userAnswer.toUpperCase() === answer.toUpperCase()){

console.log(chalk.green("You're right!"));
score++;

}
else {
  console.log(chalk.red("You're Wrong!"));
}
console.log("Current Score : ",score);
console.log("-----------")
}

var questions = [{
  question: "Where do I live? \na.Himachal \nb.Delhi \nc.Bihar ",
  answer: "a",
  },
  {
    question:"My favourite Superhero\na.Ironman \nb.Batman \nc.Hulk ",
    answer:"a"
  },
  {
    question:"What is my age?\na.22 \nb.21 \nc.23 ",answer:"c"
  },
  {
    question:"What is my favourite color?\na.Black \nb.Red \nc.Blue ",answer:"a"
  },
  {
    question:"What is my favourite movie\na.Avengers \nb.Johnwick \nc.Matrix ",answer:"b"
  },]

for(var i=0;i<questions.length;i++){

  var currenQuestion = questions[i];

  play(currenQuestion.question,currenQuestion.answer);

}
console.log("Your final Score is: ",score);