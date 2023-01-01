import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

export default function Navbar({ user }) {
    const [inputFocus, setInputFocus] = useState(false);

    const onInputFocus = () => {
        setInputFocus(true);
    };
    const onInputBlur = () => {
        setInputFocus(false);
    };

    return (
        <nav className="flex h-[75px] items-center justify-between pr-10">
            <div className="ml-16 h-10 lg:w-[3W00px]  xl:w-[350px] relative">
                <input
                    type="text"
                    placeholder="Cari siswa..."
                    onFocus={onInputFocus}
                    onBlur={onInputBlur}
                    className={`${
                        inputFocus ? 'border-[#2EABF1]' : 'border-primary'
                    } outline-none border-primary border-[2px] w-full rounded-lg px-5 py-2  transition-all duration-300 text-primary`}
                />
                <BiSearchAlt2
                    className={`${
                        inputFocus ? 'text-[#2EABF1]' : 'text-primary'
                    } absolute top-2 right-5 text-2xl  hover:cursor-pointer hover:scale-105 transition `}
                />
            </div>

            <div className="ml-10 flex items-center gap-3">
                <p className="py-1 px-3 rounded-xl bg-primary text-white">
                    {user?.type === '1' ? 'Kepsek' : 'TU'}
                </p>
                <p className="text-sm">{user.fullName}</p>
                <img
                    src={user.photo}
                    className="h-[50px] w-[50px] rounded-full border-primary border-[2px] hover:cursor-pointer hover:scale-105 transition"
                />
                <FiSettings className="text-3xl text-primary hover:cursor-pointer hover:scale-105 transition" />
            </div>
        </nav>
    );
}
