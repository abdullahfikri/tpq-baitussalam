import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSiswaByNIK } from '../../../../../actions/siswa';
import FormEditOrangTua from './FormEditOrangTua';
import FormEditSiswa from './FormEditSiswa';

export default function EditSiswa() {
    const { siswaDetail } = useSelector((state) => state.siswa);
    const [isTambahSiswa, setIsTambahSiswa] = useState(true);

    const [siswaEdited, setSiswaEdited] = useState('');

    const dispatch = useDispatch();
    const { nik } = useParams();
    useEffect(() => {
        dispatch(getSiswaByNIK(nik));
    }, [dispatch, nik]);

    useEffect(() => {
        setSiswaEdited(siswaDetail);
    }, [siswaDetail]);

    return (
        <div>
            {siswaEdited?.nik_anak && isTambahSiswa && (
                <FormEditSiswa
                    setIsTambahSiswa={setIsTambahSiswa}
                    siswaEdited={siswaEdited}
                    setSiswaEdited={setSiswaEdited}
                />
            )}
            {siswaEdited?.nik_anak && !isTambahSiswa && (
                <FormEditOrangTua
                    setIsTambahSiswa={setIsTambahSiswa}
                    siswaEdited={siswaEdited}
                    setSiswaEdited={setSiswaEdited}
                />
            )}
        </div>
    );
}
