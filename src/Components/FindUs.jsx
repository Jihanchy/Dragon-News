import React from 'react';
import fb from '../assets/fb.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
const FindUs = () => {
    return (
        <div>
            <h2 className='font-semibold mb-3'>Find us on</h2>
            <div className="join join-vertical flex justify-start *:bg-white">
                <button className="btn join-item justify-start px-5">
                    <span className=''>
                        <img src={fb} alt="" />
                    </span>
                    Facebook
                </button>
                <button className="btn join-item justify-start px-5">
                    <span className=''>
                        <img src={instagram} alt="" />
                    </span>
                    Instagram
                </button>
                <button className="btn join-item justify-start px-5">
                    <span className=''>
                        <img src={twitter} alt="" />
                    </span>
                    Twitter
                </button>
            </div>
        </div>
    );
};

export default FindUs;