import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    spp: [],
    currentPage: 0,
    numberOfPages: 0,
    isLoading: false,
    startIndex: 0,
};

const sppSlice = createSlice({
    name: 'spp',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        endLoading: (state) => {
            state.isLoading = false;
        },
        fetchSppPerPage: (state, action) => {
            return (state = { ...state, ...action.payload });
        },
        insertSingleSPP: (state, action) => {
            if (state.spp.length >= 7) {
                state.spp.pop();
                state.spp.unshift(action.payload);
                return state;
            }
            state.spp.unshift(action.payload);
        },
        getSPPSum: (state, action) => {
            state.sum = action.payload;
        },
    },
});

export const {
    startLoading,
    endLoading,
    fetchSppPerPage,
    insertSingleSPP,
    getSPPSum,
} = sppSlice.actions;
export default sppSlice.reducer;
