import React, { useState, useEffect } from 'react';
import Question from './Question';
import CategorySelection from './CategorySelection';
import QuizHeader from './QuizHeader';
import QuizTimer from './QuizTimer';
import QuizOverScreen from './QuizOverScreen';
import { fetchAllQueries, submitQuiz } from '../services/api';

const Quiz = () => {
  const [allQueries, setAllQueries] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);
  const [categorySelected, setCategorySelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [time, setTime] = useState(10);
  const [quizOver, setQuizOver] = useState(false);

  useEffect(() => {
    if (quizStarted) {
      fetchAllQueries(selectedCategory).then(data => {
        setAllQueries(data);
      }).catch(error => {
        console.error('Error fetching all queries:', error);
      });
    }
  }, [quizStarted, selectedCategory]);

  const handleAnswer = (questionId, selectedOption) => {
    const newAnswer = { id: questionId, response: selectedOption };
    setUserAnswers([...userAnswers, newAnswer]);

    if (currentQuestionIndex < allQueries.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTime(10); // Reset timer for the next question
    } else {
      submitQuizResults([...userAnswers, newAnswer]);
    }
  };

  const submitQuizResults = (answers) => {
    submitQuiz(1, answers).then(response => {
      console.log('Quiz Score:', response.data);
      setScore(response.data);
      setQuizStarted(false); // Reset quiz state
    }).catch(error => {
      console.error('Error submitting quiz:', error);
    });
  };

  const startQuiz = (category) => {
    setCategorySelected(true); // Move to the quiz once the category is selected
    setSelectedCategory(category);
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(null);
    setTime(10); // Start timer
    setQuizOver(false); // Reset the quizOver state
  };

  let content;
  if (!quizStarted && !categorySelected) {
    content = <CategorySelection onSelectCategory={startQuiz} />;
  } else if (!quizStarted && categorySelected) {
    content = (
      <div>
        <button className="custom-button" onClick={() => startQuiz(selectedCategory)}>Start Quiz</button>
        {score !== null && <h2>Your Score: {score}</h2>}
      </div>
    );
  } else if (quizOver) {
    content = (
      <QuizOverScreen
        score={score}
        onRetry={() => setCategorySelected(false)}
        onCategorySelect={() => setCategorySelected(false)}
      />
    );
  } else if (allQueries.length > 0) {
    const currentQuestion = allQueries[currentQuestionIndex];
    content = (
      <Question
        question={currentQuestion}
        onAnswer={handleAnswer}
      />
    );
  } else {
    content = <li>No queries found</li>;
  }

  return (
    <div className="quiz-container">
      {quizStarted && !quizOver && (
        <>
          <QuizHeader
            time={time}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={allQueries.length}
          />
          <QuizTimer
            setTime={setTime}
            quizStarted={quizStarted}
            quizOver={quizOver}
            setQuizOver={setQuizOver}
          />
        </>
      )}
      <div className="custom-div">
        <h1 className="responsive-text">Quiz</h1>
        {quizStarted && !quizOver && <h2 className="responsive-text">Question {currentQuestionIndex + 1}</h2>}
        <div style={{ color: 'black' }}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
