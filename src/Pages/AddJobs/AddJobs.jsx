import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import Navbar from '../Shared/Navbar/Navbar';

const AddJob = () => {

    const jobTypes = ["Full Time", "Part Time", "Remote", "Internship"];
    const categories = ["Marketing", "Design", "Business", "Technology"];

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const handleAddJob = (data) => {
        console.log(data);

        const formData={
            title:data.title,
            company:data.company,
            location:data.location,
            type:data.type,
            tags:data.category,
            description:data.description,

            
        }
        //console.log(formData)
        fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your job post has been added.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
         reset();
    };

    return (
        <div>
            <Navbar></Navbar>
             <div className='w-11/12 mx-auto my-12'>
            <h2 className="text-4xl font-bold text-center mb-10 text-primary font-['Clash_Display'] ">
                Post a New Job
            </h2>

            <form onSubmit={handleSubmit(handleAddJob)} className="space-y-4 all">

                {/* Job Title */}
                <label className="label font-bold text-primary">Job Title</label>
                <input
                    type="text"
                    className="input w-full"
                    placeholder="Title"
                    {...register("title", { required: true })}
                />
                {errors.title && (
                    <p className='text-red-600 font-semibold'>Title is required</p>
                )}

                {/* Company */}
                <label className="label font-bold mt-4 text-primary">Company</label>
                <input
                    type="text"
                    className="input w-full"
                    placeholder="Company Name"
                    {...register("company", { required: true })}
                />
                {errors.company && (
                    <p className='text-red-600 font-semibold'>Company is required</p>
                )}

                {/* Location */}
                <label className="label font-bold mt-4">Location</label>
                <input
                    type="text"
                    className="input w-full"
                    placeholder="Enter your location"
                    {...register("location", { required: true })}
                />
                {errors.location && (
                    <p className='text-red-600 font-semibold'>Location is required</p>
                )}

                {/* Job Type  */}
                <fieldset className="fieldset mt-4">
                    <legend className="label font-bold text-primary">Job Type</legend>
                    <select
                        {...register("type", { required: true })}
                        defaultValue=""
                        className="select w-full"
                    >
                        <option value="" disabled>Select Job Type</option>
                        {
                            jobTypes.map((type, i) =>
                                <option key={i} value={type}>{type}</option>
                            )
                        }
                    </select>
                    {errors.type && (
                        <p className='text-red-600 font-semibold'>
                            Job type is required
                        </p>
                    )}
                </fieldset>

                {/* Tags */}
                <fieldset className="fieldset mt-4">
                    <legend className="label font-bold text-primary">Job Tag</legend>
                    <select
                        {...register("category", { required: true })}
                        defaultValue=""
                        className="select w-full"
                    >
                        <option value="" disabled>Select Tag</option>
                        {
                            categories.map((category, i) =>
                                <option key={i} value={category}>{category}</option>
                            )
                        }
                    </select>
                    {errors.tags && (
                        <p className='text-red-600 font-semibold'>
                            Category is required
                        </p>
                    )}
                </fieldset>

                

                {/* Description */}
                <fieldset className="fieldset mt-4">
                    <legend className="label font-bold text-primary">Description</legend>
                    <textarea
                        className="textarea w-full h-24"
                        placeholder="Write job description..."
                        {...register("description", { required: true })}
                    ></textarea>
                    {errors.description && (
                        <p className='text-red-600 font-semibold'>
                            Description is required
                        </p>
                    )}
                </fieldset>

               <div className='flex items-center gap-4 mt-6'>
                 <button className="btn bg-primary text-white  border-none">
                    Post Job
                </button>
                <Link className="btn bg-white border-primary text-primary" to="/">Go Home</Link>
               </div>

            </form>
        </div>
        </div>
       
    );
};

export default AddJob;