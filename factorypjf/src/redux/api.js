import axios from "axios"

const api = axios.create({
  baseURL : "http://localhost:8080",
  headers : {
    accept : 'application/json',
  }
})

api.interceptors.request.use(function (config) {
  console.log("request start",config);
  return config;
}, function (error) {
  console.log("request error",error);
  return Promise.reject(error);
});

api.interceptors.response.use(function (response) {
  console.log("get response",response);
  return response;
}, function (error) {
  console.log("response error",error);
  return Promise.reject(error);
});

export default api;