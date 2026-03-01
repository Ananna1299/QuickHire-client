import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Categories = () => {
    return (
        <div className='w-11/12 mx-auto mt-8'>
            <div className='flex items-center justify-between'>
                <h2 className="font-['Clash_Display'] font-semibold text-5xl "><span className='text-[##25324B]'>
                Explore by <span className='text-primary'>Category</span></span></h2>
                <p className='flex items-end text-primary gap-2'>See all jobs <FaLongArrowAltRight /></p>
            
            </div>
        </div>
    );
};

export default Categories;