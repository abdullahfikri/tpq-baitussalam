import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/user';
import tambahSiswaReducer from '../reducers/tambahSiswa';
import siswaReducer from '../reducers/siswa';
import sppReducer from '../reducers/spp';
import logReducer from '../reducers/logs';

export default configureStore({
    reducer: {
        user: userReducer,
        siswa: siswaReducer,
        tambahSiswa: tambahSiswaReducer,
        spp: sppReducer,
        logs: logReducer,
    },
});
