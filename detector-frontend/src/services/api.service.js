import axios from 'axios'

// Creates an Axios instance with a base URL, timeout of 30 seconds
const instance = axios.create({
    baseURL: "http://localhost:3001/api/",
    timeout: 30000,
  })
  
  //Attach auth token to HTTP requests
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('accessToken');
    config.headers.Authorization = token;
    return config;
  });
  
  export default instance
  
  