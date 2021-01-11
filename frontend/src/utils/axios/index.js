import axios from 'axios';

import { onRequest, onRequestError, onResponse, onResponseError } from './interceptors'

const api = axios.create({
  baseURL: `https://test-taking-app.herokuapp.com/api/v1/`, 
  timeout: 3000,
});

// Add a request interceptor
api.interceptors.request.use(onRequest, onRequestError);

// Add a response interceptor
api.interceptors.response.use(onResponse, onResponseError);

export default api;