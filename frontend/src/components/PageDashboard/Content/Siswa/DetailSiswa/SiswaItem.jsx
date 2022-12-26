import React from 'react';

export default function SiswaItem({ name, value, no }) {
    return (
        <div
            className={`flex gap-2 mt-2 ${
                no === '0'
                    ? 'bg-primary text-gray-300 px-4 py-2 rounded-md'
                    : 'px-4'
            }`}
        >
            <div className="w-[200px] mr-1 flex justify-between">
                <p className="font-medium">{name}</p>
                <p className="">:</p>
            </div>
            <p className="">{value}</p>
        </div>
    );
}
