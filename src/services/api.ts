import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Backend API URL'si
});

export default api;
