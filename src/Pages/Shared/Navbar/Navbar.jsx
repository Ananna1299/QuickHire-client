import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const links=<>
    <li><NavLink to="/" className="color-accent font-bold hover:text-primary ">Home</NavLink></li>
    <li><NavLink to="/find-jobs" className="color-accent font-bold hover:text-primary ">Find Jobs</NavLink></li>
     
      <li><NavLink to="/browse-companies" className="color-accent font-bold hover:text-primary ">About Us</NavLink></li>

       

      </>
    return (
        <div>
                        
        </div>
    );
};

export default Navbar;