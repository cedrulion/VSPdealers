import React from "react";
import { HiOutlineMail, HiOutlineLockClosed, HiEye } from "react-icons/hi";
import { FaGoogle, FaFacebookF,FaCaretLeft } from "react-icons/fa";
import car from './car.png'
import torus from './torus.png'
import { Link } from "react-router-dom";
function SigninForm() {
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
        <form> 
        <div className="mb-4 flex items-center border-2  rounded-full mx-10 ">
                      <div className="pl-3 text-xl">
                        <HiOutlineMail/>
                      </div>
                      <input
                          className=" p-2 w-full rounded-full h-9 font-Ubuntu  "
                          placeholder='Email'
                        />
                  </div>
                  <div className="mb-3 flex items-center  border-2  rounded-full mx-10 ">
                      <div className="pl-3 text-xl">
                      <HiOutlineLockClosed />
                      </div>
                      <input
                        className="p-2 w-full rounded-full h-9 font-Ubuntu"
                        placeholder='Password'
                      />
                      <HiEye className="h-5 w-5" />
                  </div> 
          <h1 className="text-right mb-2 text-red-500 mr-12">Forgot password</h1>
          <div className="mx-10">
                            <button className="bg-red-500 text-white px-4 py-2 w-full rounded-full hover:bg-white hover:shadow-xl  hover:text-red-700 focus:outline-none focus:shadow-outline-blue active:bg-red-800" type="submit">
                             Login
                            </button>
                            </div>
                            <div className="mb-2 mt-2">
                              <hr className="w-24 absolute mt-[14px] ml-28 border"/>
                            <h1 className="text-center mr-10">Or</h1>
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
            <h1 className="text-center text-gray-500 capitalize">have not an account yet?</h1>
            <div className="p-2 mx-16">
            <Link to="/signup">
           <button className="text-red-400 px-4 py-2 w-full rounded-full hover:bg-red-500 hover:text-white border border-red-400" type="submit">
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

