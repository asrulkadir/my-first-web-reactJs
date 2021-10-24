import React from 'react';
import { LogoApp } from '../../../assets/assets';
import "./Logo.scss";

const Logo = () => {
    return (
        <div>
            <img className="logo-app" src={LogoApp} alt="Logo-App" />
        </div>
    )
}

export default Logo;
