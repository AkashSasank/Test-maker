// Add a request interceptor
export function onRequest(config) {
  // Do something before request is sent
  // like adding token to request header
  return config;
}

export function onRequestError(error) {
  // Do something with request error
  return Promise.reject(error);
};

// Add a response interceptor
export function onResponse(response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}

export function onResponseError(error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
};