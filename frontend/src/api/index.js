import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5001' });

// Authentication
export const signin = (formData) => API.post('/admin/signin', formData);

// Siswa
export const fetchSiswa = (page) => API.get(`/tpqmain/siswa?page=${page}`);
export const insertSiswa = (formData) =>
    API.post('/tpqmain/insertsiswa', formData);

export const fetchSiswaByNIK = (nik) => API.get(`/tpqmain/siswa/${nik}`);

export const fetchAllSiswa = () => API.get('/tpqmain/allsiswa');
// /tpqmain/allsiswa

// SPP

export const insertSPP = (formData) => API.post('/tpqmain/insertspp', formData);

export const fetchSPP = (page) => API.get(`/tpqmain/spp?page=${page}`);

export const getSumSPPInAMonth = (startDate, endDate) =>
    API.get(
        `/tpqmain/spp/totalinmonth?startDate=${startDate}&endDate=${endDate}`
    );

export const getLogsPerPage = (page) => API.get(`/tpqmain/logs?page=${page}`);
