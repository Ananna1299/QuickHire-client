import React from 'react';
import { NavLink, Link } from 'react-router';
import Logo from '../../../Components/Logo/Logo';

const Navbar = () => {

    const links=<>
    <li><NavLink to="/" className="color-accent font-bold hover:text-primary ">Home</NavLink></li>
    <li><NavLink to="/find-jobs" className="color-accent font-bold hover:text-primary ">Find Jobs</NavLink></li>
     
      <li><NavLink to="/browse-companies" className="color-accent font-bold hover:text-primary ">Browse Companies</NavLink></li>

       

      </>
    return (
        <div className="navbar  w-11/12 mx-auto">
  <div className="navbar-start">
    
   
    <Logo></Logo>
  </div>
  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1 text-color-accent">
        {links}
      
    </ul>
  </div>
  <div className="navbar-end">
    <div className='gap-5 hidden md:flex'>
         <Link className="btn bg-white text-primary  border-none ">Login</Link>
        <Link className="btn my-btn text-white border-none">SignUp</Link>
    </div>
     <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-25" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
        <li>
          <Link className="color-accent font-bold hover:text-primary ">Login</Link>
        </li>
        <li>
           <Link className="color-accent font-bold hover:text-primary ">SignUp</Link>
        </li>
      </ul>
    </div>

    
  </div>
</div>
    );
};

export default Navbar;