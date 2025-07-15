// CloseDrawerContext.js
import { createContext, useContext } from "react";

export const CloseDrawerContext = createContext();

export const useCloseDrawer = () => useContext(CloseDrawerContext);
