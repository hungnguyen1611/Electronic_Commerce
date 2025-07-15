import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

const initialState = {
  product: null,
  loading: false,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const res = await axiosInstance.get(`/api/products`);
    return res.data;
  }
);

export const fetchProductsFilter = createAsyncThunk(
  "product/fetchProductsFilter",
  async (filterValue) => {
    const res = await axiosInstance.get(`/api/products${filterValue}`);
    return res.data;
  }
);

export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ id, userId, type }) => {
    const res = await axiosInstance.get(`/api/products/${id}`);
    const product = res.data;
    const updatedHearts = product[type].includes(userId)
      ? type === "heart"
        ? product[type].filter((_id) => _id !== userId)
        : product[type]
      : [...product[type], userId];

    const res2 = await axiosInstance.patch(`/api/products/${id}`, {
      [type]: updatedHearts,
    });

    return res2.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  // reducers: {
  //   setProduct: (state, action) => {
  //     state.product = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const newProduct = action.payload;
      const productsUpdate = state.product.map((item) => {
        if (item.id === newProduct.id) {
          return newProduct;
        } else {
          return item;
        }
      });

      state.product = productsUpdate;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(fetchProductsFilter.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

// export const { setProduct } = productSlice.actions;

export const productReducer = productSlice.reducer;

export const selectProduct = (state) => state.product.product;

export const selectLoading = (state) => state.product.loading;
