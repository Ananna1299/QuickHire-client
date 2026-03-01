import React from 'react';
import { Link } from 'react-router';
import dashboardImg from "../../../assets/Dashboard Company.png";

const CallToAction = () => {
    return (
        <section className="w-11/12 mx-auto my-30">
            <div className="bg-primary rounded-2xl relative flex flex-col lg:flex-row items-center justify-between px-10 lg:px-16 py-14 min-h-[400px] overflow-visible">
                
                {/* Left Content */}
                <div className="max-w-md z-10">
                    <h2 className="text-4xl sm:text-center md:text-left lg:text-5xl font-['Clash_Display'] font-semibold text-white leading-tight mb-4">
                        Start posting jobs today
                    </h2>
                    <p className="text-blue-200 font-medium mb-8  sm:text-center md:text-left">
                        Start posting jobs for only $10.
                    </p>
                    <Link
                        to="/register"
                        className="inline-block border-2 border-white text-white font-semibold px-6 py-3 hover:bg-white hover:text-primary transition duration-200  sm:text-center md:text-left "
                    >
                        Sign Up For Free
                    </Link>
                </div>

                
                <div className="absolute right-10 -bottom-16 lg:-bottom-16 lg:right-10 w-[300px] lg:w-[450px]">
                    <img
                        src={dashboardImg}
                        alt="QuickHire Dashboard"
                        className="w-full object-contain drop-shadow-2xl"
                    />
                </div>

            </div>
        </section>
    );
};

export default CallToAction;