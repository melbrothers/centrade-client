import axios from 'axios';
const api = axios.create({
  baseURL: 'https://centrade-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/ld+json',
    'Accept': 'application/ld+json'
  },
});

export default api;
