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
    nomor_telp_ibu: Yup.string().max(
        20,
        'Nomor telepon ibu maksimal 20 karakter'
    ),
    penghasilan_ibu: Yup.string().required('Penghasilan ibu harus diisi'),
    // data wali
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
    // data sekolah
    // bulan_spp_terakhir_dibayar: Yup.date().required(
    //     'Bulan SPP terakhir dibayar harus diisi'
    // ),
    // status: Yup.string().required('Status harus diisi'),
    // tanggal_masuk: Yup.date().required('Tanggal masuk harus diisi'),
    // kelas_id: Yup.string(),
});
