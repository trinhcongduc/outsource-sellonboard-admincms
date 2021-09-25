import axios from 'axios';
import { NotificationManager } from 'react-notifications';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  }
});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  console.log('token', token);
  // Do something before request is sent
  if (token) {
    config.headers.common['authentication'] = `Bearer ${token}`;
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

api.interceptors.response.use(
  response => response,
  error => {
    console.log("=====>",error);
    if (error.response.status === 401) {
      NotificationManager.error("Session expired");
      // remove expired session_id and reload
      localStorage.removeItem('token');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
    return Promise.reject(error);
  }
);

export default api;
