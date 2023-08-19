import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
    name: 'layoutSlice',
    initialState: {
        isMobile: true
    },
    reducers: {
        setIsMobile: (state, action) => {
            state.isMobile = action.payload;
        }
    }
});

export const layoutActions = layoutSlice.actions;

