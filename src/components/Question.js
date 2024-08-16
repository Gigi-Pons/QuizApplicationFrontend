// src/components/Question.js
import React, { useState } from 'react';

const Question = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      onAnswer(question.id, selectedOption);
    }
  };

  return (
    <div className="question-container">
      <h3>{question.questionTitle}</h3>
      <ul>
        <li>
          <label>
            <input
              type="radio"
              value={question.option1}
              name="answer"
              checked={selectedOption === question.option1}
              onChange={() => handleOptionChange(question.option1)}
            />
            {question.option1}
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value={question.option2}
              name="answer"
              checked={selectedOption === question.option2}
              onChange={() => handleOptionChange(question.option2)}
            />
            {question.option2}
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value={question.option3}
              name="answer"
              checked={selectedOption === question.option3}
              onChange={() => handleOptionChange(question.option3)}
            />
            {question.option3}
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              value={question.option4}
              name="answer"
              checked={selectedOption === question.option4}
              onChange={() => handleOptionChange(question.option4)}
            />
            {question.option4}
          </label>
        </li>
      </ul>
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default Question;
