import React, {  useEffect, useState } from "react";

import { Link } from "react-router";
import Swal from "sweetalert2";

import useAuth from "../../Hooks/useAuth";
import Loader from "../../Components/Loader/Loader";
import Navbar from "../Shared/Navbar/Navbar";

const MyAddedJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch My Added Jobs
  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `http://localhost:3000/jobs`)
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      });
  }, [user]);

  // 🔹 Delete Job
  const handleDeleteJob = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This job will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/jobs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Job has been deleted.", "success");

              // Remove from UI instantly
              const remainingJobs = jobs.filter(
                (job) => job._id !== _id
              );
              setJobs(remainingJobs);
            }
          });
      }
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
        <Navbar></Navbar>
        <div className="my-10 w-11/12 mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 text-primary font-['Clash_Display'] ">
                All Jobs
            </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="card bg-base-100 shadow-lg border hover:shadow-2xl transition-all duration-300"
          >
            <div className="card-body">
              <h2 className="card-title text-primary">
                {job.title}
              </h2>

              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Type:</strong> {job.type}</p>
              <p><strong>Category:</strong> {job.tags}</p>

              <p className="text-sm text-gray-500 mt-2">
                {job.description?.slice(0, 80)}...
              </p>

              <div className="card-actions justify-between mt-4">
                

                <button
                  onClick={() => handleDeleteJob(job._id)}
                  className="btn btn-sm btn-error text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default MyAddedJobs;