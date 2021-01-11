import axios from 'axios';

import { onRequest, onRequestError, onResponse, onResponseError } from './interceptors'

const api = axios.create({
  baseURL: `http://localhost:8000/api/v1/`, 
  timeout: 3000,
});

// Add a request interceptor
api.interceptors.request.use(onRequest, onRequestError);

// Add a response interceptor
api.interceptors.response.use(onResponse, onResponseError);

export default api;