const quizList = [
  new Quiz(1, "JavaScript", jsQuestionList),
  new Quiz(2, "HTML", htmlQuestionList),
  new Quiz(3, "CSS", cssQuestionList),
  new Quiz(4, "Python", pythonQuestionList),
  new Quiz(5, "React", reactQuestionList),
  new Quiz(6, "PHP", phpQuestionList),
];

const ui = new UI(); // UI is defined in ui.js
let selectedQuiz = null;

function selectQuiz(quizID) {
  selectedQuiz = quizList.find((quiz) => quiz.quizID === quizID);
  if (selectedQuiz) {
    selectedQuiz.questionIndex = 0;
    selectedQuiz.numberOfCorrectAnswer = 0;
    console.log(`Selected Quiz: ${selectedQuiz.quizTitle}`);
    return true;
  }
  console.error("Quiz not found!");
  return false;
}

// Default quiz selection

function startQuiz(quizID) {
  if (selectQuiz(quizID)) {
    ui.btnStart.click();
  }
}

ui.btnNext.addEventListener("click", function () {
  if (selectedQuiz.htmlQuestionList.length != selectedQuiz.questionIndex) {
    ui.showQuestion(selectedQuiz.getQuestion());
    ui.showQuestionNumber(
      selectedQuiz.questionIndex + 1,
      selectedQuiz.questions.length
    ); // This function is defined in ui.js
    startTimer(9); // defined below
    startTimerLine(); // defined below
    ui.btnNext.classList.remove("show");
  } else {
    // Quiz is finished.
    ui.showScore(quiz.numberOfCorrectAnswer, quiz.questions.length);
    ui.quizBox.classList.remove("active");
    ui.scoreBox.classList.add("active");
  }
});

ui.btnStart.addEventListener("click", function () {
  startTimer(9);
  startTimerLine();
  ui.btnNext.click();
  ui.quizBox.classList.add("active");
  ui.buttonBox.classList.remove("active");
});

ui.btnQuit.addEventListener("click", function () {
  window.location.reload();
});

ui.btnReplay.addEventListener("click", function () {
  selectedQuiz.questionIndex = 0;
  selectedQuiz.numberOfCorrectAnswer = 0;
  ui.scoreBox.classList.remove("active");
  ui.btnStart.click();
  ui.showQuestion(selectedQuiz.getQuestion());
  ui.showQuestionNumber(
    selectedQuiz.questionIndex + 1,
    selectedQuiz.questions.length
  );
});

function optionSelected(e) {
  // this function is bound to an event(click) which is in ui.js

  const answer = e.currentTarget.textContent[0];
  const question = quiz.getQuestion();

  if (question.checkAnswer(answer)) {
    selectedQuiz.numberOfCorrectAnswer += 1;
    e.target.classList.add("correct");
    e.target.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    e.target.classList.add("incorrect");
    e.target.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
  }

  selectedQuiz.questionIndex += 1;

  ui.disabledAllOption(); // this function is defined in ui.js

  clearInterval(counter);

  clearInterval(counterLine);

  ui.btnNext.classList.add("show");
}

let counter;

function startTimer(time) {
  ui.timeSecond.innerText = 10;
  clearInterval(counter);
  counter = setInterval(timer, 1000);

  function timer() {
    ui.timeSecond.innerText = time;
    time--;

    if (time < 0) {
      clearInterval(counter);
      ui.disabledAllOption();
      selectedQuiz.questionIndex += 1;

      ui.btnNext.classList.add("show");
    }
  }
}

let counterLine;

function startTimerLine() {
  clearInterval(counterLine);

  let line_width = 0;

  counterLine = setInterval(timer, 20); // built-in JS function.

  function timer() {
    line_width += 1.1;

    ui.timeLine.style.width = line_width + "px";

    if (line_width > 549) {
      clearInterval(counterLine); // built-in JS function.
    }
  }
}
