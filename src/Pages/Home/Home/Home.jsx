import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <section className='bg-[#F8F8FD]'>
                <Navbar></Navbar>
                <Banner></Banner>
                

            </section>
            
        </div>
    );
};

export default Home;