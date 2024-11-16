import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {createNewUser, setUser, setLoading, updateUserPProfile} = useContext(AuthContext)
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name')
        if(name.length <5){
           return setError({...error, name:'name must be more than 6 character'})
        }
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')

        createNewUser(email,password)
        .then(result => {
            const user = result.user
            setUser(user)
            setError({})
            updateUserPProfile({
                displayName:name,
                photoURL:photo
            })
            .then(()=>{
                navigate('/')
            })
            .catch(err=>{
            })
        })
        .catch(error => {
            setUser(null)
        })
        
    }
    return (
        <div className="card bg-base-100 w-full max-w-lg mx-auto  shrink-0 rounded-none px-3 pt-3 mt-3 pb-0">
            {/* form */}
            <form onSubmit={handleFormSubmit} className="card-body">
                <h1 className='text-center text-xl font-semibold'>Register your account</h1>
                <div className="divider"></div>
                {/* name field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        name='name'
                        type="text"
                        placeholder="name"
                        className="input rounded-none bg-slate-100"
                        required
                    />
                    <label className="label">
                        <span className="label-text text-red-500">{
                            error?.name && error.name
                            }</span>
                    </label>
                </div>
                {/* photo url field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        name='photo'
                        type="text"
                        placeholder="photoUrl"
                        className="input rounded-none bg-slate-100"
                        required
                    />
                </div>
                {/* email field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email Address</span>
                    </label>
                    <input
                        name='email'
                        type="email"
                        placeholder="email"
                        className="input rounded-none bg-slate-100"
                        required />
                </div>
                {/* password field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        name='password'
                        type="password"
                        placeholder="password"
                        className="input rounded-none bg-slate-100"
                        required
                    />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-neutral rounded-none">Register</button>
                </div>
                <p className='text-center py-3'>Already have an account ? please <Link to='/auth/login' className='text-red-500'>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;