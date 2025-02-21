// import axios from 'axios';

// //const API_BASE_URL = 'http://localhost:8080/api';
// const API_BASE_URL = 'http://localhost:8080/users';

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Add token to requests if available
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export const register = async (userData) => {
//   //return api.post('/auth/register', userData);
//   return api.post('/signup', userData);
// };

// export const login = async (credentials) => {
//   //return api.post('/auth/login', credentials);
//   return api.post('/signin', credentials);
// };

// export const forgotPassword = async (data) => {
//   return api.post('/auth/forgot-password', data);
// };

// export const verifyOtp = async (data) => {
//   return api.post('/auth/verify-otp', data);
// };

// export const resetPassword = async (data) => {
//   return api.post('/auth/reset-password', data);
// };

// import axios from 'axios';

// //const API_BASE_URL = 'http://localhost:8080/auth';
// const API_BASE_URL = 'http://localhost:8080/users'; // Correct base URL

// const api = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// // Add token to requests if available
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('token');
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// export const register = async (userData) => {
//   return api.post('/signup', userData);
//   //return api.post('/auth/register', userData);
// };

// export const login = async (credentials) => {
//   return api.post('/signin', credentials);
//   //return api.post('/login', credentials);
// };

// export const forgotPassword = async (data) => {
//   return api.post('/forgot-password', data);
// };

// export const verifyOtp = async (data) => {
//   return api.post('/verify-otp', data);
// };

// export const resetPassword = async (data) => {
//   return api.post('/reset-password', data);
// };

import axios from 'axios';

const API_BASE_URL = 'http://localhost:8082/users'; 

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available (excluding /signup endpoint)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  // Only add token for requests other than signup
  if (token && !config.url.includes('/signup')) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const register = async (userData) => {
  try {
    const response = await api.post('/signup', userData); // Correct API endpoint
    return response;
  } catch (error) {
    throw error;
  }
};

export const login = async (credentials) => {
  try {
    const response = await api.post('/signin', credentials);
    return response;
  } catch (error) {
    throw error;
  }
};

export const forgotPassword = async (data) => {
  try {
    const response = await api.post('/forgot-password', data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const verifyOtp = async (data) => {
  try {
    const response = await api.post('/verify-otp', data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const resetPassword = async (data) => {
  try {
    const response = await api.post('/reset-password', data);
    return response;
  } catch (error) {
    throw error;
  }
};
