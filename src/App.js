// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Quiz from './components/Quiz';
import Home from './components/Home';
import './App.css'; // Optional: For adding some basic styles

function App() {
  return (
/*     <div className = "App">
      <TestFetch />
    </div> */
     <Router>
      <div className="App">
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/quiz" element={<Quiz />} />
            /* You can add more routes here if you have more pages/components
          </Routes>
        </main> 
      </div>
    </Router> 
  );
}

export default App;
