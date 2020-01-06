import axios from 'axios';
const api = axios.create({
  baseURL: 'https://centrade-api.herokuapp.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/ld+json'
  },
});

// api.interceptors.request.use((response) => {
//   return console.log('before request', response);
// }, error => {
//   console.log(error);
// });

export default api;
