// import React, { useState } from 'react';
// import axios from 'axios';
// import { HiOutlineMail, HiOutlineLockClosed, HiEye } from "react-icons/hi";
// import { IoPersonOutline } from "react-icons/io5";
// import { FaGoogle, FaFacebookF,FaCaretLeft } from "react-icons/fa";
// import car from './car.png'
// import torus from './torus.png'
// import { Link } from "react-router-dom";

// const SignupForm =() => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     gender: '',
//     email: '',
//     telNumber: '',
//     password: '',
//   })


  
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const Register =  async (event) => {
//     event.preventDefault();
//     try {
//  await axios.post(`https://vspdealers.onrender.com/api/v1/users/register`, formData);
//  console.log('Signup successful');
//  alert('Signup successful!');  } 
//  catch (error) {
//   console.error('Signup failed', error);
//   alert('Signup failed');
// }
// };

//   return (
//     <div className="flex  min-h-screen">
//           <div className="pt-12 pl-3">
//             <Link to="/"><FaCaretLeft className="text-red-600 text-4xl"/></Link> 
//           </div>
//     <div className="w-full flex justify-between mr-28">
//           <div className="p-8">
//             <div className="md:flex hidden m-2 p-2 items-center"> 
//             <img src={car} alt="" className="w-80"/>
//             </div>
//                 <div className="md:flex hidden ">
//                 <img src={torus} alt="" className="w-36 absolute"/>
//                 <div className="ml-32 mt-8">
//                 <h1 className="text-center mx-2 text-xl font-Ubuntu font-semibold">Not yet a Hyundai VSP Delears member?</h1>
//                 <h2 className="text-center text-sm font-Ubuntu font-light py-2 ">just a couple of clicked to get started</h2>
//                 </div>
//                 </div>
//               </div>
//               <div className="rounded shadow-md w-full max-w-md mr-10 mt-8 pt-4 border-red-500 border mb-9">
//                 <h1 className="text-2xl text-center font-Ubuntu font-medium text-black mb-6">Sign up</h1>
//                 <form onSubmit={Register}>
//                 <div className="mb-4 flex items-center border-2  rounded-full mx-10 ">
//                       <div className="pl-3 text-xl">
//                         <IoPersonOutline/>
//                       </div>
//                       <input
//                           className=" p-2 w-full rounded-full h-9 font-Ubuntu  "
//                           placeholder='Fname'
//                           name='firstName'
//                           onChange={handleInputChange}
//                         />
//                   </div>
//                   <div className="mb-4 flex items-center border-2  rounded-full mx-10 ">
//                       <div className="pl-3 text-xl">
//                         <IoPersonOutline/>
//                       </div>
//                       <input
//                           className=" p-2 w-full rounded-full h-9 font-Ubuntu  "
//                           placeholder='Lname'
//                           name='lastName'
//                           onChange={handleInputChange}
//                         />
//                   </div>
//                   <div className="mb-4 flex items-center border-2  rounded-full mx-10 ">
//                       <div className="pl-3 text-xl">
//                         <IoPersonOutline/>
//                       </div>
//                       <input
//                           className=" p-2 w-full rounded-full h-9 font-Ubuntu  "
//                           placeholder='Gender'
//                           name='gender'
//                           onChange={handleInputChange}
//                         />
//                   </div>
//                   <div className="mb-4 flex items-center  border-2  rounded-full mx-10">
//                       <div className="pl-3 text-xl">
//                       <HiOutlineMail />
//                       </div>
//                       <input
//                         className=" p-2 w-full rounded-full h-9 font-Ubuntu "
//                         placeholder='Email'
//                         name='email'
//                         onChange={handleInputChange}
//                       />
//                   </div>
// <div className="mb-4 flex items-center  border-2  rounded-full mx-10">
//                       <div className="pl-3 text-xl">
//                       <HiOutlineMail />
//                       </div>
//                       <input
//                         className=" p-2 w-full rounded-full h-9 font-Ubuntu "
//                         placeholder='Telephone'
//                         name='telNumber'
//                         onChange={handleInputChange}
//                       />
//                   </div>

//                   <div className="mb-6 flex items-center  border-2  rounded-full mx-10 ">
//                       <div className="pl-3 text-xl">
//                       <HiOutlineLockClosed />
//                       </div>
//                       <input
//                       type='password'
//                         className="p-2 w-full rounded-full h-9 font-Ubuntu"
//                         placeholder='Password'
//                         name='password'
//                         onChange={handleInputChange}
//                       />
//                       <HiEye className="h-5 w-5" />
//                   </div> 
                
//                   <div className="sm-flex">
//                       <div className="mx-10">
//                             <button type='submit' className="bg-red-500 text-white px-4 py-2 w-full rounded-full hover:bg-white hover:shadow-xl  hover:text-red-700 focus:outline-none focus:shadow-outline-blue active:bg-red-800">
//                               Sign up
//                             </button>
//                             </div>
//                             <div className="mb-2 mt-2">
//                               <hr className="w-24 absolute mt-[14px] ml-28 border"/>
//                             <h1 className="text-center">Or</h1>
//                             <hr className="w-24 absolute ml-60 mt-[-10px] border"/>
//                             </div>
//                       <div className="flex justify-between mb-2 p-2">
//                       <div className="ml-5">
//                       <button className=" px-12 py-2 w-full rounded-full   border-[1.5px] border-red-400 font-Ubuntu" type="button">
//                         <FaGoogle className="inline-block mr-2 text-xl" />
//                         Google
//                       </button>
//                       </div>
//                     <div className="mr-7">
//                     <button className="px-12 py-2 w-full rounded-full  border-[1.5px] border-red-400 font-Ubuntu " type="button">
//                       <FaFacebookF className="inline-block mr-2 text-blue-900 text-xl" />        
//                       Facebook             
//                     </button>
//                   </div>
                    
//                   </div>
//                     <h1 className="text-center text-gray-500 font-Ubuntu">Already have an account?</h1>
//                     <div className="p-2 mx-10 mb-5">
//                     <Link to="/login">
//                       <button className="text-red-400 font-Ubuntu  px-4 py-2 w-full rounded-full hover:bg-red-500 hover:text-white border-[1.5px] border-red-400" >
//                      Sign in
//                     </button>
//                     </Link> 
//                     </div>
//                     </div>
//                 </form>
//               </div>
//     </div>
//     </div>
//   );
// }

// export default SignupForm;
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
      await axios.post('https://vspdealers.onrender.com/api/v1/users/register', formData);
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
                  <div className="mb-4 flex items-center  border-2  rounded-full mx-10">
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

          <div className="flex justify-between mb-2 p-2 mx-10">
            <div>
              <button
                type="submit"
                className="bg-red-500 text-white px-12 py-2 w-full rounded-full hover:bg-white hover:shadow-xl hover:text-red-700 focus:outline-none focus:shadow-outline-blue active:bg-red-800"
              >
                Sign up
              </button>
            </div>
            
            <div className="flex justify-between mb-2 p-2">
              <div>
                <button
                  className="px-12 py-2 w-full rounded-full border-[1.5px] border-red-400 font-Ubuntu"
                  type="button"
                >
                  <FaGoogle className="inline-block mr-2 text-xl" />
                  Continue with Google
                </button>
              </div>
            </div>
          </div>

          <h1 className="text-center text-gray-500 font-Ubuntu">Already have an account?</h1>
          <div className="p-2 mx-10 mb-5">
            <Link to="/login">
              <button className="text-red-400 font-Ubuntu px-4 py-2 w-full rounded-full hover:bg-red-500 hover:text-white border-[1.5px] border-red-400">
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





