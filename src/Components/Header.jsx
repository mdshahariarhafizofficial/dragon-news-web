import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 pt-10 pb-7'>
            <Link to="/">
                <img className='w-[400px]' src={logo} alt="" />
            </Link>
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='text-lg font-semibold'>{format(new Date(),`EEEE, MMMM dd, yyyy`)}</p>
        </div>
    );
};

export default Header;