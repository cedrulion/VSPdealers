import React from "react";
import { useState } from "react";
import { HiOutlineMail, HiOutlineLockClosed, HiEye } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import car from './car.png'
import torus from './torus.png'
import { Link } from "react-router-dom";
function SignupForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="flex ">
    <div className="w-full flex justify-between mx-8">
   <div className="p-8">
    <div className="md:flex hidden m-2 p-2 items-center"> 
    <img src={car} alt="" />
    </div>
         <div className="md:flex hidden">
         <img src={torus} alt="" className="w-20"/>
         <div>
         <h1 className="text-center mx-2 text-xl">Not yet a VSP Delears member?</h1>
         <h2 className="text-center text-sm ">just a couple of clicked to get started</h2>
         </div>
         </div>
       </div>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md m-4">
        <h1 className="text-2xl text-center font-medium text-gray-800 mb-6">Sign up</h1>
        <form onSubmit={handleSubmit}>
       
        <div className="mb-4 flex items-center border border-gray-400 rounded">
        <IoPersonOutline className="mr-2" />
            <input
              className=" p-2 w-full"
              value={email}
              placeholder='Names'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-400 rounded">
            <HiOutlineMail className="mr-2" />
            <input
              className=" p-2 w-full  "
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6 flex items-center border border-gray-400 rounded ">
            <HiOutlineLockClosed className="mr-2" />
            <input
              className="p-2 w-full "
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <HiEye className="h-5 w-5" />
          </div> 
          <div className="mb-6 flex items-center border border-gray-400 rounded ">
            <HiOutlineLockClosed className="mr-2" />
            <input
              className="p-2 w-full "
              placeholder='Confirm Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <HiEye className="h-5 w-5" />
          </div> 

          <h1 className="text-right mb-2 text-red-500">Forgot password</h1>

           <div className="sm-flex">
            <div>
            <button className="bg-red-500 text-white px-4 py-2 w-full rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline-blue active:bg-red-800" type="submit">
              Sign up
            </button>
            </div>
            <h1 className="text-center">Or</h1>
            <div className="flex justify-between mb-2 p-2">
            <div>
          <button className=" px-4 py-2 w-full rounded-full hover:bg-red-700  border border-red-400" type="button">
            <FaGoogle className="inline-block mr-2" />
            Google
          </button>
          </div>
            <div>
            <button className="px-4 py-2 w-full rounded-full hover:bg-blue-700 border border-red-400" type="button">
           
              <FaFacebook className="inline-block mr-2" />        
               Facebook             
         
            </button>
          </div>
            
          </div>
          
            <h1 className="text-center text-gray-500">Already have an account?</h1>
            <div className="p-2">
           <button className="text-red-400 px-4 py-2 w-full rounded-full hover:bg-red-700 border border-red-400" type="submit">
            <Link to="/login">Sign in</Link> 
            </button>
            </div>
            </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default SignupForm;




