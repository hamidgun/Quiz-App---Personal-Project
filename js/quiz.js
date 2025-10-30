class Quiz {
  constructor(quizID, quizTitle, questions, quizImage, quizDescription) {
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
