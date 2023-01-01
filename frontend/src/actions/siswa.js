import * as API from '../api';
import {
    startLoading,
    insertSingleSiswa,
    endLoading,
    fetchSiswa,
    fetchSiswaByNIK,
    fetchAllSiswa,
} from '../reducers/siswa';

export const getSiswa = (page) => async (dispatch) => {
    try {
        dispatch(startLoading());
        const { data } = await API.fetchSiswa(page);
        dispatch(fetchSiswa(data));
        dispatch(endLoading());
    } catch (error) {
        console.log(error);
    }
};

export const insertSiswa = (formData, kelas) => async (dispatch) => {
    try {
        dispatch(startLoading());
        const { data } = await API.insertSiswa(formData);

        await dispatch(insertSingleSiswa({ ...data.siswa, kela: kelas }));
        dispatch(endLoading());
        return { status: 'success', message: 'Data berhasil disimpan' };
    } catch (error) {
        return { status: 'error', message: error.response.data.message };
        console.log(error);
    }
};

export const updateSiswa = (formData) => async (dispatch) => {
    try {
        dispatch(startLoading());
        const { data } = await API.updateSiswa(formData);
        console.log(data);
        // dispatch(fetchSiswa(data));
        // dispatch(insertSingleSiswa({ ...data.siswa, kela: kelas }));
        dispatch(endLoading());
    } catch (error) {
        console.log(error);
    }
};

export const getSiswaByNIK = (nik) => async (dispatch) => {
    try {
        dispatch(startLoading());
        const { data } = await API.fetchSiswaByNIK(nik);
        dispatch(fetchSiswaByNIK(data.siswa));
        dispatch(endLoading());
    } catch (error) {
        console.log(error);
    }
};

export const getAllSiswa = () => async (dispatch) => {
    try {
        dispatch(startLoading());
        const { data } = await API.fetchAllSiswa();
        // console.log(data.data);
        dispatch(fetchAllSiswa([...data.data]));
        dispatch(endLoading());
    } catch (error) {
        console.log(error);
    }
};

// SPP
