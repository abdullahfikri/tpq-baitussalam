import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    spp: [],
    currentPage: 0,
    numberOfPages: 0,
    isLoading: false,
    startIndex: 0,
    sppDetail: {},
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
        updateSPP: (state, action) => {
            const index = state.spp.findIndex(
                (spp) => spp.uuid === action.payload.uuid
            );
            state.spp[index] = action.payload;
        },
        getSPPSum: (state, action) => {
            state.sum = action.payload;
        },
        getSPPByUUID: (state, action) => {
            state.sppDetail = action.payload;
        },
        clearSPPDetail: (state) => {
            state.sppDetail = {};
        },
    },
});

export const {
    startLoading,
    endLoading,
    fetchSppPerPage,
    insertSingleSPP,
    updateSPP,
    getSPPSum,
    getSPPByUUID,
    clearSPPDetail,
} = sppSlice.actions;
export default sppSlice.reducer;
