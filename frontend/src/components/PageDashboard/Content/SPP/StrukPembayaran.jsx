import React, { useRef, useImperativeHandle } from 'react';

const StrukPembayaran = React.forwardRef((props, ref) => {
    const data = props.data;
    // nama,
    // jumlahBulanYangDibayar,
    // total,
    // terakhirDibayar,
    // fullName

    function convertTZ(date, tzString) {
        return new Date(
            (typeof date === 'string' ? new Date(date) : date).toLocaleString(
                'en-US',
                { timeZone: tzString }
            )
        );
    }

    const date = convertTZ(new Date(), 'Asia/Jakarta');

    return (
        <div className="min-w-[439px] min-h-[479px] p-10" ref={ref}>
            <div className="">
                <h3 className="font-bold text-lg text-center">
                    Struk Pembayaran
                </h3>
            </div>
            <div className="mt-[35px] flex flex-col gap-2 text-sm">
                <p>Nama : {data.nama}</p>
                <p>Jumlah Bulan Yang Dibayar : {data.jumlahBulanYangDibayar}</p>
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
        </div>
    );
});

export default StrukPembayaran;
