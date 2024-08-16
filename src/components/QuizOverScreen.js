import React from 'react';

const QuizOverScreen = ({ score, onRetry, onCategorySelect }) => {
  return (
    <div>
      {score !== null ? (
        <>
          <h2>Your Score: {score}</h2>
          <button className="custom-button" onClick={onRetry}>Play Again</button>
        </>
      ) : (
        <>
          <h2>Time's up! You ran out of time. Try playing again.</h2>
          <button className="custom-button" onClick={onRetry}>Play Again</button>
        </>
      )}
      <button className="custom-button" onClick={onCategorySelect}>Choose Another Category</button>
    </div>
  );
};

export default QuizOverScreen;
