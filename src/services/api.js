import axios from 'axios';

const API_URL = 'https://quiz-app-1-2b814a19cd13.herokuapp.com/quiz'; // Ensure this matches your backend URL

export const fetchAllQueries = (category) => {
  return axios.get(`${API_URL}/get/${category}`)
    .then(response => {
      console.log('Queries fetched:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching queries:', error);
      throw error;
    });
};

export const fetchQueriesByType = (type) => {
  return axios.get(`${API_URL}/type/${type}`)
    .then(response => {
      console.log('Queries fetched by type:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching queries by type:', error);
      throw error;
    });
};

export const createQuery = (query) => {
  return axios.post(`${API_URL}/create`, query)
    .then(response => {
      console.log('Query created:', response.data);
      return response.data;
    })
    .catch(error => {
      console.error('Error creating query:', error);
      throw error;
    });
};

export const submitQuiz = (quizId, responses) => {
  return axios.post(`${API_URL}/submit/${quizId}`, responses);
};
