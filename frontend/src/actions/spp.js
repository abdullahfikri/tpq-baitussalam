import {
    startLoading,
    endLoading,
    fetchSppPerPage,
    insertSingleSPP,
    getSPPSum,
} from '../reducers/spp';
import * as API from '../api';

export const getSPP = (page) => async (dispatch) => {
    try {
        dispatch(startLoading());
        const { data } = await API.fetchSPP(page);

        dispatch(fetchSppPerPage(data));
        console.log(data);
        dispatch(endLoading());
    } catch (error) {
        console.log(error);
    }
};

export const insertSPP = (formData) => async (dispatch) => {
    try {
        dispatch(startLoading());
        const { data } = await API.insertSPP(formData);
        const dataCopy = { ...data.data, siswa: data.siswa };
        // console.log(dataCopy);
        dispatch(insertSingleSPP(dataCopy));
        dispatch(endLoading());
        return { status: 'success', message: 'Data berhasil disimpan' };
    } catch (error) {
        console.log(error);
    }
};

export const getSumSPPInAMonth = (startDate, endDate) => async (dispatch) => {
    try {
        dispatch(startLoading());
        const { data } = await API.getSumSPPInAMonth(startDate, endDate);
        dispatch(getSPPSum(data.totalSPP));
        dispatch(endLoading());
    } catch (error) {
        console.log(error);
    }
};
