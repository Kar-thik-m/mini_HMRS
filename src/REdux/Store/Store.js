import { configureStore } from "@reduxjs/toolkit";
import EmployeeSlice from "../Slice/EmployeeSlice.js";

const store = configureStore({
  devTools: true,
  reducer: {
    employee: EmployeeSlice,
  },
});

export default store;
