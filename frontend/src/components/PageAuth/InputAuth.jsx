import { useState } from 'react';
import { ErrorMessage, useField } from 'formik';

const initialClassExtend = {
    classInput: '',
    classPlaceholder: '',
};

export default function InputAuth({ type, name, placeholder, icon, label }) {
    const [field, meta] = useField({ name, type });
    const props = { name, type };

    return (
        <div className="flex flex-col mb-3">
            <label className={`relative `}>
                <input
                    className={`
                            h-[60px] w-[400px] text-2xl bg-transparent border-[3px] rounded-xl border-primary outline-none 
                            ${
                                meta.touched && field.value.length === 0
                                    ? ''
                                    : 'focus:border-blue-500 '
                            }focus:text-dark-blue transition duration-200 px-5  ${
                        meta.touched && !meta.error
                            ? '!border-blue-500 text-dark-blue'
                            : ''
                    }  ${
                        meta.touched &&
                        meta.error &&
                        'border-red-error text-red-error'
                    }`}
                    {...field}
                    {...props}
                    autoComplete="off"
                />
                <span
                    className={`font-light text-xl text-primary absolute left-0 top-[14px] ml-4 px-1 transition duration-200 input-text ${
                        meta.touched && field.value.length !== 0
                            ? 'input-text-after-filled'
                            : ''
                    } ${meta.touched && meta.error && ' !text-red-error'} `}
                >
                    {placeholder}
                </span>
                <div
                    className={` input-icon ${
                        meta.touched && meta.error
                            ? '!text-red-error'
                            : 'text-primary'
                    } ${meta.touched && !meta.error ? 'text-blue-500' : ''} `}
                >
                    {icon}
                </div>
            </label>
            {meta.touched && meta.error && (
                <div className="my-1 ml-2 text-red-error font-semibold">
                    <ErrorMessage name={field.name} />
                </div>
            )}
        </div>
    );
}
