import * as Yup from 'yup';

export default Yup.object({
    // data ayah
    nama_ayah: Yup.string()
        .required('Nama ayah harus diisi')
        .max(100, 'Nama ayah maksimal 100 karakter'),
    nik_ayah: Yup.string()
        .required('NIK ayah harus diisi')
        .max(30, 'NIK ayah maksimal 30 karakter'),
    tempat_lahir_ayah: Yup.string()
        .required('Tempat lahir ayah harus diisi')
        .max(50, 'Tempat lahir ayah maksimal 50 karakter'),
    tanggal_lahir_ayah: Yup.date().required('Tanggal lahir ayah harus diisi'),
    pendidikan_ayah: Yup.string().required('Pendidikan ayah harus diisi'),
    pekerjaan_ayah: Yup.string().required('Pekerjaan ayah harus diisi'),
    alamat_ayah: Yup.string()
        .required('Alamat ayah harus diisi')
        .max(100, 'Alamat ayah maksimal 100 karakter'),
    nomor_telp_ayah: Yup.string().max(
        20,
        'Nomor telepon ayah maksimal 20 karakter'
    ),
    penghasilan_ayah: Yup.string().required('Penghasilan ayah harus diisi'),
    // data ibu
    nama_ibu: Yup.string()
        .required('Nama ibu harus diisi')
        .max(100, 'Nama ibu maksimal 100 karakter'),
    nik_ibu: Yup.string()
        .required('NIK ibu harus diisi')
        .max(30, 'NIK ibu maksimal 30 karakter'),
    tempat_lahir_ibu: Yup.string()
        .required('Tempat lahir ibu harus diisi')
        .max(50, 'Tempat lahir ibu maksimal 50 karakter'),
    tanggal_lahir_ibu: Yup.date().required('Tanggal lahir ibu harus diisi'),
    pendidikan_ibu: Yup.string().required('Pendidikan ibu harus diisi'),
    pekerjaan_ibu: Yup.string().required('Pekerjaan ibu harus diisi'),
    alamat_ibu: Yup.string()
        .required('Alamat ibu harus diisi')
        .max(100, 'Alamat ibu maksimal 100 karakter'),
    nomor_telp_ibu: Yup.string()
        .max(20, 'Nomor telepon ibu maksimal 20 karakter')
        .required('Nomor telepon ibu harus diisi'),
    penghasilan_ibu: Yup.string().required('Penghasilan ibu harus diisi'),

    // data wali(optional)
    nama_wali: Yup.string().max(100, 'Nama wali maksimal 100 karakter'),
    nik_wali: Yup.string().max(30, 'NIK wali maksimal 30 karakter'),
    tempat_lahir_wali: Yup.string().max(
        50,
        'Tempat lahir wali maksimal 50 karakter'
    ),
    tanggal_lahir_wali: Yup.date(),
    pendidikan_wali: Yup.string(),
    pekerjaan_wali: Yup.string(),
    alamat_wali: Yup.string().max(100, 'Alamat wali maksimal 100 karakter'),
    nomor_telp_wali: Yup.string().max(
        20,
        'Nomor telepon wali maksimal 20 karakter'
    ),
    penghasilan_wali: Yup.string(),
    uuid_kelas: Yup.string().required('Kelas harus diisi'),
});
