import { createSlice } from '@reduxjs/toolkit';

export const alertSlice = createSlice({
    name: "alerts",
    initialState: { // Corrected here
        loading: false,
    },
    reducers: {
        showLoading: (state) => {
            state.loading = true;
        },
        hideLoading: (state) => {
            state.loading = false;
        }
    }
})
export const { showLoading, hideLoading } = alertSlice.actions;

export default alertSlice.reducer; // Don't forget to export the reducer