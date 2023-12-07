import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";

const store = configureStore({
  reducer: {
    employees: useReducer,
  },
});

export default store;
