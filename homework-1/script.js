'use strict';

let score = 0;
let quizAns;

//initialize function : reset the quiz question
const initQuiz = function () {
  let quizNum1 = Math.trunc(Math.random() * 20);
  let quizNum2 = Math.trunc(Math.random() * 20);
  let quizOperator = Math.trunc(Math.random() * 2);
  let quizAns = quizOperator === 0 ? quizNum1 + quizNum2 : quizNum1 - quizNum2;
  let quiz =
    quizOperator === 0
      ? `${quizNum1} + ${quizNum2} =`
      : `${quizNum1} - ${quizNum2} =`;
  return { quiz, quizAns };
};
//Displaying the quiz and get the correct answer of the question
const getQuiz = function (quizObj) {
  document.querySelector('.question').textContent = quizObj.quiz;
  quizAns = quizObj.quizAns;
};
getQuiz(initQuiz());

//Message Displaying
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//'Check' button click - Answer validation
document.querySelector('.check').addEventListener('click', function () {
  const playerAns = Number(document.querySelector('.guess').value);
  //Player doesn't input any answer
  if (!playerAns) {
    displayMessage('No Answer!');

    //player gets the correct answer
  } else if (playerAns === quizAns) {
    //update the score
    score += 20;
    document.querySelector('.score').textContent = score;

    //5 questions answered, player passes the quiz
    if (score >= 100) {
      getQuiz('HOORAY! You pass the quiz!');
      displayMessage('HOORAY! You pass the quiz!');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = '^_^';
      //less than 5 questions
    } else {
      displayMessage('Correct answer! Go next!');
      //initialize the next question
      getQuiz(initQuiz());
    }

    //player gets the wrong answer
  } else if (playerAns != quizAns) {
    score -= 10;
    document.querySelector('.score').textContent = score;
    displayMessage('Wrong answer T T, try again!');
  }
});

//replay button(reset the quiz)
document.querySelector('.replay').addEventListener('click', function () {
  score = 0;
  displayMessage('Start the Quiz!');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 0;
  getQuiz(initQuiz());
});
