import React, { useEffect } from 'react';

const QuizTimer = ({ setTime, quizStarted, quizOver, setQuizOver }) => {
  useEffect(() => {
    if (quizStarted && !quizOver) {
      const timer = setInterval(() => {
        setTime(prevTime => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(timer);
            setQuizOver(true); // Mark the quiz as over
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [quizStarted, quizOver, setTime, setQuizOver]);

  return null;
};

export default QuizTimer;
