import React from 'react';
import { ErrorMessage, useField } from 'formik';

export default function InputSiswa({
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

    // console.log(field, meta);

    return (
        <div className="flex flex-col mb-3">
            <label htmlFor={name} className=" font-medium text-gray-600 ">
                {placeholder}{' '}
                <span className="text-sm">{!req ? '' : '(optional)'}</span>{' '}
                {meta.touched && meta.error && (
                    <span className="ml-2 text-red-error text-sm">
                        * <ErrorMessage name={field.name} />
                    </span>
                )}
            </label>
            <input
                id={name}
                {...field}
                {...props}
                className="border-[2.5px] border-primary  rounded-xl py-2 px-4 mt-1
                                    focus:outline-none focus:border-blue-500 transition duration-200"
            />
        </div>
    );
}
