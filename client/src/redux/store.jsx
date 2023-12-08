import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import todo_userSlice from "../TODO/redux-todo/todo_userSlice";

const store = configureStore({
  reducer: {
    employees: useReducer,
    todos: todo_userSlice,
  },
});

export default store;
