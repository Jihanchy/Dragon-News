import React from 'react';
import logo from '../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center py-6 space-y-3'>
            <div>
                <img className='w-[320px]' src={logo} alt="" />
            </div>
            <p className='text-gray-400'>Journalism Without Fear or Favour</p>
            <p className='text-gray-500'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;