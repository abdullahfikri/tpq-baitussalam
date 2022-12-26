import React, { useState } from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getSumSPPInAMonth } from '../../../../actions/spp';

const getCurrentMonth = () => {
    const month = new Date().getMonth();
    return month + 1;
};
const tempYear = new Date().getFullYear();
export default function Pemasukan() {
    const dispatch = useDispatch();
    const { sum } = useSelector((state) => state.spp);
    const [dateSelected, setDateSelected] = useState({
        month: getCurrentMonth(),
        year: tempYear,
    });

    const format = sum?.toString().split('').reverse().join('');
    const convert = format?.match(/\d{1,3}/g);
    const rupiah = 'Rp ' + convert?.join('.').split('').reverse().join('');

    const years = Array.from(new Array(70), (val, index) => tempYear - index);

    useEffect(() => {
        const date = new Date(dateSelected.year, dateSelected.month - 1);
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 2)
            .toISOString()
            .slice(0, 10);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 1)
            .toISOString()
            .slice(0, 10);

        dispatch(getSumSPPInAMonth(firstDay, lastDay));
    }, [dateSelected]);

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

    const onMonthChange = async (e) => {
        e.preventDefault();
        setDateSelected((prev) => ({ ...prev, month: e.target.value }));
    };

    const onYearChange = async (e) => {
        e.preventDefault();
        setDateSelected((prev) => ({ ...prev, year: e.target.value }));
    };

    const onSubmitHandler = async (e) => {};

    return (
        <div>
            <div className="flex gap-3 items-center">
                <h2>Pemasukan pada :</h2>
                <div>
                    <form className="flex gap-3">
                        <div className="flex gap-2 items-center">
                            <label htmlFor="bulan" className="font-bold">
                                Bulan
                            </label>
                            <select
                                className="p-2 rounded-md bg-primary text-white"
                                name="month"
                                id="bulan"
                                // defaultChecked={getCurrentMonth()}
                                defaultValue={getCurrentMonth()}
                                onChange={onMonthChange}
                            >
                                {monthName.map((month, index) => (
                                    <option key={index} value={index + 1}>
                                        {month}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex gap-2 items-center">
                            <label htmlFor="tahun" className="font-bold">
                                Tahun
                            </label>
                            <select
                                defaultValue={tempYear}
                                onChange={onYearChange}
                                className="p-2 rounded-md bg-primary text-white"
                            >
                                {years.map((year, index) => (
                                    <option key={index} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </form>
                </div>
            </div>
            <div className="mt-3 py-3 px-5 border-2 border-primary w-fit font-medium rounded-md">
                {sum ? rupiah : 'Tidak Ada / Belum Ada Pemasukan'}
            </div>
        </div>
    );
}
