import axiosInstance from "../utils/axiosInstance";

export const fetchProducts = async (searchPath) => {
  const res = await axiosInstance.get(`/api/products${searchPath}`);
  return res.data;
};

export const fetchProduct = async (id) => {
  const res = await axiosInstance.get(`/api/products/${id}`);
  return res.data;
};

// export const updateProduct = async (id, data) => {
//   const res = await axios.get(`/api/products/${id}`);
//   const product = res.data;
//   const updatedHearts = product.heart.includes(data.id)
//     ? product.heart.filter((_id) => _id !== data.id)
//     : [...product.heart, data.id];

//   const res2 = await axios.patch(`/api/products/${id}`, {
//     heart: updatedHearts,
//   });
//   return res2.data;
// };

export const fetchProductByUser = async (idUser) => {
  const res = await axiosInstance.get(`/api/products`);
  const filtered = res.data.filter((item) => item.heart.includes(idUser));
  return filtered;
};
