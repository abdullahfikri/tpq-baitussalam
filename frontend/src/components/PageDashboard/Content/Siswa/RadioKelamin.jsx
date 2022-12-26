import { useField, ErrorMessage, Field } from 'formik';
import React from 'react';

export default function RadioKelamin() {
    const [field, meta] = useField({
        name: 'jenis_kelamin',
        type: 'radio',
    });
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor="jenis_kelamin">
                Jenis Kelamin{' '}
                {meta.touched && meta.error && (
                    <span className="ml-2 text-red-error text-sm">
                        * <ErrorMessage name={field.name} />
                    </span>
                )}
            </label>
            <div className="flex gap-4 text-lg">
                <label>
                    <Field
                        type="radio"
                        name="jenis_kelamin"
                        value="laki-laki"
                    />{' '}
                    Laki-laki
                </label>
                <label>
                    <Field
                        type="radio"
                        name="jenis_kelamin"
                        value="perempuan"
                    />{' '}
                    Perempuan
                </label>
            </div>
        </div>
    );
}
