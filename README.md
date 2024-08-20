# Quiz Application Frontend

## Overview
THis quiz application is a simple and straightforward quiz game that lets you choose among 3 categories, Animals, Tech, and Outer Space.  You answer one question at a time, once you choose from the multiple answers, you click next and move to the next question.  
However, if you don't answer in time, the game ends.  At the end, after you've tackled all the answers, your score pops up on the screen.

Please see the live [application](https://quiz-app-2-fd3d9eb4e6e5.herokuapp.com).

## State Management
State management plays a critical role in maintaining the app's interactivity and user experience.  The app uses React's ```useState``` and ```useEffect``` hooks to handle and manage the state throughout the quiz process. 
### **State variables**
The app uses state variables like current ```currentQuestionIndex```, ```userAnswers```, and ```score``` to track the user's progress through the quiz.  These variables ensure that the app accurately displays the current question, records the user's responses, and calcuates the final score.
The ```useEffect``` hook is used to trigger side effects, such as fetching quiz questions based on the selected category and resetting the timer.


## Component Architecture
A modular component architecture was chosen for this app.  This approach ensures that each piece of functionality is encapsulated in its own component, making the app easier to maintain, extend, and test.
### **App.js**
Acts as the main entry point of the application.  It handles routing using 'react-router-dom' to navigate between the ```Home``` and ```Quiz``` components. 
### **Home.js**
This is the initial landing page where users are welcomed and can start the quiz.  It includes a button that links to the ```Quiz``` component.
### **Quiz.js**
This is the core component that manages the quiz flow.  It integrates several sub-components to create a cohesive quiz experience. 
  * **QuizHeader**: displays current question number and total number of questions.
  * **QuizTimer**: displays the countdown timer for each question.
  * **Question**: renders current quiz question along with multiple-choice options.
  * **QuizOverScreen**: displays the final score and provides option to restart the quiz.
  * **CategorySelection**: allows users to select a category before starting the quiz.


## API Integration
I integrated the frontend with the backend through custom-build RESTful APIs to ensure seamless communication between the frontend and the backend, particularly for fetching quiz questions and submitting the quiz results.
### **Fetch questiosn**
When the user selects a category and starts the quiz, the frontend makes an API call to retreive the relevant quiz questions from the bakcend.  The function ```fetchAllQueries``` sends an HTTP GET request to the backend, retrieving the set of questions that match the selected category.
### **Submit results**
After the user answers all the questions, the frontend sends the collected answers to the backend for scoring.  The function ```submitQuiz``` sends an HTTP POST request with the user's responses.

