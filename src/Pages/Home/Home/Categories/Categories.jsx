import React, { useEffect, useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router';
import JobCard from '../../../../Components/JobCard/JobCard';
import Loader from '../../../../Components/Loader/Loader';

const Categories = () => {
     const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/sort-jobs') 
            .then(res => res.json())
            .then(data => {
                
                const sorted = data.sort(
                    (a, b) => new Date(b.created_at) - new Date(a.created_at)
                );

              
                setJobs(sorted.slice(0, 6));
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

if (loading){
    return <Loader></Loader>
}
    return (
        <div className='w-11/12 mx-auto my-16'>
            <div className='flex items-center justify-between'>
                <h2 className="font-['Clash_Display'] font-semibold text-5xl mb-8"><span className='text-[##25324B]'>
                Latest by <span className='text-secondary'>job opens</span></span></h2>
                <Link to="/find-jobs" className='flex items-end text-primary gap-2'>See all jobs <FaLongArrowAltRight /></Link>
            
            </div>

             <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-10  '>
        
         {jobs.map(job => <JobCard key={job._id} job={job}/>)}

       </div>

        </div>
    );
};

export default Categories;