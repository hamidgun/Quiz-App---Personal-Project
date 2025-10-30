// MockAPI URL for quizzes
const API_URL = "https://69036a31d0f10a340b24238d.mockapi.io/quizzes";

const ui = new UI(); // UI is defined in ui.js
let selectedQuiz = null;
let quizList = [];

// Fetch quizzes from MockAPI
async function fetchQuizzes() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Convert API data to Quiz instances with Question instances
    quizList = data.map((quiz) => {
      const questions = quiz.questions.map(
        (q) => new Question(q.questionText, q.answerChoices, q.correctAnswer)
      );

      return new Quiz(
        quiz.id,
        quiz.title,
        questions,
        quiz.image,
        quiz.description
      );
    });

    console.log(`Loaded ${quizList.length} quizzes from API`);
    return quizList;
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    return [];
  }
}

// Dropdown menu functionality
const dropdownBtn = document.querySelector(".dropdown-btn");
const navMenu = document.querySelector(".nav-menu");

if (dropdownBtn) {
  dropdownBtn.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-container")) {
      navMenu.classList.remove("active");
    }
  });

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
    });
  });
}

const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-form input");
const searchSuggestions = document.querySelector(".search-suggestions");

if (searchForm && searchInput && searchSuggestions) {
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
  });

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();

    if (searchTerm && quizList.length > 0) {
      const filtered = quizList.filter((quiz) => {
        return (
          quiz.quizTitle.toLowerCase().includes(searchTerm) ||
          quiz.quizDescription.toLowerCase().includes(searchTerm)
        );
      });

      showSearchSuggestions(filtered);
    } else {
      hideSearchSuggestions();
    }
  });

  // Close suggestions when clicking outside
  document.addEventListener("click", function (e) {
    if (!searchForm.contains(e.target)) {
      hideSearchSuggestions();
    }
  });
}

function showSearchSuggestions(quizzes) {
  if (quizzes.length === 0) {
    searchSuggestions.innerHTML =
      '<div class="search-suggestion-item"><p>No quizzes found</p></div>';
    searchSuggestions.classList.add("active");
    return;
  }

  searchSuggestions.innerHTML = "";

  quizzes.forEach((quiz) => {
    const item = document.createElement("div");
    item.classList.add("search-suggestion-item");
    item.innerHTML = `
      <h4>${quiz.quizTitle}</h4>
    `;

    item.addEventListener("click", function () {
      window.location.href = `quiz.html?id=${quiz.quizID}`;
    });

    searchSuggestions.appendChild(item);
  });

  searchSuggestions.classList.add("active");
}

function hideSearchSuggestions() {
  searchSuggestions.classList.remove("active");
  searchSuggestions.innerHTML = "";
}

function filterQuizzes(searchTerm) {
  const filtered = quizList.filter((quiz) => {
    return (
      quiz.quizTitle.toLowerCase().includes(searchTerm) ||
      quiz.quizDescription.toLowerCase().includes(searchTerm)
    );
  });
  ui.showQuizzes(filtered);
}

window.addEventListener("DOMContentLoaded", async function () {
  // Fetch quizzes from API first
  await fetchQuizzes();

  // Show quizzes if we're on index.html
  if (ui.quizList) {
    ui.showQuizzes(quizList);
  }

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
  const intervalTime = 20;
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
