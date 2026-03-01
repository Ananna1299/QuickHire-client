import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';
import Logo from '../Components/Logo/Logo';
import Navbar from '../Pages/Shared/Navbar/Navbar';


const AuthLayout = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className='min-h-screen   items-center justify-center relative'>
           
        
        <div className="relative z-10 w-full flex justify-center items-center my-8">
        <Outlet />
      </div>
      <Footer></Footer>


      
  


            
            

            
        </div>
        </div>
         
    );
};

export default AuthLayout;