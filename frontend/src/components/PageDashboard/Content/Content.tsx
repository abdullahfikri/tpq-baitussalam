import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Siswa from './Siswa/Siswa';
import SiswaDetail from './Siswa/DetailSiswa/SiswaDetail';
import Logs from './Logs/Logs';
import SPP from './SPP/SPP';
import EditSiswa from './Siswa/EditSiswa/EditSiswa';
import User from './Users/User';

export default function Content({ user }) {
    return (
        <div className="flex-grow ml-64 min-h-screen max-w-full  flex flex-col">
            <Navbar user={user} />
            <div className="flex-1 p-10 bg-gradient-to-br from-[#5D5FEF60] to-[#5d5fef11]">
                <Routes>
                    {/* <Route path="/home" element={<Dashboard />} /> */}
                    <Route path="/siswa" element={<Siswa />} />
                    <Route
                        path="/siswa/detail/:nik"
                        element={<SiswaDetail />}
                    />
                    <Route path="/spp" element={<SPP />} />
                    <Route path="/" element={<SPP />} />
                    <Route path="/logs" element={<Logs />} />
                    <Route path="/tu" element={<User />} />
                    <Route path="/siswa/edit/:nik" element={<EditSiswa />} />
                </Routes>
            </div>
        </div>
    );
}
