import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    siswa: [],
    currentPage: 0,
    numberOfPages: 0,
    isLoading: false,
    siswaDetail: {},
};

const siswaSlice = createSlice({
    name: 'siswa',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        endLoading: (state) => {
            state.isLoading = false;
        },
        fetchSiswa: (state, action) => {
            return (state = action.payload);
        },
        fetchAllSiswa: (state, action) => {
            state.siswa = action.payload;
        },
        insertSingleSiswa: (state, action) => {
            if (state.siswa.length >= 7) {
                state.siswa.pop();
                state.siswa.unshift(action.payload);
                return state;
            }
            state.siswa.unshift(action.payload);
        },
        fetchSiswaByNIK: (state, action) => {
            state.siswaDetail = action.payload;
        },
    },
});

export const {
    startLoading,
    endLoading,
    fetchSiswa,
    insertSingleSiswa,
    fetchSiswaByNIK,
    fetchAllSiswa,
} = siswaSlice.actions;
export default siswaSlice.reducer;
