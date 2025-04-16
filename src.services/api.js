import axios from 'axios';

const api = axios.create({
  baseURL: 'http://145.223.26.242:81/api/v1/empresateste2/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
