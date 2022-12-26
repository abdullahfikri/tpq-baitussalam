import * as API from '../api';

import { startLoading, endLoading, getLogsPerPage } from '../reducers/logs';

export const getLogs = (page) => async (dispatch) => {
    try {
        dispatch(startLoading());
        const { data } = await API.getLogsPerPage(page);
        dispatch(getLogsPerPage(data));
        dispatch(endLoading());
    } catch (error) {
        console.log(error);
    }
};
