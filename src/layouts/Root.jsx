import React from 'react';
import Header from '../Components/Header';
import MarqueText from '../Components/MarqueText';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/SidebarLayouts/LeftAside';
import { Outlet, useNavigation } from 'react-router';
import RightAside from '../Components/SidebarLayouts/RightAside';
import Loader from '../Components/Loader';
import LatestNewsProvider from '../Contexts/Latest News Context/LatestNewsProvider';


const Root = () => {
    const navigation = useNavigation();
    
    return (
        <>
            <header className='max-w-[1280px] mx-auto'>
                <Header></Header>
                <LatestNewsProvider>
                    <MarqueText></MarqueText>
                </LatestNewsProvider>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            
            <main className='max-w-[1280px] mx-auto my-10 grid gap-6 grid-cols-12 px-5 lg:px-0'>
                <aside className='sticky top-4 h-fit col-span-12 md:col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-12 md:col-span-6'>
                    {
                        navigation.state == 'loading'? <Loader></Loader>: <Outlet></Outlet>
                    }
                    
                </section>
                <aside className='sticky top-4 h-fit col-span-12 md:col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </>
    );
};

export default Root;