import * as Yup from 'yup';

export default Yup.object({
    nama: Yup.string().required('Nama harus diisi'),
    jumlahBulanDibayar: Yup.number().required(
        'Jumlah bulan dibayar harus diisi'
    ),
});
