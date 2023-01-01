import {
    startLoading,
    endLoading,
    fetchSppPerPage,
    insertSingleSPP,
    getSPPSum,
    getSPPByUUID,
    clearSPPDetail,
    updateSPP,
} from '../reducers/spp';
import * as API from '../api';

export const getSPP = (page) => async (dispatch) => {
    try {
        dispatch(startLoading());
        const { data } = await API.fetchSPP(page);

        dispatch(fetchSppPerPage(data));
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

export const updateSPPAction = (formData) => async (dispatch) => {
    try {
        dispatch(startLoading());
        const { data } = await API.updateSPP(formData);
        console.log(data);
        // dispatch(updateSPP(data.spp));
        dispatch(endLoading());
        return { status: 'success', message: 'Data berhasil diubah' };
    } catch (error) {
        return { status: 'error', message: error.response.data.message };
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

export const getSPPByUUIDAction = (uuid) => async (dispatch) => {
    try {
        dispatch(startLoading());
        const { data } = await API.getSPPByUUID(uuid);
        dispatch(getSPPByUUID(data.spp));
        dispatch(endLoading());
    } catch (error) {
        console.log(error);
    }
};
