import React, { useEffect, useState } from 'react';
import Loader from '../../../Components/Loader/Loader';
import JobCard from '../../../Components/JobCard/JobCard';
import Logo from '../../../Components/Logo/Logo';
import Navbar from '../../Shared/Navbar/Navbar';

const FindJobs = () => {

    const [jobs, setJobs] = useState([]);
  
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

   const categories = ["All","Marketing", "Design", "Business", "Technology"];




   const handleSearch=(e)=>{
        const searchText=e.target.value;
        //console.log(searchText)
        setSearch(searchText)
    }


    useEffect(()=>{
  fetch(`http://localhost:3000/jobs?search=${search}&type=${category}`)
  .then(res=>res.json())
        .then(data=>{
          //console.log(data.course)
          setJobs(data)
          

        })
},[search,category])



    return (
        <div>
            <Navbar></Navbar>
            <div className="w-11/12 mx-auto my-16">
            

            <h2 className="text-4xl font-bold text-center mb-10 text-primary font-['Clash_Display'] ">
                All Jobs
            </h2>
     

      <div>
        

        <div className="mb-10 flex flex-col lg:flex-row lg:justify-between gap-5">
         

         {/* search */}
          <form>
          <label className="input max-w-[300px] w-[300px] input-primary">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input  onChange={handleSearch} type="search" placeholder="Search by title" />
          </label>
        </form>

        {/* filter */}
        <fieldset className="fieldset w-64 ">

                <select
            className="select select-bordered mb-4" defaultValue=""
            onChange={(e) => setCategory(e.target.value)}
            >
            <option value="" disabled>Select Category</option>
            {
              categories.map((u,i)=> <option key={i} value={u}>{u}</option>)
            }
            </select>

            </fieldset>

        </div>

        

        
      </div>

      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-10 pb-10 mb-10">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      )}




      
    </div>
        </div>
        
        
    );
};

export default FindJobs;