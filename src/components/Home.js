import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Quiz App!</h1>
      <p>Test your knowledge across various categories and see how you rank!</p>
      {/* Link to navigate to the Quiz component */}
      <Link to="/quiz">
        <button className="custom-button">Start Quiz</button>
      </Link>
    </div>
  );
};

export default Home;
