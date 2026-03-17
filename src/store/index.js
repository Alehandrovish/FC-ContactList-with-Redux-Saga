import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import contactReduser from "./slices/contactSlice";

export default configureStore({
  reducer: contactReduser,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
