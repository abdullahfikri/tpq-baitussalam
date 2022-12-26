import React from 'react';
import { ErrorMessage, Field, useField } from 'formik';

export default function SelectKelas({ dataKelas }) {
    const [field, meta] = useField({
        name: 'kelas_id',
        as: 'select',
    });
    console.log(field, meta);
    return (
        <div className="flex flex-col">
            <label htmlFor="kelas">
                Pilih Kelas{' '}
                {meta.touched && meta.error && (
                    <span className="ml-2 text-red-error text-sm">
                        * <ErrorMessage name={field.name} />
                    </span>
                )}
            </label>
            <select
                id="kelas"
                name="kelas_id"
                {...field}
                {...meta}
                className="bg-primary text-white rounded-md shadow-md py-2 px-5 focus:outline-none focus:ring-2 focus:ring-primary-light focus:ring-opacity-50"
            >
                {dataKelas?.map((kelas) => (
                    <option key={kelas.uuid_kelas} value={kelas.uuid_kelas}>
                        {kelas.nama_kelas}
                    </option>
                ))}
            </select>
        </div>
    );
}
