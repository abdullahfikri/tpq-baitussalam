import FileBase from 'react-file-base64';
import Resizer from 'react-image-file-resizer';

import { MdOutlineNavigateNext } from 'react-icons/md';
import { Formik, Form } from 'formik';
import ValidateDataSiswa from './ValidateDataSiswa';
import InputSiswa from './InputSiswa';
import TextAreaSiswa from './TextAreaSiswa';
import { useDispatch, useSelector } from 'react-redux';
import { tambahDataSiswa } from '../../../../reducers/tambahSiswa';
import RadioKelamin from './RadioKelamin';
import RadioKeterangan from './RadioKeterangan';

export default function FormDataSiswa({ setIsTambahDataSiswa, setDataSiswa }) {
    const dispatch = useDispatch();

    const { siswa } = useSelector((state) => state.tambahSiswa);

    return (
        <Formik
            initialValues={{
                nama_lengkap: siswa.nama_lengkap ? siswa.nama_lengkap : '',
                nik_anak: siswa.nik_anak ? siswa.nik_anak : '',
                no_kk: siswa.no_kk ? siswa.no_kk : '',
                no_akta: siswa.no_akta ? siswa.no_akta : '',
                jenis_kelamin: siswa.jenis_kelamin ? siswa.jenis_kelamin : '',
                tempat_lahir: siswa.tempat_lahir ? siswa.tempat_lahir : '',
                tanggal_lahir: siswa.tanggal_lahir ? siswa.tanggal_lahir : '',
                alamat_rumah: siswa.alamat_rumah ? siswa.alamat_rumah : '',
                kelurahan: siswa.kelurahan ? siswa.kelurahan : '',
                kecamatan: siswa.kecamatan ? siswa.kecamatan : '',
                agama: siswa.agama ? siswa.agama : '',
                anak_ke: siswa.anak_ke ? siswa.anak_ke : '',
                jumlah_saudara: siswa.jumlah_saudara
                    ? siswa.jumlah_saudara
                    : '',
                keterangan_yatim: siswa.keterangan_yatim
                    ? siswa.keterangan_yatim
                    : '',
                golongan_darah: siswa.golongan_darah
                    ? siswa.golongan_darah
                    : '',
                photo: siswa.photo ? siswa.photo : '',
            }}
            validationSchema={ValidateDataSiswa}
            onSubmit={async (values, { setSubmitting }) => {
                // console.log(values);

                try {
                    const { payload: data } = await dispatch(
                        tambahDataSiswa(values)
                    );

                    setDataSiswa((prev) => ({ ...prev, ...data }));

                    setIsTambahDataSiswa((prev) => !prev);
                } catch (error) {
                    console.log(error);
                }
            }}
        >
            {(formik) => (
                <Form className="w-[550px]">
                    {/* {console.log(formik)} */}
                    <h3 className="font-bold text-lg mb-4 text-primary">
                        Data Calon Siswa
                    </h3>
                    <InputSiswa
                        autoFocus={true}
                        name="nama_lengkap"
                        placeholder="Nama Lengkap"
                        type="text"
                        maxLength="50"
                    />

                    <InputSiswa
                        name="nik_anak"
                        placeholder="NIK"
                        type="text"
                        maxLength="16"
                    />

                    <InputSiswa
                        name="no_kk"
                        placeholder="Nomor KK"
                        type="text"
                        maxLength="30"
                    />
                    <InputSiswa
                        name="no_akta"
                        placeholder="Nomor Akta"
                        type="text"
                        maxLength="30"
                    />

                    <RadioKelamin />

                    <InputSiswa
                        name="tempat_lahir"
                        placeholder="Tempat Lahir"
                        type="text"
                        maxLength="50"
                    />

                    <InputSiswa
                        name="tanggal_lahir"
                        placeholder="Tanggal Lahir"
                        type="date"
                    />

                    <TextAreaSiswa
                        name="alamat_rumah"
                        placeholder="Alamat Rumah"
                    />

                    <InputSiswa
                        name="kelurahan"
                        placeholder="Kelurahan"
                        type="text"
                    />

                    <InputSiswa
                        name="kecamatan"
                        placeholder="Kecamatan"
                        type="text"
                    />

                    <InputSiswa name="agama" placeholder="Agama" type="text" />
                    <InputSiswa
                        name="anak_ke"
                        placeholder="Anak-ke"
                        type="tel"
                        min="1"
                    />
                    <InputSiswa
                        name="jumlah_saudara"
                        placeholder="Jumlah Saudara"
                        type="tel"
                        min="0"
                    />

                    <InputSiswa
                        name="golongan_darah"
                        placeholder="Golongan Darah"
                        type="text"
                        maxLength="2"
                        req="true"
                    />
                    <div className="flex flex-col mb-4">
                        <label htmlFor="" className="font-medium text-lg mb-2">
                            Upload Photo (optional)
                        </label>

                        <input
                            type="file"
                            onChange={(event) => {
                                let fileInput = false;
                                if (event.target.files[0]) {
                                    fileInput = true;
                                }
                                if (fileInput) {
                                    try {
                                        Resizer.imageFileResizer(
                                            event.target.files[0],
                                            300,
                                            300,
                                            'JPEG',
                                            100,
                                            0,
                                            (uri) => {
                                                formik.setFieldValue(
                                                    'photo',
                                                    uri
                                                );
                                            },
                                            'base64'
                                        );
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }
                            }}
                        />
                        {/* <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) =>
                                formik.setFieldValue('photo', base64)
                            }
                        /> */}
                    </div>

                    <RadioKeterangan />

                    <div className="mt-2">
                        <button
                            type="submit"
                            className="flex items-center  py-3 px-7 bg-primary text-white rounded-md shadow-md hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50"
                        >
                            <span>Selanjutnya</span>{' '}
                            <MdOutlineNavigateNext className="text-2xl" />
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
