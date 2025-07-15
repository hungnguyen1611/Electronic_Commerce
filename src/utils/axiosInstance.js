import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    toast.error(error.response.data.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
