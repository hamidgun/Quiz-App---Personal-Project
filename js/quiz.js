class Quiz {
  constructor(quizID, quizTitle, questions) {
    this.quizID = quizID;
    this.quizTitle = quizTitle;
    this.questionIndex = 0;
    this.numberOfCorrectAnswer = 0;
    this.questions = questions;
  }
  getQuestion() {
    return this.questions[this.questionIndex];
  }
}
