import * as Yup from 'yup';

export default Yup.object({
    fullName: Yup.string().required('Nama harus diisi'),
    alamat: Yup.string().required('Alamat harus diisi'),
    tempatLahir: Yup.string().required('Tempat lahir harus diisi'),
    tanggalLahir: Yup.date().required('Tanggal lahir harus diisi'),
    nomor_telp: Yup.string().required('Nomor telepon harus diisi'),
    jenis_kelamin: Yup.string().required('Jenis kelamin harus diisi'),

    username: Yup.string().required('Username harus diisi'),
    password: Yup.string().required('Password harus diisi'),
});

export const editSchema = Yup.object({
    fullName: Yup.string().required('Nama harus diisi'),
    alamat: Yup.string().required('Alamat harus diisi'),
    tempatLahir: Yup.string().required('Tempat lahir harus diisi'),
    tanggalLahir: Yup.date().required('Tanggal lahir harus diisi'),
    nomor_telp: Yup.string().required('Nomor telepon harus diisi'),
    jenis_kelamin: Yup.string().required('Jenis kelamin harus diisi'),

    username: Yup.string().required('Username harus diisi'),
});
