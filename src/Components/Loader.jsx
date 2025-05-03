import React from 'react';
import { FadeLoader } from "react-spinners";
const Loader = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <FadeLoader color="#ff4073" />
        </div>
    );
};

export default Loader;