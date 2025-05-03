import { Link, NavLink } from 'react-router';
import userLogo from '../assets/user.png'
import navLogo from '../assets/nav-logo.png'
import { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import toast from 'react-hot-toast';


const Navbar = () => {
    const {user, logOut} = use(AuthContext);

    // Logout
    const handleLogOut = () => {
        logOut()
        .then( () => {
            toast.success('LogOut Successful!')
        }).catch( (error) => {
            toast.error(error.message)
        } )
    }

    return (
        <div className='flex flex-col-reverse md:flex-row justify-between items-center px-5 lg:px-0'>
            <div>
                <img className='w-[50px] hidden md:block' src={navLogo} alt="" />
            </div>
            <div className='flex gap-6 text-lg text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex w-full md:w-auto justify-between md:justify-end gap-5 items-center py-5'>
                <p className='hidden md:block'>{user?.email}</p>
                <img src={userLogo} alt="" />

                {
                    user? 
                    <button onClick={handleLogOut} className='btn btn-primary px-10'>Log Out</button>
                    :<Link to="/auth/login">
                        <button className='btn btn-primary px-10'>Login</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;