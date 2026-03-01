import React from 'react';
import Logo from '../../../Components/Logo/Logo';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=' sm:footer-horizontal bg-[#202430] text-white'>
            <div className="footer sm:footer-horizontal text-white p-10 all flex justify-between gap-10">
        
            <nav className='flex-1'>
                <Logo></Logo>
                <p className='mt-5 text-justify'>Great platform for the job seeker that passionate about startups. Find your dream job easier.</p>
            </nav>
  <nav className='flex-1'>
    <h6 className="font-semibold text-white text-lg ">About</h6>
    <a className="link link-hover">Companies</a>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Terms</a>
    <a className="link link-hover">Advice</a>
    <a className="link link-hover">Privacy policy</a>
  </nav>
  <nav className='flex-1'>
    <h6 className="font-semibold text-white text-lg">Resources</h6>
    <a className="link link-hover">Help Docs</a>
    <a className="link link-hover">Guides</a>
    <a className="link link-hover">Update</a>
    <a className="link link-hover">Contact Us</a>
  </nav>
 
  <form >
    <h6 className="font-semibold text-white text-lg ">Get job notification</h6>
    <fieldset className="w-80 space-y-4">
      <label >Enter your email address</label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</div>
<hr />
 <div className="flex justify-between items-center px-10 py-5 flex-wrap gap-3">
                <p className="text-sm">2021 @ QuickHire. All rights reserved..</p>
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