import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='my-10'>
            <h2 className='text-2xl font-bold mb-5'>Find Us On</h2>
            <div className="join join-vertical w-full">
                <button className="btn w-full bg-base-100 py-7 justify-start join-item">
                    <FaFacebook></FaFacebook> Facebook
                </button>
                <button className="btn w-full bg-base-100 py-7 justify-start join-item">
                    <FaTwitter></FaTwitter> Twitter
                </button>
                <button className="btn w-full bg-base-100 py-7 justify-start join-item">
                    <FaInstagram></FaInstagram> Instagram
                </button>
            </div>
        </div>
    );
};

export default FindUs;