const quizList = [
  new Quiz(
    1,
    "JavaScript",
    jsQuestionList,
    "https://picsum.photos/300/200?random=1",
    "Test your JavaScript knowledge with this comprehensive quiz!"
  ),
  new Quiz(
    2,
    "HTML",
    htmlQuestionList,
    "https://picsum.photos/300/200?random=2",
    "How well do you know HTML? Take this quiz to find out!"
  ),
  new Quiz(
    3,
    "CSS",
    cssQuestionList,
    "https://picsum.photos/300/200?random=3",
    "Challenge yourself with this CSS styling quiz!"
  ),
  new Quiz(
    4,
    "Python",
    pythonQuestionList,
    "https://picsum.photos/300/200?random=4",
    "Test your Python programming skills!"
  ),
  new Quiz(
    5,
    "React",
    reactQuestionList,
    "https://picsum.photos/300/200?random=5",
    "How much do you know about React? Find out now!"
  ),
  new Quiz(
    6,
    "PHP",
    phpQuestionList,
    "https://picsum.photos/300/200?random=6",
    "Challenge your knowledge of PHP programming!"
  ),
];

const ui = new UI(); // UI is defined in ui.js
let selectedQuiz = null;

// Display all quizzes on page load
ui.showQuizzes(quizList);

// Add click event listener to all quiz cards
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-start")) {
    const quizID = parseInt(e.target.getAttribute("data-quiz-id"));
    if (quizID) {
      startQuiz(quizID);
    }
  }
});

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
  if (selectedQuiz.questions.length != selectedQuiz.questionIndex) {
    ui.showTitle(selectedQuiz); // This function is defined in ui.js
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
    ui.showScore(
      selectedQuiz.numberOfCorrectAnswer,
      selectedQuiz.questions.length
    );
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
  const question = selectedQuiz.getQuestion();

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
  ui.timeSecond.innerText = time;
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
