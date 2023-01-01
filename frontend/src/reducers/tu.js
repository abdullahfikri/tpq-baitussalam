import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tu: [],
    currentPage: 1,
    numberOfPages: 1,
    startIndex: 1,
    tuDetail: {},
};

const tuSlice = createSlice({
    name: 'tu',
    initialState: initialState,
    reducers: {
        createTU: (state, action) => {
            state.tu.unshift(action.payload);
        },

        updateTU: (state, action) => {
            state.tu = state.tu.map((tu) =>
                tu.uuid_user === action.payload.uuid_user ? action.payload : tu
            );
        },
        deleteTU: (state, action) => {
            state.tu = state.tu.filter((tu) => tu.uuid_user !== action.payload);
        },
        getTUPerPage: (state, action) => {
            return (state = { ...state, ...action.payload });
        },
        getTUById: (state, action) => {
            return (state = { ...state, tuDetail: action.payload });
        },
    },
});

export const { createTU, updateTU, deleteTU, getTUPerPage, getTUById } =
    tuSlice.actions;
export default tuSlice.reducer;
