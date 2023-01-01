import React, { useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import ReactToPrint from 'react-to-print';
// import StrukPembayaran from './StrukPembayaran';

// const StrukPembayaran = React.forwardRef((props, ref) => {
//     return (
//         <div className="min-w-[439px] min-h-[479px] p-10" ref={ref}>
//             <div className="">
//                 <h3 className="font-bold text-lg text-center">
//                     Struk Pembayaran
//                 </h3>
//             </div>
//             <div className="mt-[35px] flex flex-col gap-2 text-sm">
//                 <p>Nama : {props.data.nama}</p>
//                 <p>
//                     Jumlah Bulan Yang Dibayar :{' '}
//                     {props.data.jumlahBulanYangDibayar}
//                 </p>
//                 <p>Total : {props.data.total}</p>
//                 <p>SPP Talah Dibayar hingga : {props.data.terakhirDibayar}</p>
//             </div>

//             <div className="mt-[35px] w-full flex flex-col items-end">
//                 <div className="flex flex-col gap-5">
//                     <p>Tata Usaha</p>
//                     <p>{props.data.fullName}</p>
//                 </div>
//             </div>
//             <div className="mt-[65px] text-sm">
//                 <p className="mb-1">TPQ BAITUSSALAM</p>
//                 <p>{props.data.date}</p>
//             </div>
//         </div>
//     );
// });

export default function OverlayMessage({
    message,
    setOverlayMessage,
    status,
    setIsTambahSiswa,
    setIsTambahSPP,
    data,
}) {
    function convertTZ(date, tzString) {
        return new Date(
            (typeof date === 'string' ? new Date(date) : date).toLocaleString(
                'en-US',
                { timeZone: tzString }
            )
        );
    }

    const date = convertTZ(new Date(), 'Asia/Jakarta');
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
                        }}
                        className="py-2 px-5 bg-red-error text-white rounded-lg hover:bg-red-400 transition duration-300"
                    >
                        Keluar
                    </button>
                    <button
                        onClick={() => {
                            setOverlayMessage('');
                        }}
                        className="py-2 px-5 bg-primary text-white rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Input Data Lagi
                    </button>
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

            {/* <div
                className="min-w-[439px] min-h-[479px] p-10"
                ref={componentRef}
            >
                <div className="">
                    <h3 className="font-bold text-lg text-center">
                        Struk Pembayaran
                    </h3>
                </div>
                <div className="mt-[35px] flex flex-col gap-2 text-sm">
                    <p>Nama : {data.nama}</p>
                    <p>
                        Jumlah Bulan Yang Dibayar :{' '}
                        {data.jumlahBulanYangDibayar}
                    </p>
                    <p>Total : {data.total}</p>
                    <p>SPP Talah Dibayar hingga : {data.terakhirDibayar}</p>
                </div>

                <div className="mt-[35px] w-full flex flex-col items-end">
                    <div className="flex flex-col gap-5">
                        <p>Tata Usaha</p>
                        <p>{data.fullName}</p>
                    </div>
                </div>
                <div className="mt-[65px] text-sm">
                    <p className="mb-1">TPQ BAITUSSALAM</p>
                    <p>{date}</p>
                </div>
            </div> */}
        </div>
    );
}
