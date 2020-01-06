import api from './api';

const interceptor = api.interceptors.response.use((response) => {
  console.log('before response', response);
}, error => {
  console.log(error);
  if (error && error.response && error.response.status === 401) {
    // refresh token

  }
});

export default interceptor;