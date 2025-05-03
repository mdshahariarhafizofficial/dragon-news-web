import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <div className='bg-base-200'>
            <header className='max-w-[1280px] mx-auto'>
                <Navbar></Navbar>
            </header>
            <main className='max-w-[1280px] mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Auth;