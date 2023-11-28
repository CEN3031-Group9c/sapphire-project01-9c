import { server } from './hosts';
import { setUserState, getCurrUser } from './userState';

import axios from 'axios';

// return user token from strapi
export const postUser = async (body) => {
  const response = await axios.post(`${server}/auth/local`, body);
  return response;
};

// return token from local storage
export const getToken = () => {
  return localStorage.getItem('token') || null;
};

// remove the token and user from the local storage
export const removeUserSession = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  setUserState(getCurrUser());
};

// set the token and user from the local storage
export const setUserSession = (jwt, user) => {
  localStorage.setItem('token', jwt);
  localStorage.setItem('user', JSON.stringify(user));
  setUserState(getCurrUser());
};
