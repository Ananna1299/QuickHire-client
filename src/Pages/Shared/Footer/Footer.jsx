import React from 'react';
import Logo from '../../../Components/Logo/Logo';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-[#202430] text-white'>
            
            {/* Top Section */}
            <div className="px-6 md:px-10 py-10 flex flex-col lg:flex-row justify-between gap-10">
              
                
                {/* Logo Section */}
                <nav className=' flex-1'>
                  <div className='w-1/4'>
                    <Logo></Logo>
                  </div>
                    
                    <p className='mt-5 text-justify'>
                        Great platform for the job seeker that passionate about startups. 
                        Find your dream job easier.
                    </p>
                </nav>

                {/* About + Resources (same row on small & medium) */}
                <div className='w-full lg:w-1/2 flex justify-between'>
                    
                    <nav className='w-1/2'>
                        <h6 className="font-semibold text-lg mb-3">About</h6>
                        <a className="link link-hover block">Companies</a>
                        <a className="link link-hover block">Pricing</a>
                        <a className="link link-hover block">Terms</a>
                        <a className="link link-hover block">Advice</a>
                        <a className="link link-hover block">Privacy policy</a>
                    </nav>

                    <nav className='w-1/2'>
                        <h6 className="font-semibold text-lg mb-3">Resources</h6>
                        <a className="link link-hover block">Help Docs</a>
                        <a className="link link-hover block">Guides</a>
                        <a className="link link-hover block">Update</a>
                        <a className="link link-hover block">Contact Us</a>
                    </nav>

                </div>

                {/* Newsletter Section */}
                <form className='w-full lg:w-1/4'>
                    <h6 className="font-semibold text-lg mb-3">Get job notification</h6>
                    <fieldset className="space-y-4">
                        <label className="block">Enter your email address</label>
                        <div className="join w-full">
                            <input
                                type="email"
                                placeholder="username@site.com"
                                className="input input-bordered join-item w-full" 
                            />
                            <button className="btn btn-primary join-item">
                                Subscribe
                            </button>
                        </div>
                    </fieldset>
                </form>

            </div>

            {/* Horizontal Line */}
            <hr className="border-gray-600 mx-6 md:mx-10" />

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10 py-5 gap-4">
                <p className="text-sm text-center md:text-left">
                    2021 © QuickHire. All rights reserved.
                </p>

                <div className="flex gap-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        <FaTwitter />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        <FaInstagram />
                    </a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;