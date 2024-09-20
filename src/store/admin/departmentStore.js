import { createSlice } from "@reduxjs/toolkit";

const departmentSlice = createSlice({
    name: "departmentStore",
    initialState: {departmentList:[],numberOfDepartment:0},
    reducers: {
        saveDepartments: (state, action) => {
            state.departmentList = action.payload.departmentList;
            state.numberOfDepartment=state.departmentList.length;
        },
    },
});

export const departmentActions = departmentSlice.actions;

export default departmentSlice;
