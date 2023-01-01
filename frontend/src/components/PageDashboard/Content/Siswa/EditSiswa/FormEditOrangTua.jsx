import React, { useEffect, useState } from 'react';

import { IoIosArrowBack } from 'react-icons/io';

import { Formik, Form, Field } from 'formik';
import InputSiswa from '../InputSiswa';
import ValidateDataOrtu from '../ValidateDataOrtu';
import { useDispatch, useSelector } from 'react-redux';
import {
    tambahDataOrangTua,
    getDataSiswaBaru,
} from '../../../../../reducers/tambahSiswa';

import { updateSiswa } from '../../../../../actions/siswa';

import SelectKelas from '../SelectKelas';
import RadioKelas from '../RadioKelas';

import Konfirmasi from '../../../../../utils/Konfirmasi';
import OverlayMessage from '../../../../../utils/OverlayMessage';

export default function FormEditOrangTua({
    siswaEdited,
    setSiswaEdited,
    setIsTambahSiswa,
}) {
    const user = useSelector((state) => state.user);

    const [isHavingWali, setIsHavingWali] = useState(false);
    const [dataKelas, setDataKelas] = useState([]);
    const dispatch = useDispatch();

    const [overlayMessage, setOverlayMessage] = useState(false);
    const [status, setStatus] = useState('');

    const fetchDataKelas = async () => {
        try {
            //localhost:5001/tpqside/getkelas
            const response = await fetch(
                'http://localhost:5001/tpqside/getkelas',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const { data } = await response.json();
            console.log(data);
            setDataKelas(data);
            return data;
        } catch (error) {
            alert(error);
        }
    };

    const submitHandler = async (values, { setSubmitting }) => {
        try {
            console.log();
            const data = {
                ...siswaEdited,
                ...values,
                uuid_user: user?.uuid_user,
            };
            // dispatch()
            dispatch(updateSiswa(data));
            setOverlayMessage('Data siswa berhasil ditambahkan');
            setStatus('Berhasil');
        } catch (error) {
            console.log(error);
            setOverlayMessage('Data siswa gagal ditambahkan');
            setStatus('Gagal');
        }
    };

    useEffect(() => {
        fetchDataKelas();
    }, []);

    return (
        <>
            <Formik
                initialValues={{
                    nama_ayah: siswaEdited.nama_ayah
                        ? siswaEdited.nama_ayah
                        : '',
                    nik_ayah: siswaEdited.nik_ayah ? siswaEdited.nik_ayah : '',
                    tempat_lahir_ayah: siswaEdited.tempat_lahir_ayah
                        ? siswaEdited.tempat_lahir_ayah
                        : '',
                    tanggal_lahir_ayah: siswaEdited.tanggal_lahir_ayah
                        ? siswaEdited.tanggal_lahir_ayah
                        : '',
                    pendidikan_ayah: siswaEdited.pendidikan_ayah
                        ? siswaEdited.pendidikan_ayah
                        : '',
                    pekerjaan_ayah: siswaEdited.pekerjaan_ayah
                        ? siswaEdited.pekerjaan_ayah
                        : '',
                    alamat_ayah: siswaEdited.alamat_ayah
                        ? siswaEdited.alamat_ayah
                        : '',
                    nomor_telp_ayah: siswaEdited.nomor_telp_ayah
                        ? siswaEdited.nomor_telp_ayah
                        : '',
                    penghasilan_ayah: siswaEdited.penghasilan_ayah
                        ? siswaEdited.penghasilan_ayah
                        : '',

                    nama_ibu: siswaEdited.nama_ibu ? siswaEdited.nama_ibu : '',
                    nik_ibu: siswaEdited.nik_ibu ? siswaEdited.nik_ibu : '',
                    tempat_lahir_ibu: siswaEdited.tempat_lahir_ibu
                        ? siswaEdited.tempat_lahir_ibu
                        : '',
                    tanggal_lahir_ibu: siswaEdited.tanggal_lahir_ibu
                        ? siswaEdited.tanggal_lahir_ibu
                        : '',
                    pendidikan_ibu: siswaEdited.pendidikan_ibu
                        ? siswaEdited.pendidikan_ibu
                        : '',
                    pekerjaan_ibu: siswaEdited.pekerjaan_ibu
                        ? siswaEdited.pekerjaan_ibu
                        : '',
                    alamat_ibu: siswaEdited.alamat_ibu
                        ? siswaEdited.alamat_ibu
                        : '',
                    nomor_telp_ibu: siswaEdited.nomor_telp_ibu
                        ? siswaEdited.nomor_telp_ibu
                        : '',
                    penghasilan_ibu: siswaEdited.penghasilan_ibu
                        ? siswaEdited.penghasilan_ibu
                        : '',
                    uuid_kelas: siswaEdited?.uuid_kelas
                        ? siswaEdited?.uuid_kelas
                        : '',
                }}
                validationSchema={ValidateDataOrtu}
                onSubmit={submitHandler}
            >
                {(formik) => (
                    <Form className="w-[550px]">
                        <h3 className="font-bold text-xl text-gray-600 mt-5">
                            Data Orang Tua
                        </h3>
                        <h4 className="font-bold mt-5 mb-2 text-gray-600">
                            Ayah Kandung
                        </h4>
                        <InputSiswa
                            autoFocus={true}
                            name="nama_ayah"
                            placeholder="Nama Ayah"
                            type="text"
                        />
                        <InputSiswa
                            name="nik_ayah"
                            placeholder="NIK Ayah"
                            type="text"
                            maxLength="16"
                        />
                        <InputSiswa
                            name="tempat_lahir_ayah"
                            placeholder="Tempat Lahir Ayah"
                            type="text"
                        />
                        <InputSiswa
                            name="tanggal_lahir_ayah"
                            placeholder="Tanggal Lahir Ayah"
                            type="date"
                        />
                        <InputSiswa
                            name="alamat_ayah"
                            placeholder="Alamat Ayah"
                            type="text"
                        />
                        <InputSiswa
                            name="nomor_telp_ayah"
                            placeholder="Nomor HP Ayah"
                            type="tel"
                            maxLength="15"
                        />
                        <InputSiswa
                            name="pendidikan_ayah"
                            placeholder="Pendidikan terakhir Ayah"
                            type="text"
                        />
                        <InputSiswa
                            name="pekerjaan_ayah"
                            placeholder="Pekerjaan Ayah"
                            type="text"
                        />
                        <InputSiswa
                            name="penghasilan_ayah"
                            placeholder="Penghasilan Ayah"
                            type="number"
                        />
                        <hr className="mt-5 bg-primary" />
                        <h4 className="font-bold mt-5 mb-2 text-gray-600">
                            Ibu Kandung
                        </h4>
                        <InputSiswa
                            name="nama_ibu"
                            placeholder="Nama Ibu"
                            type="text"
                        />
                        <InputSiswa
                            name="nik_ibu"
                            placeholder="NIK Ibu"
                            type="text"
                            maxLength="16"
                        />
                        <InputSiswa
                            name="tempat_lahir_ibu"
                            placeholder="Tempat Lahir Ibu"
                            type="text"
                        />
                        <InputSiswa
                            name="tanggal_lahir_ibu"
                            placeholder="Tanggal Lahir Ibu"
                            type="date"
                        />
                        <InputSiswa
                            name="alamat_ibu"
                            placeholder="Alamat Ibu"
                            type="text"
                        />
                        <InputSiswa
                            name="nomor_telp_ibu"
                            placeholder="Nomor HP Ibu"
                            type="text"
                            maxLength="15"
                        />
                        <InputSiswa
                            name="pendidikan_ibu"
                            placeholder="Pendidikan terakhir Ibu"
                            type="text"
                        />
                        <InputSiswa
                            name="pekerjaan_ibu"
                            placeholder="Pekerjaan Ibu"
                            type="text"
                        />
                        <InputSiswa
                            name="penghasilan_ibu"
                            placeholder="Penghasilan Ibu"
                            type="number"
                        />
                        <div className="flex flex-col mb-4">
                            <label htmlFor="jenis_kelamin">
                                Apakah sedang tingal dengan wali?
                            </label>
                            <div className="flex gap-4 text-lg">
                                <label>
                                    <Field
                                        onClick={() => {
                                            setIsHavingWali((prev) => !prev);
                                        }}
                                        type="checkbox"
                                        name="wali_confirmasi"
                                        value="ya"
                                    />{' '}
                                    Ya
                                </label>
                            </div>
                        </div>
                        <hr className="my-5 bg-primary" />
                        {isHavingWali && (
                            <>
                                <h3 className="font-bold text-lg mt-5">
                                    Data Wali (Optional)
                                </h3>

                                <InputSiswa
                                    name="nama_wali"
                                    placeholder="Nama Wali"
                                    type="text"
                                />

                                <InputSiswa
                                    name="nik_wali"
                                    placeholder="NIK Wali"
                                    type="text"
                                    maxLength="16"
                                />

                                <InputSiswa
                                    name="tempat_lahir_wali"
                                    placeholder="Tempat Lahir Wali"
                                    type="text"
                                />

                                <InputSiswa
                                    name="tanggal_lahir_wali"
                                    placeholder="Tanggal Lahir Wali"
                                    type="date"
                                />

                                <InputSiswa
                                    name="alamat_wali"
                                    placeholder="Alamat Wali"
                                    type="text"
                                />

                                <InputSiswa
                                    name="nomor_telp_wali"
                                    placeholder="Nomor HP Wali"
                                    type="text"
                                    maxLength="15"
                                />

                                <InputSiswa
                                    name="pendidikan_wali"
                                    placeholder="Pendidikan terakhir Wali"
                                    type="text"
                                />

                                <InputSiswa
                                    name="pekerjaan_wali"
                                    placeholder="Pekerjaan Wali"
                                    type="text"
                                />

                                <InputSiswa
                                    name="penghasilan_wali"
                                    placeholder="Penghasilan Wali"
                                    type="number"
                                />

                                <hr className="my-5 bg-primary" />
                            </>
                        )}
                        <RadioKelas dataKelas={dataKelas} />

                        <div className="mt-2 flex">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsTambahSiswa((prev) => !prev);
                                }}
                                className="flex items-center mr-3 py-3 px-7 bg-green-600 text-white rounded-md shadow-md hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50"
                            >
                                <IoIosArrowBack /> <span>Kembali</span>
                            </button>

                            <button
                                type="submit"
                                className="py-3 px-7 bg-primary text-white rounded-md shadow-md hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50"
                            >
                                Kirim
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
            {overlayMessage && (
                <OverlayMessage
                    message={overlayMessage}
                    status={status}
                    setOverlayMessage={setOverlayMessage}
                    setIsTambahSiswa={setIsTambahSiswa}
                    editSiswa={true}
                />
            )}
        </>
    );
}

/*

<h3 className="font-bold text-lg mt-5">Data Orang Tua</h3>
            <h4 className="font-medium mt-5">Ayah Kandung</h4>

            <InputSiswa name="nama_ayah" placeholder="Nama Ayah" type="text" />

            <InputSiswa
                name="nik_ayah"
                placeholder="NIK Ayah"
                type="text"
                maxLength="16"
            />

            <InputSiswa
                name="tempat_lahir_ayah"
                placeholder="Tempat Lahir Ayah"
                type="text"
            />

            <InputSiswa
                name="tanggal_lahir_ayah"
                placeholder="Tanggal Lahir Ayah"
                type="date"
            />

            <InputSiswa
                name="alamat_ayah"
                placeholder="Alamat Ayah"
                type="text"
            />

            <InputSiswa
                name="nomor_telp_ayah"
                placeholder="Nomor HP Ayah"
                type="text"
                maxLength="15"
            />

            <InputSiswa
                name="pendidikan_ayah"
                placeholder="Pendidikan terakhir Ayah"
                type="text"
            />

            <InputSiswa
                name="pekerjaan_ayah"
                placeholder="Pekerjaan Ayah"
                type="text"
            />

            <InputSiswa
                name="penghasilan_ayah"
                placeholder="Penghasilan Ayah"
                type="number"
                min="0"
            />

            <h4 className="font-medium mt-5">Ibu Kandung</h4>

            <InputSiswa name="nama_ibu" placeholder="Nama Ibu" type="text" />

            <InputSiswa
                name="nik_ibu"
                placeholder="NIK Ibu"
                type="text"
                maxLength="16"
            />

            <InputSiswa
                name="tempat_lahir_ibu"
                placeholder="Tempat Lahir Ibu"
                type="text"
            />

            <InputSiswa
                name="tanggal_lahir_ibu"
                placeholder="Tanggal Lahir Ibu"
                type="date"
            />

            <InputSiswa
                name="alamat_ibu"
                placeholder="Alamat Ibu"
                type="text"
            />

            <InputSiswa
                name="nomor_telp_ibu"
                placeholder="Nomor HP Ibu"
                type="text"
                maxLength="15"
            />

            <InputSiswa
                name="pendidikan_ibu"
                placeholder="Pendidikan terakhir Ibu"
                type="text"
            />

            <InputSiswa
                name="pekerjaan_ibu"
                placeholder="Pekerjaan Ibu"
                type="text"
            />

            <InputSiswa
                name="penghasilan_ibu"
                placeholder="Penghasilan Ibu"
                type="number"
                min="0"
            />

            <h3 className="font-bold text-lg mt-5">Data Wali (Optional)</h3>

            <InputSiswa name="nama_wali" placeholder="Nama Wali" type="text" />

            <InputSiswa
                name="nik_wali"
                placeholder="NIK Wali"
                type="text"
                maxLength="16"
            />

            <InputSiswa
                name="tempat_lahir_wali"
                placeholder="Tempat Lahir Wali"
                type="text"
            />

            <InputSiswa
                name="tanggal_lahir_wali"
                placeholder="Tanggal Lahir Wali"
                type="date"
            />

            <InputSiswa
                name="alamat_wali"
                placeholder="Alamat Wali"
                type="text"
            />

            <InputSiswa
                name="nomor_telp_wali"
                placeholder="Nomor HP Wali"
                type="text"
                maxLength="15"
            />

            <InputSiswa
                name="pendidikan_wali"
                placeholder="Pendidikan terakhir Wali"
                type="text"
            />

            <InputSiswa
                name="pekerjaan_wali"
                placeholder="Pekerjaan Wali"
                type="text"
            />

            <InputSiswa
                name="penghasilan_wali"
                placeholder="Penghasilan Wali"
                type="number"
                min="0"
            />

*/
