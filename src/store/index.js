import { configureStore } from "@reduxjs/toolkit";
import userDetailsSlice from "./userDetails";
import departmentSlice from "./admin/departmentStore";

const store = configureStore({
  reducer: {
    userDetails: userDetailsSlice.reducer,departmentStore: departmentSlice.reducer,
  },
});

export default store;
