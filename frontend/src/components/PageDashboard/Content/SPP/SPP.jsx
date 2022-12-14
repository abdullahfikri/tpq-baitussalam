import React, { useEffect, useState } from 'react';

import { AiOutlinePlus } from 'react-icons/ai';
import FormTambahSPP from './FormTambahSPP';
import Pemasukan from './Pemasukan';

import { useSelector, useDispatch } from 'react-redux';
import { getSPP } from '../../../../actions/spp';
import { Link, useLocation } from 'react-router-dom';

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};
export default function SPP() {
    const dispatch = useDispatch();
    const { spp, currentPage, numberOfPages, startIndex } = useSelector(
        (state) => state.spp
    );

    const [isTambahSPP, setIsTambahSPP] = useState(false);
    const [idSelectedEdit, setIdSelectedEdit] = useState('');

    const query = useQuery();
    const page = query.get('page') || 1;

    useEffect(() => {
        dispatch(getSPP(page));
    }, [page]);

    console.log(spp, currentPage, numberOfPages, startIndex);

    const editHandler = (e) => {
        e.preventDefault();

        // console.log(e.target.previousSibling.value);
        setIdSelectedEdit(e.target.previousSibling.value);
    };
    console.log(idSelectedEdit);

    return (
        <div className="bg-white  border-[3px] border-primary p-10 rounded-lg">
            <h1 className="font-medium text-xl text-gray-800 mb-3">LIST SPP</h1>
            <div>
                <div>
                    <div className="mb-3">
                        <button
                            onClick={() => {
                                setIsTambahSPP(true);
                            }}
                            className="flex gap-2 items-center rounded-md p-2 bg-primary text-white font-medium"
                        >
                            <AiOutlinePlus /> <span>Tambah SPP SISWA</span>
                        </button>
                    </div>
                    <div>
                        <table className="table-auto w-full">
                            <thead>
                                <tr className="border-2  border-primary">
                                    <th className="p-2">No.</th>
                                    <th className="p-2">Nama Siswa</th>
                                    <th className="p-2">Tanggal Pembayaran</th>
                                    <th className="p-2">Jumlah Bulan</th>
                                    <th className="p-2">Jumlah Pembayaran</th>
                                    <th className="p-2">Aksi</th>
                                </tr>
                            </thead>
                            <tbody className="border-2 border-primary">
                                {spp?.map((item, index) => {
                                    const format = item.jumlah_bayar
                                        ?.toString()
                                        .split('')
                                        .reverse()
                                        .join('');
                                    const convert = format?.match(/\d{1,3}/g);
                                    const rupiah =
                                        'Rp ' +
                                        convert
                                            ?.join('.')
                                            .split('')
                                            .reverse()
                                            .join('');

                                    return (
                                        <tr key={item.uuid_spp}>
                                            <td className="p-2 text-center">
                                                {startIndex + index}.{' '}
                                            </td>
                                            <td className="p-2 text-center">
                                                {item.siswa.nama_lengkap}
                                            </td>
                                            <td className="p-2 text-center">
                                                {item.tanggal_bayar}
                                            </td>
                                            <td className="p-3 text-center">
                                                {item.jumlah_bulan_dibayar}
                                            </td>
                                            <td className="p-2 text-center">
                                                {rupiah}
                                            </td>
                                            <td className="p-2 text-center">
                                                <input
                                                    type="hidden"
                                                    name="uuid_spp"
                                                    value={item.uuid_spp}
                                                />
                                                <button
                                                    onClick={editHandler}
                                                    className="bg-primary text-white rounded-md p-2"
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        {spp?.length === 0 && (
                            <h3 className="ml-2 font-medium text-xl my-3">
                                No Data Found
                            </h3>
                        )}
                        <div className="mt-2 mb-5 border-2 border-primary py-3 rounded-lg flex justify-center">
                            <Pagination
                                count={numberOfPages || 1}
                                page={+page || 1}
                                variant="outlined"
                                color="primary"
                                renderItem={(item) => (
                                    <PaginationItem
                                        {...item}
                                        component={Link}
                                        to={`/dashboard/spp?page=${item.page}`}
                                    />
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {isTambahSPP && (
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#000000be]">
                    <FormTambahSPP setIsTambahSPP={setIsTambahSPP} />
                </div>
            )}

            <Pemasukan />
        </div>
    );
}
