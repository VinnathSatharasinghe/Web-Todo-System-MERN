 import { createSlice } from "@reduxjs/toolkit";

const todo_userSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    getTodos: (state, action) => {
      state.todos = action.payload.map((todo) => {
        return {
          id: todo._id,
          name: todo.name,
          work: todo.work,
        };
      });
    },

    addTodos: (state, action) => {
      state.todos.push(action.payload);
    },

    updateTodos: (state, action) => {
      const index = state.todos.findIndex(
        (x) => x.id === action.payload.id
      );
      state.todos[index] = {
        id: action.payload.id,
        name: action.payload.name,
        work: action.payload.work,
      };
    },

    deleteTodos: (state, action) => {
      const id = action.payload.id;
      state.todos = state.todos.filter((u) => u.id !== id);
    },

  },
});

export const {
  getTodos,
  addTodos,
  updateTodos,
  deleteTodos,
} = todo_userSlice.actions;
export default todo_userSlice.reducer;
