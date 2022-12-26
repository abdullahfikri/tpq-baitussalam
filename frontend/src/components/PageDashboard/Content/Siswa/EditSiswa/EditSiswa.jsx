import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSiswaByNIK } from '../../../../../actions/siswa';
import FormEditSiswa from './FormEditSiswa';

export default function EditSiswa() {
    const { siswaDetail } = useSelector((state) => state.siswa);

    const [siswaEdited, setSiswaEdited] = useState(siswaDetail);

    const dispatch = useDispatch();
    const { nik } = useParams();
    useEffect(() => {
        dispatch(getSiswaByNIK(nik));
    }, [dispatch, nik]);

    return (
        <div>
            <FormEditSiswa siswaDetail={siswaDetail} />
        </div>
    );
}
