import React, { useEffect, useState } from 'react';

import { AiOutlinePlus } from 'react-icons/ai';

import { useSelector, useDispatch } from 'react-redux';
import { getLogs } from '../../../../actions/logs';
import { Link, useLocation } from 'react-router-dom';

import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};
export default function Logs() {
    const dispatch = useDispatch();
    const { logs, currentPage, numberOfPages, isLoading, startIndex } =
        useSelector((state) => state.logs);

    console.log(logs);

    const query = useQuery();
    const page = query.get('page') || 1;

    useEffect(() => {
        dispatch(getLogs(page));
    }, [page]);

    return (
        <div className="bg-white  border-[3px] border-primary p-10 rounded-lg">
            <h1 className="font-medium text-xl text-gray-800 mb-3">LIST SPP</h1>
            <div>
                <div>
                    {/* <div className="mb-3">
                        <button
                            onClick={() => {}}
                            className="flex gap-2 items-center rounded-md p-2 bg-primary text-white font-medium"
                        >
                            <AiOutlinePlus /> <span>Tambah SPP SISWA</span>
                        </button>
                    </div> */}
                    <div>
                        <table className="table-auto w-full">
                            <thead>
                                <tr className="border-2  border-primary">
                                    <th className="p-2">No.</th>
                                    <th className="p-2">User</th>
                                    <th className="p-2">Aksi</th>
                                    <th className="p-2">Tanggal</th>
                                </tr>
                            </thead>
                            <tbody className="border-2 border-primary">
                                {logs?.map((item, index) => {
                                    const date = new Date(item.waktu);
                                    const tanggal = date.toLocaleDateString();
                                    const waktu = date.toLocaleTimeString();
                                    console.log(tanggal, waktu);
                                    console.log();
                                    return (
                                        <tr key={item.uuid_logs}>
                                            <td className="p-2 text-center">
                                                {startIndex + index}.{' '}
                                            </td>
                                            <td className="p-2 text-center">
                                                {item?.user?.fullName}
                                            </td>
                                            <td className="p-2 text-center">
                                                {item.message}
                                            </td>
                                            <td className="p-2 text-center">
                                                {`${tanggal} Jam: ${waktu}`}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
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
                                        to={`/dashboard/logs?page=${item.page}`}
                                    />
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
