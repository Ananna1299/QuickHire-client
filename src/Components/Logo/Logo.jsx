import React from 'react';
import logo from "../../assets/Logo 2.png"
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/" className=''>
         <div className='flex items-center  '>
            <img className='h-10 w-full' src={logo} alt="" />
            
            <p className=' font-bold text-2xl .logo-font  text-color-base-200 '>QuickHire</p>
            
        </div></Link>
    );
};

export default Logo;