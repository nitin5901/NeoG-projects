var readlineSync = require('readline-sync');
var username= readlineSync.question("May I have your name? ");
console.log("Welcome " + username + " to #doYouKnowNitin");
var score=0;
function qna(question, answer){
  var useranswer= readlineSync.question(question);
  if(useranswer.toUpperCase()===answer){
    console.log("You got it RIGHT!");
    console.log("Current Score: "+ ++score);
  }
  else{
    console.log("You got it WRONG!");
    console.log("Current Score: "+ score);
  }
  console.log("-.-.-.-.-.-.-.-.");
}
qna("What is my age ? ","21");
qna("My favourite sport ?", "BADMINTON" );
qna("Where do i live(cityname) ? ", "NEW DELHI");

console.log("YAY!! You SCORED: "+score );

