import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
  name: "userDetailStore",
  initialState: { username: null, role: null },
  reducers: {
    saveUsername: (state, action) => {
      state.username = action.payload.username;
      state.role = action.payload.role;
    },
  },
});

export const userDetailsActions = userDetailsSlice.actions;

export default userDetailsSlice;
