import { Form, Formik } from 'formik';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import InputSiswa from '../Siswa/InputSiswa';
import RadioKelamin from '../Siswa/RadioKelamin';
import Resizer from 'react-image-file-resizer';
import { editSchema } from './ValidateSchema';

import { useDispatch, useSelector } from 'react-redux';
import { updateTUAction } from '../../../../actions/tu';

export default function EditUser({ setIsEditUser, tuDetail }) {
    const dispatch = useDispatch();

    const submitHandler = async (values, { setSubmitting }) => {
        try {
            console.log(values);
            const {
                fullName,
                alamat,
                tempatLahir,
                tanggalLahir,
                nomor_telp,
                jenis_kelamin,
                type,
                username,
                password,
                photo,
            } = values;
            if (password) {
                const data = {
                    uuid_user: tuDetail.uuid_user,
                    fullName,
                    alamat,
                    tempatLahir,
                    tanggalLahir,
                    nomor_telp,
                    jenis_kelamin,
                    type,
                    username,
                    password,
                    photo,
                };
                dispatch(updateTUAction(data));
            } else {
                const data = {
                    uuid_user: tuDetail.uuid_user,
                    fullName,
                    alamat,
                    tempatLahir,
                    tanggalLahir,
                    nomor_telp,
                    jenis_kelamin,
                    type,
                    username,
                    photo,
                };
                dispatch(updateTUAction(data));
            }
        } catch (error) {
            console.log('error');
        }
    };
    return (
        <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    bg-white w-[700px] h-[90vh] rounded-lg overflow-hidden py-5"
        >
            <div
                onClick={() => {
                    setIsEditUser(false);
                }}
                className="absolute bg-red-error h-[40px] w-[40px] top-0 right-0 cursor-pointer"
            >
                <AiOutlineClose className="text-white text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="flex flex-col mb-10 h-full overflow-y-auto p-10">
                <h3 className="font-medium text-xl mb-10 text-center">
                    Form Tambah User
                </h3>
                <div>
                    <h4 className="text-lg font-bold">Data USER</h4>
                    <div className="mt-3">
                        <Formik
                            initialValues={{
                                fullName: tuDetail?.fullName,
                                alamat: tuDetail?.alamat,
                                tempatLahir: tuDetail?.tempatLahir,
                                tanggalLahir: tuDetail?.tanggalLahir,
                                nomor_telp: tuDetail?.nomor_telp,
                                jenis_kelamin: tuDetail?.jenis_kelamin,
                                type: '0',
                                username: tuDetail?.username,
                                password: '',
                                photo: tuDetail?.photo,
                            }}
                            validationSchema={editSchema}
                            onSubmit={submitHandler}
                        >
                            {(formik) => {
                                return (
                                    <Form>
                                        <InputSiswa
                                            autoFocus={true}
                                            name="fullName"
                                            placeholder="Nama Lengkap"
                                            type="text"
                                            maxLength="50"
                                        />
                                        <InputSiswa
                                            name="alamat"
                                            placeholder="Alamat Lengkap"
                                            type="text"
                                            maxLength="50"
                                        />
                                        <InputSiswa
                                            name="tempatLahir"
                                            placeholder="Tempat Lahir"
                                            type="text"
                                            maxLength="50"
                                        />
                                        <InputSiswa
                                            name="tanggalLahir"
                                            placeholder="Tanggal Lahir"
                                            type="date"
                                        />
                                        <InputSiswa
                                            name="nomor_telp"
                                            placeholder="Nomor Telephone"
                                            type="tel"
                                            maxLength="20"
                                        />
                                        <RadioKelamin />
                                        <InputSiswa
                                            name="username"
                                            placeholder="Username"
                                            type="text"
                                            maxLength="20"
                                        />
                                        <InputSiswa
                                            name="password"
                                            placeholder="Password (Isi jika ingin mengganti password)"
                                            type="password"
                                            maxLength="20"
                                        />
                                        <div className="flex flex-col mb-4">
                                            <label
                                                htmlFor=""
                                                className="font-medium text-lg mb-2"
                                            >
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
                                                                event.target
                                                                    .files[0],
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
                                        <div>
                                            <button
                                                type="submit"
                                                className="py-3 px-7 bg-primary text-white rounded-md shadow-md hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50"
                                            >
                                                Kirim
                                            </button>
                                        </div>
                                    </Form>
                                );
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}
