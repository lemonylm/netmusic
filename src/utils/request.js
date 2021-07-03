import axios from "axios";
import nprogress from "nprogress";
const instance = axios.create({
  baseURL: "/api",
  timeout: 10000,
  headers: {
    token: localStorage.getItem('token')
  }
});
instance.interceptors.request.use((config) => {
  nprogress.start();
  return config;
});
instance.interceptors.response.use(
  (response) => {
    nprogress.done();
    return response.data;
  },
  (err) => {
    nprogress.done();
    return Promise.reject(err);
  }
);
export default instance;
