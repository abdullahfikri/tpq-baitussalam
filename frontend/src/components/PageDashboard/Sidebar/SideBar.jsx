import Menu from './Menu';

import Cookies from 'js-cookie';
import { logout } from '../../../reducers/user';
import { useDispatch } from 'react-redux';

import {
    MdOutlineSpaceDashboard,
    MdEditNote,
    MdOutlineAccountBox,
    MdOutlineLibraryBooks,
} from 'react-icons/md';
import { SlSocialTwitter, SlPeople } from 'react-icons/sl';
import { BsTelephone, BsInstagram } from 'react-icons/bs';
import { CiBank } from 'react-icons/ci';
import { TbLogout } from 'react-icons/tb';

export default function SideBar({ type }) {
    const dispatch = useDispatch();
    return (
        <div className="fixed top-0 w-64 h-screen flex flex-col border-r-4 border-r-primary">
            <div className="py-6 px-10 h-20 overflow-hidden">
                <h3 className="text-base font-bold text-[#EF5DA8] xl::text-lg">
                    TPQ BAITUSSALAM
                </h3>
            </div>
            <div className="w-full h-1 bg-primary "></div>
            <div className="px-10 py-6 h-full">
                <ul className="w-full h-full flex flex-col">
                    {/* <li>
                        <Menu
                            to={'home'}
                            text="Dashboard"
                            icon={
                                <MdOutlineSpaceDashboard className="text-2xl" />
                            }
                        />
                    </li> */}
                    <li className="mt-4">
                        <Menu
                            to={'siswa'}
                            text="Siswa"
                            icon={<SlPeople className="text-2xl" />}
                        />
                    </li>
                    <li className="mt-4">
                        <Menu
                            to={'spp'}
                            text="SPP"
                            icon={<MdEditNote className="text-2xl" />}
                        />
                    </li>
                    {/* 
                    {type === '0' && (
                        <li className="mt-4">
                            <Menu
                                to={'pemasukan'}
                                text="Pemasukan"
                                icon={<CiBank className="text-2xl" />}
                            />
                        </li>
                    )} */}
                    {type === '1' && (
                        <li className="mt-4">
                            <Menu
                                to={'logs'}
                                text="Logs"
                                icon={
                                    <MdOutlineLibraryBooks className="text-2xl" />
                                }
                            />
                        </li>
                    )}

                    {type === '1' && (
                        <li className="mt-4">
                            <Menu
                                to={'tu'}
                                text="TU"
                                icon={
                                    <MdOutlineLibraryBooks className="text-2xl" />
                                }
                            />
                        </li>
                    )}

                    <li
                        className=" mt-auto text-red-error"
                        onClick={() => {
                            Cookies.remove('user');
                            dispatch(logout(null));
                        }}
                    >
                        <Menu
                            text="Logout"
                            icon={<TbLogout className="text-2xl" />}
                        />
                    </li>
                </ul>
            </div>
            <div className="w-full h-1 bg-primary"></div>
            <div className="px-10 py-5 h-fit">
                <p>Contact :</p>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-2">
                        <SlSocialTwitter className="text-2xl " />
                        <p>Twitter</p>
                    </div>
                    <div className="flex gap-2">
                        <BsTelephone className="text-2xl" />
                        <p>(021)-888-777</p>
                    </div>
                    <div className="flex gap-2">
                        <BsInstagram className="text-2xl" />
                        <p>Instagram</p>
                    </div>
                    <p className="font-light text-sm mt-3">
                        Copyright ©, semarak semester 5
                    </p>
                </div>
            </div>
        </div>
    );
}
