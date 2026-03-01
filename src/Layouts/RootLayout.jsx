import React from 'react';

import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';

const RootLayout = () => {
    return (
       <div className=' min-h-screen'>
            
        
            <div>
            
            <Outlet></Outlet>
            


            
        </div>
        <div>
            <Footer></Footer>
        </div>

        </div>
    );
};

export default RootLayout;