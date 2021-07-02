import axios from "axios";
import nprogress from "nprogress";
const instance = axios.create({
  baseURL: "/api",
  timeout: 10000,
});
instance.interceptors.request.use((config) => {
  nprogress.start();
  return config.data;
});
instance.interceptors.response.use(
  (response) => {
    nprogress.done();
<<<<<<< HEAD
    return config.data;
=======
    return response.data;
>>>>>>> 952a7d586ed96c618dcbcb51a9aebea0b55d9041
  },
  (err) => {
    nprogress.done();
    return Promise.reject(err);
  }
);
export default instance;
