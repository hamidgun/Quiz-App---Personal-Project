class UI {
  constructor() {
    this.quizBox = document.querySelector("#quiz-box");
    this.buttonBox = document.querySelector("#button-box");
    this.scoreBox = document.querySelector("#score-box");
    this.body = document.querySelector("#quiz-box #body");
    this.correctIcon = '<i class="bi bi-check-circle"></i>';
    this.inCorrectIcon = '<i class="bi bi-x-circle"></i>';
    this.btnNext = document.getElementById("btnNext");
    this.btnReplay = document.querySelector(".btn-replay");
    this.btnQuit = document.querySelector(".btn-quit");
    this.btnStart = document.querySelector(".btn-start");
    this.timeText = document.querySelector(".time-text");
    this.timeSecond = document.querySelector(".time-second");
    this.timeLine = document.querySelector(".time-line");
    this.quizTitle = document.querySelector(".quiz-title");
    this.quizList = document.querySelector(".quiz-list");
  }

  showQuizzes(quizArray) {
    const fragment = document.createDocumentFragment();

    quizArray.forEach((quiz) => {
      const quizCard = document.createElement("div");
      quizCard.classList.add("quiz-card");
      quizCard.innerHTML = `
        <img src="${quiz.quizImage}" alt="${quiz.quizTitle}"/>
        <div class="quiz-content">
                <h3>${quiz.quizTitle}</h3>
                <p>${quiz.quizDescription}</p>
                <button class="btn-start" data-quiz-id="${quiz.quizID}">Take Quiz</button>
              </div>
      `;
      fragment.appendChild(quizCard);
    });

    this.quizList.appendChild(fragment);
  }

  showQuestion(question) {
    this.body.innerHTML = "";

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("question-title");
    title.textContent = question.questionText;

    const optionList = document.createElement("div");
    optionList.classList.add("option-list");

    for (let [key, value] of Object.entries(question.answerChoices)) {
      const option = document.createElement("div");
      option.classList.add("option");
      option.addEventListener("click", optionSelected); // we will define function "optionSelected" in app.js

      const span = document.createElement("span");
      span.textContent = key + ")" + " " + value;

      option.appendChild(span);
      optionList.appendChild(option);
    }

    cardBody.appendChild(title);
    cardBody.appendChild(optionList);

    this.body.appendChild(cardBody);
  }

  disabledAllOption = function () {
    const options = document.querySelectorAll(".option");

    for (let option of options) {
      option.classList.add("disabled");
    }
  };

  showQuestionNumber = function (questionOrder, totalQuestion) {
    const tag = `<span>${questionOrder} / ${totalQuestion}</span>`;

    document.getElementById("q-counter").classList.add("question-count");
    document.querySelector(".question-count").innerHTML = tag;
  };

  showScore = function (correctAnswer, totalQuestion) {
    const tag = `You answered ${correctAnswer} out of ${totalQuestion} questions correctly.`;

    document.querySelector(".score-text").innerHTML = tag;
  };

  showTitle = function (quiz) {
    this.quizTitle.innerHTML = quiz.quizTitle;
  };
}
