import React, { useEffect } from 'react'
import {AiOutlineUser} from "react-icons/ai"
import {FaSistrix,FaUserAlt,FaRegChartBar} from "react-icons/fa"
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

function AdminNav() {
  const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true);
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const handleLogout = async () => {
      try {
        await fetch('http://shemaherbez-001-site1.atempurl.com/api/tokens/logout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        localStorage.clear();
  
        navigate('/Main');
      } catch (error) {
        console.error('Logout error:', error);
      }
  
  
   
    }
  const menuItems=[
    {
    path:"Dashboard",
    name:"Dashboard",
   
    },
    {
    path:"",
    name:"Orders",
  
    },
    {
    path:"Client",
    name:"Clients",
    
    },
    {
    path:"Addproduct",
    name:"Products",
   
    },
    {
      path:"",
      name:"Category",
     
      },
    {
    path:"",
    name:"Settings",
  
    }
    ]
  
  return (
   <>
      
        
        <div className="min-h-screen hidden sm:flex ">
		<div className=" sidebar bg-black-white shadow-lg  bg-gradient-to-l from-[#eb767a4d] to-red-200 ">
			<div className=" top_section flex justify-between items-center py-6 px-4">
		
     
        		</div>
			{
				menuItems.map((item, index)=>(
					<Link to={item.path}
					key={index}
					className='flex text-black hover:text-white hover:bg-black  py-4 px-4 gap-4 items-center '>
				
						<div className=' text-2xl font-semibold tracking-wide w-64 '>{item.name}</div>
					</Link>
				))
			}
        	</div>
		<main className='w-full'>
    <div className='sticky top-0 font-medium bg-gray-200 flex justify-end'>
            <ul className='flex '>
              
              
               <li className='flex '><h1 className='text-2xl'>Admin</h1> <button onClick={toggleDropdown}>{isOpen?<AiOutlineUser className='text-[#606060]' />:<AiOutlineUser className='text-[#606060]' />}</button></li>
            </ul>         
        </div> 
        <div className={!isOpen?'absolute right-0 mt-12 w-32 bg-white rounded-md shadow-lg z-10 ':'hidden'}>
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
      <Outlet/>
     
      </main>
      
 
        </div>

    </>
  )
}

export default AdminNav
