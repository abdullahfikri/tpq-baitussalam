import React from 'react';
import { useField, ErrorMessage, Field } from 'formik';
export default function RadioKelas({ dataKelas }) {
    const [field, meta] = useField({
        name: 'uuid_kelas',
        type: 'radio',
    });
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor="uuid_kelas" className="text-lg mb-2">
                Pilih Kelas{' '}
                {meta.error && (
                    <span className="ml-2 text-red-error text-sm">
                        * <ErrorMessage name={field.name} />
                    </span>
                )}
            </label>
            <div className="flex flex-wrap gap-4 text-lg">
                {dataKelas.map((kelas) => (
                    <label key={kelas.uuid_kelas}>
                        <Field
                            type="radio"
                            name="uuid_kelas"
                            value={kelas.uuid_kelas}
                        />{' '}
                        {kelas.nama_kelas}
                    </label>
                ))}
            </div>
        </div>
    );
}
