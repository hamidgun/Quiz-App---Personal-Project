class Quiz {
  constructor(quizID, quiztitle, questions) {
    this.quizID = quizID;
    this.quiztitle = quiztitle;
    this.questionIndex = 0;
    this.numberOfCorrectAnswer = 0;
    this.questions = questions;
  }
  getQuestion() {
    return this.questions[this.questionIndex];
  }
}
