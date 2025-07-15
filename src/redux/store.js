import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { productReducer } from "./productSlice/productSlice";
import persistReducer from "redux-persist/es/persistReducer";
import { userReducer } from "./userSlice.js/userSlice";

const rootPersistConfig = {
  key: "root",

  storage: storage,

  whitelist: ["product", "user"],
};

const reducers = combineReducers({
  user: userReducer,
  product: productReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,

  // Fix cảnh báo khi dùng redux-tookit và redeuxpersist
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
