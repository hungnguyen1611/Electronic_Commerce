import axiosInstance from "../utils/axiosInstance";

export const fetchProducts = async (searchPath) => {
  const res = await axiosInstance.get(`/api/products${searchPath}`);
  return res.data;
};

export const fetchProduct = async (id) => {
  const res = await axiosInstance.get(`/api/products/${id}`);
  return res.data;
};
