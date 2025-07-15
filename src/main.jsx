import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ConfirmProvider } from "material-ui-confirm";
import { ToastContainer } from "react-toastify";
import { store } from "./redux/store.js";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const persistor = persistStore(store);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConfirmProvider>
          <BrowserRouter>
            <App />
            <ToastContainer />
          </BrowserRouter>
        </ConfirmProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
