import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from './Banner';
import Companies from './Companies';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div>
            <section className='bg-[#F8F8FD] mb-8'>
                <Navbar></Navbar>
                <Banner></Banner>
                

            </section>
            <Companies></Companies>
            <Categories></Categories>


            
        </div>
    );
};

export default Home;