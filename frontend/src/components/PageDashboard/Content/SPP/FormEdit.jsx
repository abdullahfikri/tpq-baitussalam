import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSiswa } from '../../../../actions/siswa';
import { insertSPP } from '../../../../actions/spp';
import { Formik, Form } from 'formik';
import ValidateSchema from './ValidateSchema';

export default function FormEdit({ setIsTambahSPP, id_spp }) {
    const [nama, setNama] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isSellect, setIsSellect] = useState(false);
    const [filterSiswa, setFilterSiswa] = useState([]);

    const [buttonDisable, setButtonDisable] = useState(true);

    const [terakhirDibayar, setTerakhirDibayar] = useState('');

    const [total, setTotal] = useState(0);

    const [jumlahBulanYangDibayar, setJumlahBulanYangDibayar] = useState(0);

    const [uuid_siswa_filter, setUuid_siswa_filter] = useState('');

    const { siswa } = useSelector((state) => state.siswa);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllSiswa());
    }, []);

    useEffect(() => {
        const find = setTimeout(() => {
            // let siswaCopy = [...siswa];
            // if (siswa.length > 5) {
            //     siswaCopy = siswaCopy.slice(0, 5);
            // }
            setIsSearch(true);
            const hasil = siswa.filter((item) => {
                return item.nama_lengkap
                    .toLowerCase()
                    .includes(nama.toLowerCase());
            });

            if (hasil.length > 7) {
                setFilterSiswa(hasil.slice(0, 7));
            } else {
                setFilterSiswa(hasil);
            }

            console.log(filterSiswa);
        }, 600);

        return () => {
            setIsSearch(false);
            clearTimeout(find);
        };
    }, [nama]);

    useEffect(() => {
        const find = siswa.find((item) => {
            return item.uuid_siswa === uuid_siswa_filter;
        });

        const bulanBayarSPPTerakhir = find?.bulan_spp_terakhir_dibayar;

        if (!bulanBayarSPPTerakhir) return;

        const monthName = [
            'Januari',
            'Februari',
            'Maret',
            'April',
            'Mei',
            'Juni',
            'Juli',
            'Agustus',
            'September',
            'Oktober',
            'November',
            'Desember',
        ];

        const month = new Date(bulanBayarSPPTerakhir).getMonth();

        // const getBulan =
        // console.log(monthName[month]);
        setTerakhirDibayar(
            `${monthName[month]} ${new Date(
                bulanBayarSPPTerakhir
            ).getFullYear()}`
        );
    }, [uuid_siswa_filter]);

    useEffect(() => {
        if (jumlahBulanYangDibayar === 0) {
            setButtonDisable(true);
        }

        if (nama === '') {
            setButtonDisable(true);
        }

        if (nama !== '' && jumlahBulanYangDibayar !== 0) {
            setButtonDisable(false);
        }
    }, [nama, jumlahBulanYangDibayar]);

    const menuHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // setUuid_siswa_filter(e.target.children[0].innerText);

        if (e.target.id === 'nik') {
            setNama(e.target.previousSibling.innerText);
            setUuid_siswa_filter(
                e.target.parentElement.previousSibling.innerText
            );
        }

        if (e.target.classList.contains('photo')) {
            setNama(
                e.target.parentElement.parentElement.children[1].children[0]
                    .innerText
            );
            setUuid_siswa_filter(
                e.target.parentElement.previousSibling.previousSibling.innerText
            );
        }

        if (e.target.classList.contains('filter-parrent')) {
            setNama(e.target.children[1].children[0].innerText);
            setUuid_siswa_filter(e.target.children[0].innerText);
        }

        if (e.target.id === 'nama') {
            setNama(e.target.innerText);
            setUuid_siswa_filter(
                e.target.parentElement.previousSibling.innerText
            );
        }

        setIsSellect(true);

        setIsSearch(false);

        setIsLoading(false);
    };

    const jumlahBulanDibayarHandler = (e) => {
        e.preventDefault();
        const value = +e.target.value;

        if (isNaN(value)) {
            // set error
            return;
        }
        setTotal(value * 30000);

        setJumlahBulanYangDibayar(value);
    };

    const submitHandler = async (values, { setSubmitting }) => {
        const date = new Date(filterSiswa[0]?.bulan_spp_terakhir_dibayar);

        const bulan_spp_terakhir_dibayar = new Date(
            date.setMonth(date.getMonth() + jumlahBulanYangDibayar)
        )
            .toISOString()
            .slice(0, 10);
        const tanggal_bayar = new Date().toISOString().slice(0, 10);
        const jumlah_bulan_dibayar = jumlahBulanYangDibayar;
        const jumlah_bayar = total;
        const uuid_siswa = uuid_siswa_filter;

        dispatch(
            insertSPP({
                bulan_spp_terakhir_dibayar,
                tanggal_bayar,
                jumlah_bulan_dibayar,
                jumlah_bayar,
                uuid_siswa,
            })
        );

        setIsTambahSPP(false);
    };

    return (
        <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    bg-white w-[700px] h-[90vh] rounded-lg overflow-hidden py-5"
        >
            <div
                onClick={() => {
                    setIsTambahSPP(false);
                }}
                className="absolute bg-red-error h-[40px] w-[40px] top-0 right-0 cursor-pointer"
            >
                <AiOutlineClose className="text-white text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="flex flex-col mb-10 h-full overflow-y-auto p-10">
                <h3 className="font-medium text-xl mb-10 text-center">
                    Form Tambah SPP
                </h3>
                <div>
                    <h4 className="text-lg font-bold">Data SPP</h4>
                    <div className="mt-3">
                        <Formik
                            initialValues={{
                                name: '',
                                jumlah_bulan_dibayar: '',
                                jumlah_bayar: '',
                            }}
                            onSubmit={submitHandler}
                        >
                            {(formik) => (
                                <Form>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Nama "
                                            className={`p-3 outline-none border-2 border-primary rounded-md w-full ${
                                                isSellect &&
                                                'bg-gray-200 text-primary'
                                            }`}
                                            name="name"
                                            value={nama}
                                            onFocus={() => {
                                                setIsLoading(true);

                                                setIsSellect(false);
                                            }}
                                            onBlur={() => {
                                                // setIsLoading(false);
                                            }}
                                            onChange={(e) => {
                                                e.preventDefault();
                                                setNama(e.target.value);
                                            }}
                                        />
                                        {isLoading && (
                                            <div
                                                className="p-3 border-t-0 border-2 top-[48px]
                                 border-primary absolute w-full min-h-[50px] max-h-72 overflow-y-auto bg-white"
                                            >
                                                {isSearch &&
                                                    (filterSiswa.length > 0 ? (
                                                        filterSiswa.map(
                                                            (item, id) => {
                                                                return (
                                                                    <div
                                                                        key={id}
                                                                        className="filter-parrent p-1 px-3  hover:bg-primary hover:text-white cursor-pointer flex items-center justify-between"
                                                                        onClick={
                                                                            menuHandler
                                                                        }
                                                                    >
                                                                        <span className="hidden">
                                                                            {
                                                                                item?.uuid_siswa
                                                                            }
                                                                        </span>

                                                                        <div className="flex flex-col">
                                                                            <span id="nama">
                                                                                {
                                                                                    item?.nama_lengkap
                                                                                }
                                                                            </span>
                                                                            <span
                                                                                id="nik"
                                                                                className=" text-sm font-medium text-gray-500"
                                                                            >
                                                                                NIK:{' '}
                                                                                {
                                                                                    item?.nik_anak
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                        <div className="photo h-[60px] w-[60] overflow-hidden">
                                                                            <img
                                                                                src={
                                                                                    item?.photo
                                                                                }
                                                                                alt=""
                                                                                className="photo object-cover h-full w-full"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                );
                                                            }
                                                        )
                                                    ) : (
                                                        <p className="text-center">
                                                            Data tidak ditemukan
                                                        </p>
                                                    ))}
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            disabled
                                            className={`cursor-not-allowed p-3 outline-none border-2 border-primary rounded-md w-full mt-3 ${
                                                !isSellect
                                                    ? 'text-gray-400'
                                                    : 'bg-gray-200 text-gray-600'
                                            }`}
                                            value={`Bulan Terakhir yang Terbayar : ${terakhirDibayar}`}
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="tel"
                                            name="jumlah_bulan_dibayar"
                                            placeholder="Jumlah Bulan Dibayar"
                                            className="p-3 outline-none border-2 border-primary rounded-md w-full mt-3"
                                            onChange={jumlahBulanDibayarHandler}
                                            maxLength="2"
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="tel"
                                            name="jumlah_bayar"
                                            className={`cursor-not-allowed p-3 outline-none border-2 border-primary rounded-md w-full mt-3 ${
                                                !total && 'text-gray-400'
                                            }`}
                                            value={`Total : ${total}`}
                                            readOnly
                                        />
                                    </div>

                                    <div>
                                        <input
                                            type="hidden"
                                            name="uuid_siswa"
                                            value={uuid_siswa_filter}
                                        />
                                    </div>

                                    <div className="flex justify-end mt-5">
                                        <button
                                            type="submit" // submit
                                            className={` text-white px-5 py-2 rounded-md ${
                                                buttonDisable
                                                    ? 'cursor-not-allowed bg-gray-300'
                                                    : 'bg-primary'
                                            }`}
                                            disabled={buttonDisable}
                                        >
                                            Simpan
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}
