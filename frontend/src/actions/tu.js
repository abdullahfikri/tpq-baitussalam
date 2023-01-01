import * as api from '../api';
import {
    createTU,
    deleteTU,
    getTUPerPage,
    getTUById,
    updateTU,
} from '../reducers/tu';

export const getTUPerPageAction = (page) => async (dispatch) => {
    try {
        const { data } = await api.fetchTU(page);
        dispatch(getTUPerPage(data));
    } catch (error) {
        console.log(error.message);
    }
};

export const createTUAction = (tu) => async (dispatch) => {
    try {
        const { data } = await api.createTU(tu);
        dispatch(createTU(data.tu));
    } catch (error) {
        console.log(error.message);
    }
};

export const getTUByIdAction = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchTUById(id);
        dispatch(getTUById(data.tuDetail));
    } catch (error) {
        console.log(error);
    }
};

export const updateTUAction = (formData) => async (dispatch) => {
    try {
        const { data } = await api.updateTU(formData);

        dispatch(updateTU(data.tu));
    } catch (error) {
        console.log(error);
    }
};

export const deleteTUAction = (id) => async (dispatch) => {
    try {
        const { data } = await api.deleteTU(id);

        dispatch(deleteTU(data.id));
    } catch (error) {
        console.log(error);
    }
};
