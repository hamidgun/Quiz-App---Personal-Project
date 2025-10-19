class Quiz {
  constructor(
    quizID,
    quizTitle,
    questions,
    quizImage = "https://picsum.photos/300/200",
    quizDescription = "Test your knowledge!"
  ) {
    this.quizID = quizID;
    this.quizTitle = quizTitle;
    this.questionIndex = 0;
    this.numberOfCorrectAnswer = 0;
    this.questions = questions;
    this.quizImage = quizImage;
    this.quizDescription = quizDescription;
  }
  getQuestion() {
    return this.questions[this.questionIndex];
  }
}
