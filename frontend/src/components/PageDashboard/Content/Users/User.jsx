import { Pagination, PaginationItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import {
    getTUPerPageAction,
    getTUByIdAction,
    deleteTUAction,
} from '../../../../actions/tu';
import FormTambahUser from './FormTambahUser';
import EditUser from './EditUser';
import Konfirmasi from './Konfirmasi';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};
export default function User() {
    const { tu, tuDetail, numberOfPages, startIndex } = useSelector(
        (state) => state.tu
    );
    const [hapusUser, setHapusUser] = useState({});
    const [isEditUser, setIsEditUser] = useState(false);
    const [isTambahUser, setIsTambahUser] = useState(false);
    const [isKonfirmasi, setIsKonfirmasi] = useState(false);
    const [id, setId] = useState('');
    const dispatch = useDispatch();
    const query = useQuery();
    const page = query.get('page') || 1;

    useEffect(() => {
        dispatch(getTUPerPageAction(page));
    }, [page]);

    const editHandler = (e) => {
        const id = e.target.previousElementSibling.value;
        try {
            dispatch(getTUByIdAction({ uuid_user: id }));
            setIsEditUser(true);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteHandler = (e) => {
        setId(e.target.previousElementSibling.previousElementSibling.value);

        setIsKonfirmasi(true);
        // try {
        //     dispatch(deleteTUAction({ uuid_user: id }));
        // } catch (error) {
        //     console.log(error);
        // }
    };
    const konfimasi = (status) => {
        if (status) {
            try {
                dispatch(deleteTUAction({ uuid_user: id }));
            } catch (error) {
                console.log(error);
            }
            setHapusUser({});
        } else {
            console.log('tidak');
            console.log(id);
            setHapusUser({});
        }
    };

    useEffect(() => {
        const deletedUser = tu.find((item) => item.uuid_user === id);
        setHapusUser(deletedUser);
    }, [hapusUser, id]);

    return (
        <div className="bg-white  border-[3px] border-primary p-10 rounded-lg">
            <h1 className="font-medium text-xl text-gray-800 mb-3">
                LIST USER TU
            </h1>
            <div className="mb-3">
                <button
                    onClick={() => {
                        setIsTambahUser(true);
                    }}
                    className="flex gap-2 items-center rounded-md p-2 bg-primary text-white font-medium"
                >
                    <AiOutlinePlus /> <span>Tambah TU</span>
                </button>
            </div>
            <div>
                <table className="table-auto w-full">
                    <thead>
                        <tr className="border-2  border-primary">
                            <td className="p-2">No.</td>
                            <td className="p-2">Nama</td>
                            <td className="p-2">Nomor Telephone</td>
                            <td className="p-2">Aksi</td>
                        </tr>
                    </thead>
                    <tbody className="border-2 border-primary">
                        {tu.map((item, index) => {
                            return (
                                <tr key={item.uuid_user}>
                                    <td className="p-2 text-center">
                                        {startIndex + index}.{' '}
                                    </td>
                                    <td className="p-2  ">{item.fullName}</td>
                                    <td className="p-2  ">{item.nomor_telp}</td>
                                    <td className="p-2   flex gap-2 justify-start">
                                        <input
                                            type="hidden"
                                            name="uuid_user"
                                            value={item.uuid_user}
                                        />
                                        <button
                                            onClick={editHandler}
                                            className="bg-primary text-white font-medium p-2 rounded-md"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={deleteHandler}
                                            className="bg-red-500 text-white font-medium p-2 rounded-md"
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {tu?.length === 0 && (
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
                                to={`/dashboard/tu?page=${item.page}`}
                            />
                        )}
                    />
                </div>
            </div>

            {isTambahUser && (
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#000000be]">
                    <FormTambahUser setIsTambahUser={setIsTambahUser} />
                </div>
            )}

            {isEditUser && tuDetail?.fullName && (
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#000000be]">
                    {' '}
                    <EditUser
                        tuDetail={tuDetail}
                        setIsEditUser={setIsEditUser}
                    />
                </div>
            )}
            {hapusUser?.fullName && isKonfirmasi && (
                <Konfirmasi
                    setIsKonfirmasi={setIsKonfirmasi}
                    message={`Apakah anda yakin akan menghapus user ${hapusUser?.fullName} ? `}
                    konfirmasi={konfimasi}
                />
            )}
        </div>
    );
}
