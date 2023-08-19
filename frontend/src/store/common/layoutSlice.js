import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
    name: 'layoutSlice',
    initialState: {
        isMobile: true,
        drawer: false,
    },
    reducers: {
        setIsMobile: (state, action) => {
            state.isMobile = action.payload;
        },
        setDrawer: (state, action) => {
            state.drawer = action.payload;
        },
    }
});

export const layoutActions = layoutSlice.actions;

