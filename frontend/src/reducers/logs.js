import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    logs: [],
    currentPage: 0,
    numberOfPages: 0,
    isLoading: false,
    startIndex: 1,
};

const logSlice = createSlice({
    name: 'logs',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        endLoading: (state) => {
            state.isLoading = false;
        },
        getLogsPerPage: (state, action) => {
            return (state = { ...state, ...action.payload });
        },
    },
});

export const { startLoading, getLogsPerPage, endLoading } = logSlice.actions;
export default logSlice.reducer;
