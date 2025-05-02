import React from 'react';
import classImg from "../assets/class.png"
import swimImg from "../assets/swimming.png"
import playImg from "../assets/playground.png"

const QZone = () => {
    return (
        <div className='p-5 bg-base-300 rounded mb-7'>
            <h2 className='text-2xl font-bold mb-5'>Q-Zone</h2>
            <div className='space-y-8'>
                <img className='w-full' src={swimImg} alt="" />
                <img className='w-full' src={classImg} alt="" />
                <img className='w-full' src={playImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;