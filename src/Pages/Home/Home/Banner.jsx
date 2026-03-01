import React from 'react';
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import bannerImg from '../../../assets/bannerpic1.png'
import lineImg from '../../../assets/liner.png'

const Banner = () => {
    return (
        <div className="w-11/12 mx-auto flex items-center justify-between py-16 min-h-[520px] relative mt-5">
    
            <div className="w-10/12 z-1">
                {/* Heading */}
                <h1 className="text-7xl font-['Clash_Display'] font-semibold text-color-base-200 leading-tight mb-4  ">
                    Discover <br /> more than
                    <br />
                    <span className="text-primary relative inline-block mb-4">
                        5000+ Jobs
                        
                        <img  className="absolute  left-0 w-full" src={lineImg} alt="" />
                        
                        
                    </span>
                </h1>

               
                <p className="text-color-accent mt-6 mb-8 text-base leading-relaxed max-w-sm all">
                    Great platform for the job seeker that searching for new career heights and passionate about startups.
                </p>

                
                <div className=" all space-y-2 lg:flex gap-2 items-center bg-white shadow-md p-3 overflow-hidden border border-gray-100">
                   
                    <div className="flex items-center gap-2 px-4 py-3 flex-1 border-r border-gray-100
                    border-2">
                        <CiSearch />
                        <input
                            type="text"
                            placeholder="Job title or keyword"
                            className="outline-none text-sm text-gray-500 w-full bg-transparent"
                        />
                    </div>

                    
                    <div className="flex items-center gap-2 px-4 py-3 flex-1 border-gray-100 all
                    border-2">
                        <CiLocationOn />
                        <select className="outline-none text-sm text-gray-500 w-full bg-transparent appearance-none cursor-pointer">
                            <option>Florence, Italy</option>
                            <option>Rome, Italy</option>
                            <option>Milan, Italy</option>
                            <option>New York, USA</option>
                        </select>
                    </div>

                   
                    <button className="btn my-btn text-white border-none rounded-none px-6 h-full py-3 text-sm font-semibold allwhitespace-nowrap">
                        Search my job
                    </button>
                </div>

              
                <div className="mt-4 flex items-center gap-2 flex-wrap">
                    <span className="text-sm text-[#202430] font-medium">Popular :</span>
                    <p className="text-sm text-[#202430] font-medium">UI Designer, UX Researcher, Android, Admin</p>
                </div>
            </div>

           
            <div className="hidden lg:block absolute right-0 bottom-0 h-full max-w-[480px] ">
               
               
                <img
                    src={bannerImg}
                    alt="Job seeker"
                    className="h-full object-contain relative z-0 drop-shadow-xl"
                />
            </div>
        </div>
        
  );
    
};

export default Banner;