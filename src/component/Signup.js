import React, { useState } from 'react';
import axios from 'axios';
import { HiOutlineMail, HiOutlineLockClosed, HiEye } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { FaGoogle, FaFacebookF,FaCaretLeft } from "react-icons/fa";
import car from './car.png'
import torus from './torus.png'
import { Link } from "react-router-dom";

const SignupForm =() => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })


  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const Register =  async (event) => {
    event.preventDefault();
    try {
 await axios.post(`http://shemaherbez-001-site1.atempurl.com/api/tokens/register`, formData);
 console.log('Signup successful');
 alert('Signup successful!');  } 
 catch (error) {
  console.error('Signup failed', error);
  alert('Signup failed');
}
};

  return (
    <div className="flex  min-h-screen">
          <div className="pt-12 pl-3">
            <Link to="/"><FaCaretLeft className="text-red-600 text-4xl"/></Link> 
          </div>
    <div className="w-full flex justify-between mr-28">
          <div className="p-8">
            <div className="md:flex hidden m-2 p-2 items-center"> 
            <img src={car} alt="" className="w-80"/>
            </div>
                <div className="md:flex hidden ">
                <img src={torus} alt="" className="w-36 absolute"/>
                <div className="ml-32 mt-8">
                <h1 className="text-center mx-2 text-xl font-Ubuntu font-semibold">Not yet a Hyundai VSP Delears member?</h1>
                <h2 className="text-center text-sm font-Ubuntu font-light py-2 ">just a couple of clicked to get started</h2>
                </div>
                </div>
              </div>
              <div className="rounded shadow-md w-full max-w-md mr-10 mt-8 pt-4 border-red-500 border mb-9">
                <h1 className="text-2xl text-center font-Ubuntu font-medium text-black mb-6">Sign up</h1>
                <form onSubmit={Register}>
                <div className="mb-4 flex items-center border-2  rounded-full mx-10 ">
                      <div className="pl-3 text-xl">
                        <IoPersonOutline/>
                      </div>
                      <input
                          className=" p-2 w-full rounded-full h-9 font-Ubuntu  "
                          placeholder='Names'
                          name='name'
                          onChange={handleInputChange}
                        />
                  </div>
                  <div className="mb-4 flex items-center  border-2  rounded-full mx-10">
                      <div className="pl-3 text-xl">
                      <HiOutlineMail />
                      </div>
                      <input
                        className=" p-2 w-full rounded-full h-9 font-Ubuntu "
                        placeholder='Email'
                        name='email'
                        onChange={handleInputChange}
                      />
                  </div>

                  <div className="mb-6 flex items-center  border-2  rounded-full mx-10 ">
                      <div className="pl-3 text-xl">
                      <HiOutlineLockClosed />
                      </div>
                      <input
                      type='password'
                        className="p-2 w-full rounded-full h-9 font-Ubuntu"
                        placeholder='Password'
                        name='password'
                        onChange={handleInputChange}
                      />
                      <HiEye className="h-5 w-5" />
                  </div> 
                  <div className="mb-6 flex items-center  border-2  rounded-full mx-10 ">
                      <div className="pl-3 text-xl">
                      <HiOutlineLockClosed/>
                      </div>
                      <input
                      type='password'
                        className="p-2 w-full rounded-full h-9 font-Ubuntu"
                        placeholder='Confirm Password'
                        name='password_confirmation'
                        onChange={handleInputChange}
                      />
                      <HiEye className="h-5 w-5" />
                  </div> 

                 

                  <div className="sm-flex">
                      <div className="mx-10">
                            <button type='submit' className="bg-red-500 text-white px-4 py-2 w-full rounded-full hover:bg-white hover:shadow-xl  hover:text-red-700 focus:outline-none focus:shadow-outline-blue active:bg-red-800">
                              Sign up
                            </button>
                            </div>
                            <div className="mb-2 mt-2">
                              <hr className="w-24 absolute mt-[14px] ml-28 border"/>
                            <h1 className="text-center">Or</h1>
                            <hr className="w-24 absolute ml-60 mt-[-10px] border"/>
                            </div>
                      <div className="flex justify-between mb-2 p-2">
                      <div className="ml-5">
                      <button className=" px-12 py-2 w-full rounded-full   border-[1.5px] border-red-400 font-Ubuntu" type="button">
                        <FaGoogle className="inline-block mr-2 text-xl" />
                        Google
                      </button>
                      </div>
                    <div className="mr-7">
                    <button className="px-12 py-2 w-full rounded-full  border-[1.5px] border-red-400 font-Ubuntu " type="button">
                      <FaFacebookF className="inline-block mr-2 text-blue-900 text-xl" />        
                      Facebook             
                    </button>
                  </div>
                    
                  </div>
                    <h1 className="text-center text-gray-500 font-Ubuntu">Already have an account?</h1>
                    <div className="p-2 mx-10 mb-5">
                    <Link to="/login">
                      <button className="text-red-400 font-Ubuntu  px-4 py-2 w-full rounded-full hover:bg-red-500 hover:text-white border-[1.5px] border-red-400" >
                     Sign in
                    </button>
                    </Link> 
                    </div>
                    </div>
                </form>
              </div>
    </div>
    </div>
  );
}

export default SignupForm;




