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

// Mobile menu toggle functionality
const dropdownBtn = document.querySelector(".dropdown-btn");
const navMenu = document.querySelector(".nav-menu");

if (dropdownBtn) {
  dropdownBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-container")) {
      navMenu.classList.remove("active");
    }
  });

  // Close menu when clicking a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
    });
  });
}

// Display all quizzes on page load (only on index page)
if (ui.quizList) {
  ui.showQuizzes(quizList);
}

// Check if we're on quiz.html and auto-start the quiz
window.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const quizID = parseInt(urlParams.get("id"));

  if (quizID && ui.quizBox && !ui.quizList) {
    // We're on quiz.html with a quiz ID
    startQuiz(quizID);
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
    startTimer(10);
    startTimerLine();
    ui.btnNext.click();
    ui.quizBox.classList.add("active");
    // ui.appContainer.classList.add("active");
    // ui.quizContainer.classList.remove("active");
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
    startTimer(10); // defined below
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

ui.btnQuit.addEventListener("click", function () {
  window.location.href = "index.html";
});

ui.btnReplay.addEventListener("click", function () {
  selectedQuiz.questionIndex = 0;
  selectedQuiz.numberOfCorrectAnswer = 0;
  ui.scoreBox.classList.remove("active");
  startQuiz(selectedQuiz.quizID);
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

  // Use timeout to check immediately when time runs out
  const startTime = Date.now();
  const duration = time * 1000;

  counter = setInterval(timer, 100); // Check every 100ms for better precision

  function timer() {
    const elapsed = Date.now() - startTime;
    const remaining = Math.ceil((duration - elapsed) / 1000);

    if (remaining <= 0) {
      clearInterval(counter);
      ui.timeSecond.innerText = 0;
      ui.disabledAllOption();
      selectedQuiz.questionIndex += 1;
      ui.btnNext.classList.add("show");
    } else {
      ui.timeSecond.innerText = remaining;
    }
  }
}

let counterLine;

function startTimerLine() {
  clearInterval(counterLine);

  let line_width = 0;
  const maxWidth = ui.quizBox.offsetWidth; // Get the actual width of the quiz box
  const timerDuration = 10000; // 10 seconds in milliseconds
  const intervalTime = 20; // Update every 20ms
  const increment = maxWidth / (timerDuration / intervalTime); // Calculate increment per interval

  counterLine = setInterval(timer, intervalTime);

  function timer() {
    line_width += increment;

    ui.timeLine.style.width = line_width + "px";

    if (line_width >= maxWidth) {
      clearInterval(counterLine);
    }
  }
}
