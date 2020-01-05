import axios from 'axios';
const api = axios.create({
  baseURL: 'https://centrade-api.herokuapp.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/ld+json',
    'Accept': 'application/ld+json'
  },
});

export default api;
