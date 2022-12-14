import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { TfiWrite } from 'react-icons/tfi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import FormSiswa from './FormSiswa';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import { getSiswa } from '../../../../actions/siswa';
import { useDispatch, useSelector } from 'react-redux';

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

import Loading from '../../../helpers/Loading';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

export default function Siswa() {
    const { currentPage, siswa, isLoading, numberOfPage, startIndex } =
        useSelector((state) => state.siswa);

    const [siswaData, setSiswaData] = useState(true);
    const [isTambahSiswa, setIsTambahSiswa] = useState(!true);
    const dispatch = useDispatch();
    const history = useNavigate();
    const query = useQuery();
    const page = query.get('page') || 1;

    useEffect(() => {
        if (page) {
            dispatch(getSiswa(page));
        }
    }, [dispatch, page]);

    console.log(currentPage, siswa, isLoading, numberOfPage);
    return (
        <div className="w-full bg-white border-[3px] border-primary p-10 rounded-lg">
            <h3 className="font-medium text-xl">Data Siswa</h3>
            <div className="mt-3 flex justify-between items-center">
                <div>
                    <button
                        className="flex items-center gap-1 bg-[#7c7c7c] px-3 py-2 rounded-lg text-white"
                        onClick={() => {
                            setIsTambahSiswa(true);
                        }}
                    >
                        <AiOutlinePlus /> Tambah Siswa
                    </button>
                </div>
            </div>

            {siswaData && (
                <div className="mt-4 relative">
                    {isLoading && <Loading />}
                    <table className="w-full  table-auto">
                        <thead>
                            <tr className="border-[2px] border-primary  text-gray-600">
                                <th className="text-center py-3 ">No.</th>
                                <th className="text-left">Nama</th>
                                <th className="text-left">Kelas</th>
                                <th className="text-left">Status</th>
                                <th className="text-left">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {siswa?.map((item, index) => {
                                return (
                                    <tr
                                        key={item.uuid_siswa}
                                        className="border-[2px] border-primary "
                                    >
                                        <td className=" text-center">
                                            {index + startIndex}.
                                        </td>
                                        <td className="">
                                            <Link
                                                to={`/dashboard/siswa/detail/${item.nik_anak}`}
                                            >
                                                {item.nama_lengkap}
                                            </Link>
                                        </td>
                                        <td className="">
                                            {item?.kela?.nama_kelas}
                                        </td>
                                        <td>
                                            <p
                                                className={`${
                                                    item.status === 'active' &&
                                                    'bg-green-600 text-white'
                                                } py-1 px-3 w-fit rounded-full`}
                                            >
                                                {item.status}
                                            </p>
                                        </td>
                                        <td className="">
                                            <button
                                                className="bg-[#7c7c7c]  py-2 rounded-lg text-white  w-[80px] mr-2 "
                                                onClick={() => {
                                                    history(
                                                        `/dashboard/siswa/edit/${item.nik_anak}`
                                                    );
                                                }}
                                            >
                                                <TfiWrite className="m-auto text-xl" />
                                            </button>
                                            <button className="bg-red-error  py-2 rounded-lg text-white w-[80px]">
                                                <RiDeleteBin6Line className="m-auto text-xl" />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {siswa?.length === 0 && (
                        <h3 className="ml-2 font-medium text-xl my-3">
                            No Data Found
                        </h3>
                    )}
                    <div className="mt-2 flex justify-center">
                        <Pagination
                            count={numberOfPage || 1}
                            page={+page || 1}
                            variant="outlined"
                            color="primary"
                            renderItem={(item) => (
                                <PaginationItem
                                    {...item}
                                    component={Link}
                                    to={`/dashboard/siswa?page=${item.page}`}
                                />
                            )}
                        />
                    </div>
                </div>
            )}
            {isTambahSiswa && (
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#000000be]">
                    <FormSiswa setIsTambahSiswa={setIsTambahSiswa} />
                </div>
            )}
        </div>
    );
}
