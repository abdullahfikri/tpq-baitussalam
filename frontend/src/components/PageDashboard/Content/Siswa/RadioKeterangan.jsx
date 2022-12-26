import { ErrorMessage, Field, useField } from 'formik';
import React from 'react';

export default function RadioKeterangan() {
    const [field, meta] = useField({
        name: 'keterangan_yatim',
        type: 'radio',
    });
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor="jenis_kelamin">
                Keterangan{' '}
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
                        name="keterangan_yatim"
                        value="masih_hidup"
                    />{' '}
                    Masih Hidup
                </label>
                <label>
                    <Field type="radio" name="keterangan_yatim" value="yatim" />{' '}
                    Yatim
                </label>
                <label>
                    <Field type="radio" name="keterangan_yatim" value="piatu" />{' '}
                    Piatu
                </label>
                <label>
                    <Field
                        type="radio"
                        name="keterangan_yatim"
                        value="yatim_piatu"
                    />{' '}
                    Yatim Piatu
                </label>
            </div>
        </div>
    );
}
