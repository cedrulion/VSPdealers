import React, { useEffect } from 'react'
import { NavLink , Link} from 'react-router-dom'
import {FaSistrix} from "react-icons/fa"
import {BsCart3,BsHeart,BsFilterLeft} from "react-icons/bs"
import ProductHeader from './ProductHeader'
import {AiOutlineUser} from "react-icons/ai"
import { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import Hyundai from "../Assets/Hyundai.png"

export default function HomeNav() {

  const navigate = useNavigate();
  const [navList,setNavList] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  const User = JSON.parse(localStorage.getItem('Profile')) ;
  

  const items = JSON.parse(localStorage.getItem('cartItems')) || [];
  useEffect (()=>{

  },[items])

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const handleLogout = () => {
    try {
      localStorage.removeItem('Token'); // Clear the token from local storage
      navigate('/Main');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  
  const handleClick =()=>{
    setNavList(!navList)
  }
  return (
    <div className=' sticky top-0'>
    <div className='hidden  bg-gradient-to-l from-[#C52F334D] to-red-500  h-14  md:flex justify-between'>
        <div className=''>
        
        <ul className='capitalize md:flex text-[18px] space-x-28 ml-2 pt-3'>
        <div className="">
  <img src={Hyundai} alt="logo" className="h-9 " />
</div>
            <li className='  px-6 rounded-lg font-Ubuntu '><NavLink to="/Homepage">home</NavLink></li>
            <li className=' px-6 rounded-lg font-Ubuntu '><NavLink to="/product">products</NavLink></li>
            <li className=' px-6 rounded-lg font-Ubuntu '><NavLink to='/about'>about us</NavLink></li>

           
        </ul>
        </div>
        <div className=''>
            <ul className='flex pt-4 space-x-6'>
               <li><FaSistrix className='text-[#606060]'/></li>
                 
               <Link to='/cartitem'><li><BsCart3 className='text-[#606060]' />
               <span>{items.length}</span>
               </li></Link>
               <span className='font-bold'>{User}</span> 
               <li>
               
               <button onClick={toggleDropdown}>{isOpen?<AiOutlineUser className='text-[#606060]' />:<AiOutlineUser className='text-[#606060]' />}</button>
           
               </li>
             
              
               </ul>
           
        </div> 
        
        <div className={!isOpen?'absolute right-0 mt-12 w-32 bg-white rounded-md shadow-lg z-20 ':'hidden'}>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            Profile
          </a>
          <a
            href="/OrderInfo"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-4 0V3a1 1 0 00-1-1 3 3 0 00-3 3v2m8 0V3a1 1 0 011-1 3 3 0 013 3v2"
              />
            </svg>
           Show Orders
          </a>
          <a
            href="/TrackingOrder"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Track your orders
            </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={handleLogout}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0         24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
       Logout
      </a>
      </div> 
        
    </div>
    <div className='bg-white w-full h-14 md:hidden'>
          <div className='flex mt-2'>
            <div>
              <button onClick={handleClick}>
                {
                   navList?<BsFilterLeft className='text-[#606060] text-4xl  ml-8 cursor-pointer'/>:<BsFilterLeft className='text-[#606060] text-4xl  ml-6 cursor-pointer'/>
                }
             </button>       
          </div>
          <div className=' ml-[500px]'>
          <Link to='/cartitem'><BsCart3 className='text-[#606060] text-3xl mr-6 cursor-pointer ' /></Link>
          </div>
          </div>
        
          <div className={!navList ? 'block fixed left-0  h-full w-32 bg-red-700 shadow-xl z-20 text-2xl ':'hidden'}>
    
    <button onClick={toggleDropdown}>{isOpen?<AiOutlineUser className='text-[#201919] text-2xl ml-2 z-20' />:<AiOutlineUser className='text-[#201919] text-2xl ml-2'/>}</button>
    <div className='mb-0'>
    <ul className='py-3'>
    <li className='mb-5 px-2 py-1 rounded-lg text-white font-medium text-center hover:bg-red-800'>
      <NavLink to="/" className='block'>Home</NavLink>
    </li>
    <li className='mb-5 px-2 py-2 rounded-lg text-white font-medium text-center hover:bg-red-800'>
      <NavLink to="/product" className='block'>Products</NavLink>
    </li>
    <li className='mb-5 px-2 py-1 rounded-lg text-white font-medium text-center hover:bg-red-800'>
      <NavLink to='/about' className='block'>About</NavLink>
    </li>
  </ul>
  </div>
  </div>
</div>
  <div>
 </div>
  </div>
   
    
  )
}
