import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const {signIn}=useAuth()
       const navigate=useNavigate()

    const [showpassword,setShowPassword]=useState(true)
    
        const handleShowpassword=(e)=>{
            e.preventDefault()
            setShowPassword(!showpassword)
        }


    
    const {register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue

    }=useForm()

      const fillAdminCredential = () => {
  setValue("email", "mithi@gmail.com");
  setValue("password", "Abc123#");
};



const handleLogin=(data)=>{
        //console.log(data)
        signIn(data.email,data.password)
        .then(result=>{
           // console.log(result)
            navigate(`${location.state? location.state : "/"}`)
            reset();
        })
        .catch(error=>{
           // console.log(error)
        })
    }
    return (
        <div className="w-full max-w-sm shrink-0 bg-[#F8F8FD]   p-5 rounded-2xl my-5 ">
            <h1 className='font-extrabold text-2xl text-secondary'>Welcome Back</h1>
            <div className="">
                <p className='text-sm mt-2 text-primary font-semibold'>Login with <Link to="/">
                QuickHire</Link></p>
               
            </div>
            
            <div className="flex flex-wrap justify-evenly mb-2">
                <button className="p-2 rounded-sm bg-primary text-white font-semibold mt-4 text-sm hover:cursor-pointer "
                 onClick={fillAdminCredential}>admin login credential</button>


               
            </div>
            




            <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
                <fieldset className="fieldset">

                 {/* email    */}
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" 
                {...register("email" , { required: true })} />

                {errors.email?.type === "required" && (
                 <p className='text-red-600 font-semibold'>Email is required</p>
      )}

                

                {/* password */}
                <label className="label">Password</label>
                <div className='relative'>
                    <input type={showpassword?"password":"text"}  className="input" placeholder="Password" 
                {...register("password" , 
                { required: true,
                minLength:6,
                pattern:/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/ })}/>
                <button type="button" onClick={handleShowpassword} className="btn bg-white border-primary btn-xs absolute top-1.5 right-5">
                                    {showpassword?<FaEye />:<FaEyeSlash />}
                
                                </button>

                </div>
                
                {/* errors */}
                {errors.password?.type === "minLength" && (
                 <p className='text-red-600 font-semibold'>Password should be at least 6 characters</p>
                )}

                {errors.password?.type === "required" && (
                <p className='text-red-600 font-semibold'>Password is required</p>
                )}

                {errors.password?.type === "pattern" && (
                <p className='text-red-600 font-semibold'>Password should have at least one uppercase , at least one lowercase, at least one digit and at least one special character</p>
                )}


              
                

                    <button className="btn bg-primary text-white mt-4  ">Login</button>
               
                    

            
                
                 <p>Don't have an account? <Link className='text-primary font-semibold' to="/register"> Register</Link></p>
                </fieldset>
            </form>
      
    </div>
    );
};

export default Login;
