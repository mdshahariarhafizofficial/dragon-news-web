import React from 'react';
import Header from '../Components/Header';
import MarqueText from '../Components/MarqueText';
import Navbar from '../Components/Navbar';


const Root = () => {
    return (
        <>
            <header className='max-w-[1280px] mx-auto'>
                <Header></Header>
                <MarqueText></MarqueText>
                <Navbar></Navbar>
            </header>
        </>
    );
};

export default Root;