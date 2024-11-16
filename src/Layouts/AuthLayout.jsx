import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-[#f3f3f3] font-poppins'>
            <header className='w-10/12 mx-auto py-5'>
                <Navbar></Navbar>
            </header>
            <div className='min-h-screen flex justify-center items-center py-7'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;