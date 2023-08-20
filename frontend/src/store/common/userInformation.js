import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: 'userSliceSlice',
    initialState: {
        userProperty: {},
        token: '',
    },
    reducers: {
        setuserProperty: (state, action) => {
            state.userProperty = action.payload;
        },
        
        setToken: (state, action) => {
            state.token = action.payload;
        },
    }
});

export const userActions = UserSlice.actions;

