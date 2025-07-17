import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "./constants";

const axiosInstance = axios.create({
  baseURL: API_URL,
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
