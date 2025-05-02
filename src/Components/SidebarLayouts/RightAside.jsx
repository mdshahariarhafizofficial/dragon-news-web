import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import FindUs from '../FindUs';
import QZone from '../QZone';
import BgImg from '../BgImg';

const RightAside = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
            <BgImg></BgImg>
        </div>
    );
};

export default RightAside;