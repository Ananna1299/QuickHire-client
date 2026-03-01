import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';

const Register = () => {
    const [showpassword,setShowPassword]=useState(true)
    const navigate = useNavigate();


      const handleShowpassword=(e)=>{
        e.preventDefault()
        setShowPassword(!showpassword)
    }


       const {register,
        handleSubmit,
        formState: { errors },
         reset

    }= useForm()


     const handleRegister=(data)=>{
        console.log(data)
     }
    return (
         <div className="w-full max-w-sm shrink-0 bg-[#F8F8FD] p-5 rounded-2xl my-5">
            <h1 className='font-extrabold text-2xl text-secondary dark:text-primary'>Create an Account</h1>
            <p className='text-sm mt-2 text-primary font-semibold'>Register with <Link to="/">
                           QuickHire</Link></p>
            <form className="card-body " 
            onSubmit={handleSubmit(handleRegister)}>
                <fieldset className="fieldset">

                 {/* Name    */}
                <label className="label">Name</label>
                <input type="text" className="input" placeholder="Name" 
                {...register("name" , { required: true })} />

                {errors.name?.type === "required" && (
                 <p className='text-red-600 font-semibold'>Name is required</p>
      )}

      
                

                {/* password */}
                <label className="label">Password</label>
                <div className='relative'>
                     <input type={showpassword?"password":"text"} className="input" placeholder="Password" 
                {...register("password" , 
                { required: true,
                minLength:6,
                pattern:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/ })}/>
                <button type="button" onClick={handleShowpassword} className="btn bg-white btn-xs absolute top-1.5 right-5 border-primary">
                    {showpassword?<FaEye />:<FaEyeSlash />}

                </button>

                </div>
               

                {errors.password?.type === "minLength" && (
                 <p className='text-red-600 font-semibold'>Password should be at least 6 characters</p>
                )}

                {errors.password?.type === "required" && (
                <p className='text-red-600 font-semibold'>Password is required</p>
                )}

                {errors.password?.type === "pattern" && (
                <p className='text-red-600 font-semibold'>Password should have at least one uppercase , at least one lowercase, at least one digit and at least one special character</p>
                )}


            
                <button className="btn bg-primary text-white mt-4 border-none">Register</button>
                <p>Already have an account? <Link className='text-primary' to="/login"> Login</Link></p>
                </fieldset>
            </form>
            

    </div>
    );
};

export default Register;