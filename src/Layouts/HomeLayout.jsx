import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftNav from '../Components/LayoutComponent/LeftNav';
import RightNav from '../Components/LayoutComponent/RightNav';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-poppins h-[700px]'>
            <header>
                <Header></Header>
                <section className='w-10/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className='py-4 w-10/12 mx-auto'>
                <Navbar></Navbar>
            </nav>
            <main className='grid grid-cols-12 gap-4 w-10/12 mx-auto pt-4'>
                <aside className='col-span-3'><LeftNav></LeftNav></aside>
                <section className='col-span-6'><Outlet></Outlet></section>
                <aside className='col-span-3'><RightNav></RightNav></aside>
            </main>
        </div>
    );
};

export default HomeLayout;