import React, { useState } from 'react';

const FindJobs = () => {

    const [loading, setLoading] = useState(false);
const [jobs,setJobs]=useState([])
const [totalJobs,setTotalJobs]=useState(0)
  const [totalPage,setTotalPage]=useState(0)
    const [currentPage,setCurrentPage]=useState(0)
    const [sort,setSort]=useState("")
     const [order,setOrder]=useState("")
     const [search,setSearch]=useState("")
     const [serviceType, setServiceType] = useState("");
    const limit=5;
    return (
        <div>
            
        </div>
    );
};

export default FindJobs;