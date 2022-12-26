import { ErrorMessage, useField } from 'formik';
import React from 'react';

export default function TextAreaSiswa({
    type,
    name,
    placeholder,
    icon,
    label,
    req,
    ...prop
}) {
    const [field, meta] = useField({ name, type });
    const props = { name, type, ...prop };

    return (
        <div className="flex flex-col">
            <label htmlFor={name}>
                {placeholder}{' '}
                <span className="text-sm text-primary">
                    {!req ? '' : '(optional)'}
                </span>{' '}
                {meta.touched && meta.error && (
                    <span className="ml-2 text-red-error text-sm">
                        * <ErrorMessage name={field.name} />
                    </span>
                )}
            </label>
            <textarea
                id={name}
                {...field}
                {...props}
                className="border-[2.5px] border-primary  rounded-xl py-2 px-4 mt-1
                                    focus:outline-none focus:border-blue-500 transition duration-200 h-36"
            ></textarea>
        </div>
    );
}
