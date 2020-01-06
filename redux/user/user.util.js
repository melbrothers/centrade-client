import api from '../../src/api';

export const signInWithEmailAndPassword = async (email, password) => {
  const signInRequestUrl = '/login';
  return api.post(signInRequestUrl, JSON.stringify({
    "email": email,
    "password": password
  }));
};

export const signUpWithEmailAndPassword = async (email, password, companyName, abn) => {
  const signupRequestUrl = '/register';
  return api.post(signupRequestUrl, JSON.stringify({
    email,
    password,
    name: companyName,
    abn
  }));
};


export const getRefreshToken = async (token) => {
  const getTokenUrl = '/api/token/refresh';
  return api.post(getTokenUrl, JSON.stringify({
    refresh_token: token
  }));
}