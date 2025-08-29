import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  employee: null,
};

const EmployeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    AddEmployeeRequest(state) {
      state.loading = true;
      state.error = null;
    },
    AddEmployeeSuccess(state, action) {
      state.loading = false;
      state.employee = action.payload;
    },
    AddEmployeeFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    GetEmployeeRequest(state) {
      state.loading = true;
      state.error = null;
    },
    GetEmployeeSuccess(state, action) {
      state.loading = false;
      state.employee = action.payload;
    },
    GetEmployeeFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    UpdateRequest(state) {
      state.loading = true;
      state.error = null;
    },
    UpdateSuccess(state, action) {
      state.loading = false;
      state.employee = action.payload;
    },
    UpdateFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    deleteRequest(state) {
      state.loading = true;
      state.error = null;
    },
    deleteSuccess(state, action) {
      state.loading = false;
      state.employee = state.employee.filter(
        (data) => data.id !== action.payload
      );
    },
    deleteFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  AddEmployeeFailure,
  AddEmployeeRequest,
  AddEmployeeSuccess,
  UpdateFailure,
  UpdateRequest,
  UpdateSuccess,
  deleteFailure,
  deleteRequest,
  deleteSuccess,
  GetEmployeeFailure,
  GetEmployeeRequest,
  GetEmployeeSuccess,
} = EmployeeSlice.actions;

export default EmployeeSlice.reducer;
