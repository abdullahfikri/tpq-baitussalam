import React, { useEffect, useState } from 'react';

import { AiOutlineClose } from 'react-icons/ai';

import { Formik, Form, Field } from 'formik';
import validateSchema from './Validate';
import InputSiswa from './InputSiswa';
import TextAreaSiswa from './TextAreaSiswa';
import FormDataSiswa from './FormDataSiswa';
import FormDataOrtu from './FormDataOrtu';

export default function FormSiswa({
    setIsTambahSiswa,
    setStatus,
    setOverlayMessage,
}) {
    const [isTambahDataSiswa, setIsTambahDataSiswa] = useState(true);
    const [dataSiswa, setDataSiswa] = useState({});

    return (
        <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    bg-white w-[700px] h-[90vh] rounded-lg overflow-hidden py-5"
        >
            <div
                onClick={() => {
                    setIsTambahSiswa(false);
                }}
                className="absolute bg-red-error h-[40px] w-[40px] top-0 right-0 cursor-pointer"
            >
                <AiOutlineClose className="text-white text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="flex flex-col justify-between items-center mb-10 overflow-y-auto h-full">
                <h3 className="font-medium text-xl mb-10">Form Data Siswa</h3>
                {isTambahDataSiswa ? (
                    <FormDataSiswa
                        setIsTambahDataSiswa={setIsTambahDataSiswa}
                        setDataSiswa={setDataSiswa}
                    />
                ) : (
                    <FormDataOrtu
                        setIsTambahSiswa={setIsTambahSiswa}
                        setIsTambahDataSiswa={setIsTambahDataSiswa}
                        setDataSiswa={setDataSiswa}
                        dataSiswa={dataSiswa}
                        setOverlayMessage={setOverlayMessage}
                        setStatus={setStatus}
                    />
                )}
            </div>
        </div>
    );
}
