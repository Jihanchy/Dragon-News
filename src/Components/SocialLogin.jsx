import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold'>Login With</h2>
            <div className='*:w-full pt-2 space-y-2'>
                <button className='btn bg-white text-blue-500'><FaGoogle></FaGoogle>Login with Google</button>
                <button className='btn bg-white'><FaGithub></FaGithub>Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;