import React, { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { getSiswaByNIK } from '../../../../../actions/siswa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SiswaItem from './SiswaItem';

import { Image } from 'primereact/image';

import priaImage from '../../../../../assets/user.jpg';
import perempuanImage from '../../../../../assets/perempuan.png';

// const useQuery = () => {
//     return new URLSearchParams(useLocation().search);
// };

export default function SiswaDetail() {
    const { siswaDetail } = useSelector((state) => state.siswa);
    const siswa = siswaDetail;
    const navigate = useNavigate();

    // const base64string = btoa(
    //     String.fromCharCode(...new Uint8Array(siswa?.photo.data || []))
    // );

    console.log(siswaDetail);
    let keterangan_yatim;

    if (siswa?.keterangan_yatim === 'yatim_piatu')
        keterangan_yatim = 'Yatim Piatu';
    else if (siswa?.keterangan_yatim === 'yatim') keterangan_yatim = 'Yatim';
    else if (siswa?.keterangan_yatim === 'piatu') keterangan_yatim = 'Piatu';
    else if (siswa?.keterangan_yatim === 'masih_hidup')
        keterangan_yatim = 'Masih Hidup';

    // const query = useQuery();
    const dispatch = useDispatch();
    const { nik } = useParams();

    useEffect(() => {
        dispatch(getSiswaByNIK(nik));
    }, [dispatch, nik]);
    // console.log(siswa);

    const kembaliHandler = () => {
        navigate(-1);
    };

    function formatRupiah(angka) {
        var rupiah = '';
        var angkarev = angka?.toString().split('').reverse().join('');
        for (var i = 0; i < angkarev?.length; i++)
            if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
        return (
            'Rp. ' +
            rupiah
                .split('', rupiah.length - 1)
                .reverse()
                .join('')
        );
    }

    const penghasilan_ayah = formatRupiah(siswa?.penghasilan_ayah);
    const penghasilan_ibu = formatRupiah(siswa?.penghasilan_ibu);
    const penghasilan_wali = formatRupiah(siswa?.penghasilan_wali);

    return (
        <div className="bg-white p-5 rounded-lg h-full">
            <div>
                <button
                    onClick={kembaliHandler}
                    className="py-2 px-5 bg-primary text-white rounded-lg ml-4"
                >
                    Kembali
                </button>
            </div>
            <div className="mt-5">
                <h4 className="px-4 font-bold text-xl">Data Siswa</h4>
                <div className="px-4 flex gap-10 ">
                    <Image
                        src={`${
                            !siswa?.photo && siswa?.jenis_kelamin
                                ? priaImage
                                : perempuanImage
                        }`}
                        alt="Image"
                        width="250"
                        preview
                    />
                    {/* <img
                        src={`${siswa?.photo}`}
                        className="rounded-full overflow-hidden w-52 h-52 "
                    /> */}
                    <div className="flex-1">
                        <SiswaItem
                            name="Tanggal Masuk"
                            value={siswa?.tanggal_masuk}
                            no="0"
                        />
                        <SiswaItem
                            name="Kelas"
                            value={siswa?.kela?.nama_kelas}
                        />

                        <div className={`flex gap-2 mt-2  px-4 items-center `}>
                            <div className="w-[200px]  mr-1 flex justify-between">
                                <p className="font-medium">Status</p>
                                <p className="">:</p>
                            </div>
                            <p
                                className={` text-white py-2 px-3  rounded-lg 
                                ${
                                    siswa?.status === 'active'
                                        ? 'bg-green-400'
                                        : 'bg-red-error'
                                }`}
                            >
                                {siswa?.status}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex gap-1 flex-col">
                        <SiswaItem
                            no="0"
                            name="Nama"
                            value={siswa?.nama_lengkap}
                        />
                        <SiswaItem name="NIK" value={siswa?.nik_anak} />
                        <SiswaItem no="0" name="NO KK" value={siswa?.no_kk} />
                        <SiswaItem name="NO Akta" value={siswa?.no_akta} />
                        <SiswaItem
                            no="0"
                            name="Jenis Kelamin"
                            value={siswa?.jenis_kelamin}
                        />
                        <SiswaItem
                            name="Tempat Lahir"
                            value={siswa?.tempat_lahir}
                        />
                        <SiswaItem
                            no="0"
                            name="Tanggal Lahir"
                            value={siswa?.tanggal_lahir}
                        />
                        <SiswaItem name="Agama" value={siswa?.agama} />
                        <SiswaItem
                            no="0"
                            name="Tempat Tinggal"
                            value={siswa?.alamat_rumah}
                        />
                        <SiswaItem name="Kota" value={'Pekanbaru'} />
                        <SiswaItem
                            no="0"
                            name="Kecamatan"
                            value={siswa?.kecamatan}
                        />
                        <SiswaItem name="Kelurahan" value={siswa?.kelurahan} />
                        <SiswaItem
                            no="0"
                            name="Anak Ke"
                            value={siswa?.anak_ke}
                        />
                        <SiswaItem
                            name="Jumlah Saudara"
                            value={siswa?.jumlah_saudara}
                        />
                        <SiswaItem
                            no="0"
                            name="Keterangan Yatim"
                            value={keterangan_yatim}
                        />
                        <SiswaItem
                            name="Golongan Darah"
                            value={siswa?.golongan_darah || '-'}
                        />
                    </div>
                </div>
            </div>
            <hr className="mt-5 bg-primary h-1" />
            <div className="mt-5">
                <h4>Data Orang Tua</h4>
                <div className="mt-7 flex flex-wrap gap-5">
                    <div className="flex gap-1 flex-col flex-1">
                        <h5 className="font-bold text-lg">Ayah</h5>
                        <SiswaItem
                            name="Nama"
                            no="0"
                            value={siswa?.nama_ayah}
                        />
                        <SiswaItem name="NIK" no="1" value={siswa?.nik_ayah} />
                        <SiswaItem
                            name="No Telp"
                            no="0"
                            value={siswa?.nomor_telp_ayah}
                        />
                        <SiswaItem
                            no="1"
                            name="Tempat Tinggal"
                            value={siswa?.alamat_ayah}
                        />
                        <SiswaItem
                            name="Tempat Lahir"
                            no="0"
                            value={siswa?.tempat_lahir_ayah}
                        />
                        <SiswaItem
                            no="1"
                            name="Tanggal Lahir"
                            value={siswa?.tanggal_lahir_ayah}
                        />
                        <SiswaItem
                            no="0"
                            name="Pendidikan Terakhir"
                            value={siswa?.pendidikan_ayah}
                        />
                        <SiswaItem
                            no="1"
                            name="Pekerjaan"
                            value={siswa?.pekerjaan_ayah}
                        />
                        <SiswaItem
                            no="0"
                            name="Penghasilan"
                            value={penghasilan_ayah}
                        />
                    </div>
                    <div className="flex gap-1 flex-col flex-1">
                        <h5 className="font-bold text-lg">Ibu</h5>
                        <SiswaItem name="Nama" no="0" value={siswa?.nama_ibu} />
                        <SiswaItem name="NIK" no="1" value={siswa?.nik_ibu} />
                        <SiswaItem
                            name="No Telp"
                            no="0"
                            value={siswa?.nomor_telp_ibu}
                        />
                        <SiswaItem
                            no="1"
                            name="Tempat Tinggal"
                            value={siswa?.alamat_ibu}
                        />
                        <SiswaItem
                            name="Tempat Lahir"
                            no="0"
                            value={siswa?.tempat_lahir_ibu}
                        />
                        <SiswaItem
                            no="1"
                            name="Tanggal Lahir"
                            value={siswa?.tanggal_lahir_ibu}
                        />
                        <SiswaItem
                            no="0"
                            name="Pendidikan Terakhir"
                            value={siswa?.pendidikan_ibu}
                        />
                        <SiswaItem
                            no="1"
                            name="Pekerjaan"
                            value={siswa?.pekerjaan_ibu}
                        />
                        <SiswaItem
                            no="0"
                            name="Penghasilan"
                            value={penghasilan_ibu}
                        />
                    </div>
                </div>
                <div>
                    <div className="flex gap-1 flex-col mt-5">
                        <h5 className="font-bold text-lg">Wali</h5>
                        <SiswaItem
                            name="Nama"
                            no="0"
                            value={siswa?.nama_wali || '-'}
                        />
                        <SiswaItem
                            name="NIK"
                            no="1"
                            value={siswa?.nik_wali || '-'}
                        />
                        <SiswaItem
                            name="No Telp"
                            no="0"
                            value={siswa?.nomor_telp_wali || '-'}
                        />
                        <SiswaItem
                            no="1"
                            name="Tempat Tinggal"
                            value={siswa?.alamat_wali || '-'}
                        />
                        <SiswaItem
                            name="Tempat Lahir"
                            no="0"
                            value={siswa?.tempat_lahir_wali || '-'}
                        />
                        <SiswaItem
                            no="1"
                            name="Tanggal Lahir"
                            value={siswa?.tanggal_lahir_wali || '-'}
                        />
                        <SiswaItem
                            no="0"
                            name="Pendidikan Terakhir"
                            value={siswa?.pendidikan_wali || '-'}
                        />
                        <SiswaItem
                            no="1"
                            name="Pekerjaan"
                            value={siswa?.pekerjaan_wali || '-'}
                        />
                        <SiswaItem
                            no="0"
                            name="Penghasilan"
                            value={
                                siswa?.penghasilan_wali === '0'
                                    ? '-'
                                    : penghasilan_wali
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
