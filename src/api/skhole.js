import axios from 'axios';

import { ROOT_URL } from '../settings.js';

const API_ROOT_URL = `${ROOT_URL}/api`;

export default {
  fetchCourses(token) {
    return axios.get(`${API_ROOT_URL}/courses?perPage=100&page=1`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  },
  login(email, password) {
    return axios.post(`${API_ROOT_URL}/auth/login`, { email, password });
  },
  getAuth(token) {
    return axios.get(`${API_ROOT_URL}/auth`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};
