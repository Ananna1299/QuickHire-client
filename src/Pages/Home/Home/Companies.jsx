import React from 'react';
import c1 from "../../../assets/companies/a1.png"
import c2 from "../../../assets/companies/a2.png"
import c3 from "../../../assets/companies/a3.png"
import c4 from "../../../assets/companies/a4.png"
import c5 from "../../../assets/companies/a5.png"

const Companies = () => {
   const companies = [c1, c2, c3, c4, c5];

  return (
    <div className="w-11/12 mx-auto py-10 all">
      <h2 className="text-lg text-[#202430] font-semibold  mb-8">
        Companies we help to grow
      </h2>

      <div className="flex flex-wrap gap-6 items-center justify-between">
        {companies.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={logo}
              alt={`company-${index}`}
              className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;