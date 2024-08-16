import React from 'react';

const QuizHeader = ({ time, currentQuestionIndex, totalQuestions }) => {
  return (
    <div className="header">
      <div className="timer">
        Timer: <span id="time">{time}</span>
      </div>
      <div className="question-count">
        <span id="question-number">{currentQuestionIndex + 1}</span> of {totalQuestions}
      </div>
    </div>
  );
};

export default QuizHeader;
