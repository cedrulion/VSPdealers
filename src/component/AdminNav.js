import React from 'react'
import {AiOutlineUser} from "react-icons/ai"
import {FaSistrix,FaUserAlt,FaRegChartBar} from "react-icons/fa"
import { NavLink, Outlet } from 'react-router-dom'

function AdminNav() {
  const menuItems=[
    {
    path:"Addproduct",
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
		
      <div className='ml-3 font-medium'>
            <ul className='flex '>
              
              
               <li className='flex '><h1 className='text-2xl'>Admin</h1> <AiOutlineUser className='text-[#201919] text-2xl ml-2' /></li>
            </ul>         
        </div> 
        		</div>
			{
				menuItems.map((item, index)=>(
					<NavLink to={item.path}
					key={index}
					className='flex text-black hover:text-white hover:bg-blue-500 py-4 px-4 gap-4 items-center'>
				
						<div className=' text-xl font-semibold tracking-wide w-64 '>{item.name}</div>
					</NavLink>
				))
			}
        	</div>
		<main className='w-full'>
      
   
      <Outlet/>
     
      </main>
      
 
        </div>

    </>
  )
}

export default AdminNav
