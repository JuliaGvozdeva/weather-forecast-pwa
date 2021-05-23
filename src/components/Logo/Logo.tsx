import React from 'react';
import logo from '../../assets/images/logo.png';

const Logo: React.FC = () => {
    return (
        <div className="logo">
            <img src={logo} alt='logo-img'></img>
        </div>
    );
};

export default Logo;
