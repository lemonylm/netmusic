import axios from "axios";
import nprogress from "nprogress";
const instance = axios.create({
  baseURL: "/api",
  timeout: 10000,
});
instance.interceptors.request.use((config) => {
  nprogress.start();
  return config;
});
instance.interceptors.response.use(
  (config) => {
    nprogress.done();
    return config;
  },
  (err) => {
    nprogress.done();
    return Promise.reject(err);
  }
);
export default instance;
