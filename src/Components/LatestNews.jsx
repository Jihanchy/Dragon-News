import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-3 p-3 bg-base-200'>
            <p className='px-4 py-1 bg-[#D72050] text-white'>Latest</p>
            <Marquee pauseOnHover={true} speed={100} className='space-x-10'>
                <Link to='/news'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, iure.</Link>
                <Link to='/news'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, iure.</Link>
                <Link to='/news'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, iure.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;