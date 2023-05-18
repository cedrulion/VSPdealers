import React, { useState, useEffect } from 'react';
import { HiOutlineMail, HiOutlineLockClosed, HiEye } from "react-icons/hi";
import { FaGoogle, FaFacebookF,FaCaretLeft } from "react-icons/fa";
import car from './car.png'
import torus from './torus.png'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
function SigninForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setError(null);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://shemaherbez-001-site1.atempurl.com/api/tokens/login',
        { email, password }
      );
      localStorage.setItem('Profile', JSON.stringify(response.data.user.name));
      const { token } = response.data;
      console.log(response);
      // Do something with the token (e.g., store it in local storage)
      console.log('Login successful! Token:', token);
      // Navigate to the appropriate page based on the email and password
      if (email === 'admin01@gmail.com' && password === 'admin1') {
        navigate('/AdminNav/Dashboard');
      } else {
        navigate('/homepage');
      }
    } catch (error) {
      console.error('Login failed:', error.response.data.error);
      setError('Invalid email or password');
    }
  };
  

  return (
    <div className="flex relative">
      <div className="pt-12 pl-3">
       <Link to="/signup"><FaCaretLeft className="text-red-600 text-4xl"/></Link> 
      </div>
      <div className="w-full items-center flex justify-between mr-28">
        <div className="p-8">
            <div className="md:flex hidden m-2 p-2 items-center"> 
            <img src={car} alt="" className="w-80"/>
            </div>
                <div className="md:flex hidden ">
                <img src={torus} alt="" className="w-36 absolute mt-28 ml-[450px]"/>
                <div className="ml-32 mt-8">
                <h1 className="text-center mx-2 text-xl font-Ubuntu font-semibold">Not yet a VSP Delears member?</h1>
                <h2 className="text-center text-sm font-Ubuntu font-light py-2 ">just a couple of clicked to get started</h2>
                </div>
                </div>
          </div> 
<div className="p-8 rounded w-1/2 relative">
  <h1 className="text-2xl text-center font-medium text-gray-800 mb-6">Sign in</h1>
  <form onSubmit={handleSubmit}>
    <div className="mb-4 flex items-center border-2 rounded-full mx-2 sm:mx-10">
      <div className="pl-3 text-xl">
        <HiOutlineMail />
      </div>
      <input
        className="p-2 w-full rounded-full h-9 font-Ubuntu"
        placeholder="Email"
        type='email'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
    </div>
    <div className="mb-3 flex items-center border-2 rounded-full mx-2 sm:mx-10">
      <div className="pl-3 text-xl">
        <HiOutlineLockClosed />
      </div>
      <input
        className="p-2 w-full rounded-full h-9 font-Ubuntu"
        placeholder="Password"
        type='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <HiEye className="h-5 w-5" />
    </div>
    <h1 className="text-right mb-2 text-red-500 mr-2 sm:mr-12">Forgot password</h1>
    <div className="mx-2 sm:mx-10">
      <button
        className="bg-red-500 text-white px-4 py-2 w-full rounded-full hover:bg-white hover:shadow-xl hover:text-red-700 focus:outline-none focus:shadow-outline-blue active:bg-red-800"
        type="submit"
      >
        Login
      </button>
      {error && <div className='text-red-700 text-center my-4'>{error}</div>}
      {/* <button
        className="bg-red-200 text-white p-2 px-4 py-2 w-full rounded-full hover:bg-white hover:shadow-xl hover:text-red-700 focus:outline-none focus:shadow-outline-blue active:bg-red-800"
      
      >
        <Link to="/AdminNav/Dashboard">ADMIN</Link>
      </button> */}
    </div>
    <div className="mb-2 mt-2">
      <hr className="w-16 absolute mt-[14px] ml-4 sm:w-24 sm:mt-[14px] sm:ml-28 border" />
      <h1 className="text-center mr-2 sm:mr-10">Or</h1>
      <hr className="w-16 absolute ml-28 mt-[-10px] sm:w-24 sm:mt-[-10px] sm:ml-60 border" />
    </div>
    <div className="flex flex-col sm:flex-row justify-between mb-2 p-2">
      <div className="mx-2 mb-3 sm:mb-0 sm:mx-5">
        <button
          className="px-6 py-2 w-full rounded-full border-[1.5px] border-red-400 font-Ubuntu"
          type="button"
        >
          <FaGoogle className="inline-block mr-2 text-xl" />
          Google
        </button>
      </div>
      <div className="mx-2 sm:mx-7">
        <button
          className="px-6 py-2 w-full rounded-full border-[1.5px] border-blue-900 font-Ubuntu"
          type="button"
        >
          <FaFacebookF className="inline-block mr-2 text-blue-900 text-xl" />
          Facebook
        </button>
      </div>
    </div>
    <h1 className="text-center text-gray-500 capitalize">have not an account yet?</h1>
            <div className="p-2 mx-16">
            <Link to="/signup">
           <button className="px-6 py-2 w-full rounded-full border-[1.5px] border-red-400 font-Ubuntu" type="submit">
              Register
            </button>
            </Link>
            </div>
        </form>
      </div>
    </div>
    </div>
    
  );
}

export default SigninForm;

