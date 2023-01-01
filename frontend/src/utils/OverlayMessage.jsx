import React, { useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { useNavigate } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

export default function OverlayMessage({
    message,
    setOverlayMessage,
    status,
    setIsTambahSiswa,
    setIsTambahSPP,
    editSiswa,
}) {
    const navigate = useNavigate();
    const componentRef = useRef();
    return (
        <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] z-30">
            <div className="absolute h-64 w-96 bg-white border-[3px] border-primary rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col items-center mt-4">
                    <h3
                        className={`text-2xl font-bold mb-4 ${
                            status === 'Berhasil'
                                ? 'text-green-500'
                                : 'text-red-error'
                        }`}
                    >
                        {status}
                    </h3>
                    <p className="text-lg font-light">{message}</p>
                </div>
                <div className="mt-7 text-center flex gap-5 justify-center">
                    <button
                        onClick={() => {
                            setOverlayMessage('');
                            if (setIsTambahSPP) setIsTambahSPP(false);
                            if (setIsTambahSiswa) setIsTambahSiswa(false);
                            if (editSiswa) navigate(-1);
                        }}
                        className="py-2 px-5 bg-red-error text-white rounded-lg hover:bg-red-400 transition duration-300"
                    >
                        Keluar
                    </button>
                    {!editSiswa && (
                        <button
                            onClick={() => {
                                setOverlayMessage('');
                            }}
                            className="py-2 px-5 bg-primary text-white rounded-lg hover:bg-blue-600 transition duration-300"
                        >
                            Input Data Lagi
                        </button>
                    )}
                </div>
                {setIsTambahSPP && (
                    <div className="w-full flex justify-center mt-5">
                        <ReactToPrint
                            trigger={() => (
                                <button className="py-2 px-5 bg-blue-400 text-white rounded-lg">
                                    Print
                                </button>
                            )}
                            content={() => componentRef.current}
                        />
                    </div>
                )}
            </div>
            {false && <StrukPembayaran />}
        </div>
    );
}
