var readLine = require("readline-sync");
var chalk = require("chalk");

console.log(chalk.red.bold.underline("Are you a Potterhead?\n\n"));

var name = readLine.question(chalk.whiteBright("Enter your Wizard Name:"));
console.log("\n\n");

var questions = [
  {
    question: "The entrance to the Hufflepuff Common Room is near the Hogwarts kitchens?\n\ta)True\n\tb)False\n",
    answer: "a"
  },
  {
    question: "What is a non-magical person called?",
    answer: "Muggle"
  },
  {
    question: "Whats the first name of Ron Weasley's sister?",
    answer: "Ginny"
  },
  {
    question: "What is the name of Hagrid's dragon?",
    answer: "Norbert"
  },
  {
    question: "What is the real name of You Know Who?",
    answer: "Tom Marvolo Riddle"
  }
]

var housePoints = 0;
var highScores = [
  {
    player: "Steeve",
    points: "5"
  },
  {
    player: "Hagrid",
    points: "4"
  }
]


function quiz(question, answer) {
  var attempt = readLine.question(chalk.whiteBright(question));
  if (attempt.toUpperCase() === answer.toUpperCase()) {
    housePoints = housePoints + 1;
    console.log(chalk.green("You got it right."));
    console.log(chalk.yellow("Current Point ="), housePoints);
    console.log("\n");
  }
  else {
    console.log(chalk.red("You are wrong. The answer is,"), answer);
    console.log("\n");
  }
}

for (var i = 0; i < questions.length; i++) {
  quiz(questions[i].question, questions[i].answer);
}

console.log("Your Earned Points = ", housePoints);
console.log(chalk.bgGreen("\nx-----------Leader Board-----------x\n"));
console.log(chalk.bgBlue.black("\nName\t\tPoints"));
for (var j = 0; j < highScores.length; j++) {
  console.log(chalk.magentaBright(highScores[j].player), "\t\t", chalk.yellowBright(highScores[j].points));
}


console.log(chalk.bgYellow("\n\nIf you have scored above than the players in the high score, please do take a screenshot and mail me at ajaykumarmkaju@gmail.com. I will update the leaderboard.\n\n"));