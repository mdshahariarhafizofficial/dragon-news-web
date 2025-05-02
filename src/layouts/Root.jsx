import React from 'react';
import Header from '../Components/Header';
import MarqueText from '../Components/MarqueText';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/SidebarLayouts/LeftAside';
import { Outlet } from 'react-router';
import RightAside from '../Components/SidebarLayouts/RightAside';


const Root = () => {
    return (
        <>
            <header className='max-w-[1280px] mx-auto'>
                <Header></Header>
                <MarqueText></MarqueText>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            
            <main className='max-w-[1280px] mx-auto my-10 grid grid-cols-12 px-5 lg:px-0'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </>
    );
};

export default Root;