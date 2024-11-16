import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {signInUser,setUser} = useContext(AuthContext)
    const [error, setError] = useState({})
    const location = useLocation()
    const navigate = useNavigate()
    const handleLoginForm = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        // sign in
        signInUser(email,password)
        .then(result => {
            const user = result.user
            setUser(user)
            
                navigate(location?.state ? location.state : '/')
            
        })
        .catch(err => {
            setError({...error, login:err.code})
        })
    }

    return (
        <div className="card bg-base-100 w-full max-w-lg  shrink-0 rounded-none px-3 pt-3 mt-3 pb-0">        
            <form onSubmit={handleLoginForm} className="card-body">
            <h1 className='text-center text-xl font-semibold'>Login to your account</h1>
            <div className="divider"></div>
            {/* email field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email Address</span>
                    </label>
                    <input name='email' type="email" placeholder="email" className="input rounded-none bg-slate-100" required />
                </div>
            {/* password field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="password" className="input rounded-none bg-slate-100" required />
                    {error?.login &&
                    <label className="label text-red-600">
                        {error.login}
                    </label>
                    }
                    
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-neutral rounded-none">Login</button>
                </div>
                <p className='text-center py-3'>Don't have an account ? <Link to='/auth/register' className='text-red-500'>Register</Link></p>
            </form>
        </div>
    );
};

export default Login;