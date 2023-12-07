import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "employees",
  initialState: {
    employees: [],
  },
  reducers: {
    getEmployees: (state, action) => {
      state.employees = action.payload.map((employee) => {
        return {
          id: employee._id,
          name: employee.name,
          email: employee.email,
          password: employee.password,
        };
      });
    },

    addEmployees: (state, action) => {
      state.employees.push(action.payload);
    },

    updateEmployees: (state, action) => {
      const index = state.employees.findIndex(
        (x) => x.id === action.payload.id
      );
      state.employees[index] = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      };
    },

    deleteEmployees: (state, action) => {
      const id = action.payload.id;
      state.employees = state.employees.filter((u) => u.id !== id);
    },

    // viewEmployees: (state, action) => {
    //   const index = state.employees.findIndex(
    //     (x) => x.id === action.payload.id
    //   );
    //   state.employees[index] = {
    //     id: action.payload.id,
    //     name: action.payload.name,
    //     email: action.payload.email,
    //     password: action.payload.password,
    //   };
    // },
  },
});

export const {
  getEmployees,
  addEmployees,
  updateEmployees,
  deleteEmployees,
  viewEmployees,
} = userSlice.actions;
export default userSlice.reducer;
