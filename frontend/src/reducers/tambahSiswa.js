import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    siswa: {
        nama_lengkap: '',
        nik_anak: '',
        no_kk: '',
        no_akta: '',
        jenis_kelamin: '',
        tempat_lahir: '',
        tanggal_lahir: '',
        alamat_rumah: '',
        kelurahan: '',
        kecamatan: '',
        agama: '',
        anak_ke: '',
        jumlah_saudara: '',
        keterangan_yatim: '',
        golongan_darah: '',
        photo: '',
    },

    orang_tua: {
        nama_ayah: '',
        nik_ayah: '',
        tempat_lahir_ayah: '',
        tanggal_lahir_ayah: '',
        pendidikan_ayah: '',
        pekerjaan_ayah: '',
        alamat_ayah: '',
        nomor_telp_ayah: '',
        penghasilan_ayah: 0,
        nama_ibu: '',
        nik_ibu: '',
        tempat_lahir_ibu: '',
        tanggal_lahir_ibu: '',
        pendidikan_ibu: '',
        pekerjaan_ibu: '',
        alamat_ibu: '',
        nomor_telp_ibu: '',
        penghasilan_ibu: 0,
        nama_wali: '',
        nik_wali: '',
        tempat_lahir_wali: '',
        tanggal_lahir_wali: '',
        pekerjaan_wali: '',
        pendidikan_wali: '',
        alamat_wali: '',
        nomor_telp_wali: '',
        penghasilan_wali: 0,
        bulan_spp_terakhir_dibayar: new Date().toISOString().slice(0, 10),
        status: 'active',
        tanggal_masuk: new Date().toISOString().slice(0, 10),
        uuid_kelas: '',
    },
    data: {},
};

const tambahSiswaSlice = createSlice({
    name: 'tambahSiswa',
    initialState: initialState,
    reducers: {
        tambahDataSiswa: (state, action) => {
            state.siswa = { ...state.siswa, ...action.payload };
        },
        tambahDataOrangTua: (state, action) => {
            state.orang_tua = { ...state.orang_tua, ...action.payload };
        },
        clearOrangTua: (state) => {
            state.orang_tua = initialState.orang_tua;
        },
        clearSiswa: (state) => {
            state.siswa = initialState.siswa;
        },

        getDataSiswaBaru: (state, action) => {
            state.data = {
                ...state.siswa,
                ...state.orang_tua,
                ...action.payload,
            };
        },
    },
});

export const {
    tambahDataSiswa,
    tambahDataOrangTua,
    getDataSiswaBaru,
    clearOrangTua,
    clearSiswa,
} = tambahSiswaSlice.actions;
export default tambahSiswaSlice.reducer;
