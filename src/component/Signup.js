
import React, { useState } from 'react';
import axios from 'axios';
import { HiOutlineMail, HiOutlineLockClosed, HiEye } from 'react-icons/hi';
import { IoPersonOutline } from 'react-icons/io5';
import { FaGoogle, FaCaretLeft } from 'react-icons/fa';
import car from './car.png';
import torus from './torus.png';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    telNumber: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://vspdealers-api.onrender.com/api/v1/users/register', formData);
      console.log('Signup successful');
      alert('Signup successful!');
    } catch (error) {
      console.error('Signup failed', error);
      alert('Signup failed');
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen text-white bg-slideshow">
      {/* Left-side section */}
      <div className="md:w-2/5 relative">
        <div className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-10">
          <Link to="/">
            <FaCaretLeft className="text-red-600 text-4xl mb-6 md:hidden" />
          </Link>
          
          <img src={torus} alt="" className="w-36 mx-auto md:hidden" />
          <div className="md:ml-32 md:mt-8">
            <h1 className="text-center mx-2 text-5xl font-Ubuntu font-semibold">
              Not yet a Hyundai VSP Dealers member?
            </h1>
            <h2 className="text-center text-3xl font-Ubuntu font-light py-2">
              Just a couple of clicks to get started
            </h2>
          </div>
        </div>
        
      </div>

      {/* Right-side section */}
      <div className="w-full md:w-3/5 p-8 flex flex-col justify-center text-white items-center z-20">
        <h1 className="text-2xl text-center font-mediummb-6">Sign up</h1>
        <form onSubmit={handleSignup}>
          <div className="mb-4 flex items-center border-2 rounded-full bg-black mx-2 sm:mx-10">
            <div className="pl-3 text-xl">
              <IoPersonOutline />
            </div>
            <input
              className="p-3 w-full rounded-sm font-Ubuntu focus:outline-none text-black"
              placeholder="First Name"
              name="firstName"
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-3 flex items-center border-2 rounded-full bg-black mx-2 sm:mx-10 ">
                      <div className="pl-3 text-xl">
                     <IoPersonOutline/>
                   </div>
                    <input
                          className=" p-3 w-full rounded-sm font-Ubuntu focus:outline-none text-black"
                          placeholder='Lname'
                          name='lastName'
                          onChange={handleInputChange}
                        />
                  </div>
                  <div className="mb-3 flex items-center border-2 rounded-full bg-black mx-2 sm:mx-10">
                    <div className="pl-3 text-xl">
                    <IoPersonOutline />
                          </div>
                        <select
                          className="p-3 w-full rounded-sm font-Ubuntu focus:outline-none text-black"
                          name="gender"
                           onChange={handleInputChange}
                                >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                        </select>
                  </div>
                  <div className="mb-4 flex items-center  border-2  bg-black rounded-full mx-10">
                      <div className="pl-3 text-xl">
                      <HiOutlineMail />
                      </div>
                      <input
                        className=" p-3 w-full rounded-sm font-Ubuntu focus:outline-none text-black"
                        placeholder='Email'
                        name='email'
                        onChange={handleInputChange}
                      />
                  </div>
                <div className="mb-3 flex items-center border-2 rounded-full bg-black mx-2 sm:mx-10">
                      <div className="pl-3 text-xl">
                      <HiOutlineMail />
                      </div>
                      <input
                        className="p-3 w-full rounded-sm font-Ubuntu focus:outline-none text-black"
                        placeholder='Telephone'
                        name='telNumber'
                        onChange={handleInputChange}
                      />
                  </div>

               

          <div className="mb-3 flex items-center border-2 rounded-full bg-black mx-2 sm:mx-10">
            <div className="pl-3 text-xl">
              <HiOutlineLockClosed />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              className="p-2 w-full text-black rounded-full h-9 font-Ubuntu"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
            />
            <button
              className="p-2 focus:outline-none"
              onClick={handlePasswordVisibility}
            >
              <HiEye className="h-5 w-5" />
            </button>
          </div>

          <div className="mb-2 p-2 mx-auto">
            <div>
              <button
                type="submit"
                className="bg-red-500 text-white px-12 py-2 w-full rounded-full hover:bg-white hover:shadow-xl hover:text-red-700 focus:outline-none focus:shadow-outline-blue active:bg-red-800"
              >
                Sign up
              </button>
            </div>
            
            
          </div>

          <h1 className="text-center text-white font-Ubuntu">Already have an account?</h1>
          <div className="p-2 mx-10 mb-5">
            <Link to="/login">
              <button className="text-white font-Ubuntu bg-red-500 px-4 py-2 w-full rounded-full hover:bg-red-700 hover:text-white border-[1.5px] border-red-400">
                Sign in
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;





