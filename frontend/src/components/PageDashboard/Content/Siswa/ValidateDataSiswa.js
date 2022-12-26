import * as Yup from 'yup';

export default Yup.object({
    nama_lengkap: Yup.string()
        .required('Nama lengkap harus diisi')
        .max(100, 'Nama lengkap maksimal 100 karakter'),
    nik_anak: Yup.string()
        .required('NIK harus diisi')
        .max(30, 'NIK maksimal 30 karakter'),
    no_kk: Yup.string()
        .required('No. KK harus diisi')
        .max(30, 'No. KK maksimal 30 karakter'),
    no_akta: Yup.string()
        .required('No. Akta harus diisi')
        .max(30, 'No. Akta maksimal 30 karakter'),
    jenis_kelamin: Yup.string().required('Jenis kelamin harus diisi'),
    tempat_lahir: Yup.string()
        .required('Tempat lahir harus diisi')
        .max(50, 'Tempat lahir maksimal 50 karakter'),
    tanggal_lahir: Yup.date().required('Tanggal lahir harus diisi'),
    alamat_rumah: Yup.string()
        .required('Alamat rumah harus diisi')
        .max(100, 'Alamat rumah maksimal 100 karakter'),
    kelurahan: Yup.string()
        .required('Kelurahan harus diisi')
        .max(50, 'Kelurahan maksimal 50 karakter'),
    kecamatan: Yup.string()
        .required('Kecamatan harus diisi')
        .max(50, 'Kecamatan maksimal 50 karakter'),
    agama: Yup.string().required('Agama harus diisi'),
    anak_ke: Yup.number().required('Anak ke harus diisi'),
    jumlah_saudara: Yup.number().required('Jumlah saudara harus diisi'),
    keterangan_yatim: Yup.string().required('Keterangan yatim harus diisi'),
    golongan_darah: Yup.string().max(5, 'Golongan darah maksimal 5 karakter'),
});

//
//
//
//
