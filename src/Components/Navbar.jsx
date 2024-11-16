import { Link } from 'react-router-dom';
import profile from '../assets/user.png'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    
    return (
        <div className='flex justify-between items-center'>
            <div className='flex-1'>
                {
                    user && user.email
                }
            </div>
            <div className='flex space-x-3 flex-1'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className='flex gap-3 items-center'>
                <div className='flex flex-col'>
                <img className='h-12 w-12 object-cover rounded-full ' src={user?.photoURL ? user.photoURL : profile} alt="" />
                {
                    user?.displayName? <p>{user.displayName}</p>:''
                }
                </div>
                {
                    user 
                    ? 
                    <button onClick={logOut} className='btn btn-neutral btn-sm text-white rounded-none px-7'>LogOut</button> 
                    : 
                    <Link to='/auth/login'><button className='btn btn-neutral btn-sm text-white rounded-none px-7'>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;