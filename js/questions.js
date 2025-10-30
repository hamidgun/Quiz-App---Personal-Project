class Question {
  constructor(questionText, answerChoices, correctAnswer) {
    this.questionText = questionText;
    this.answerChoices = answerChoices;
    this.correctAnswer = correctAnswer;
  }
  checkAnswer(answer) {
    return answer === this.correctAnswer;
  }
}
