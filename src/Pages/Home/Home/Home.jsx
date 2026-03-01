import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from './Banner';
import Companies from './Companies';
import Categories from './Categories/Categories';
import CallToAction from './CallToAction';
import { useLoaderData } from 'react-router';
import JobCard from '../../../Components/JobCard/JobCard';

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <section className='bg-[#F8F8FD] mb-8'>
                <Navbar></Navbar>
                <Banner></Banner>
                

            </section>
            <Companies></Companies>
            <div className='w-11/12 mx-auto my-8'>
            <h2 className="font-['Clash_Display'] mb-8 font-semibold text-5xl "><span className='text-[##25324B]'>
                Featured <span className='text-primary'>Jobs</span></span></h2>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-10  '>
        
         {data.map(job => <JobCard key={job._id} job={job}/>)}

       </div>

                
            </div>
            <Categories></Categories>
            
            <CallToAction></CallToAction>


            
        </div>
    );
};

export default Home;