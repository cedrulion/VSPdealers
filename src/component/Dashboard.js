import React from 'react';
import { Link } from 'react-router-dom';
import AdminNav from './AdminNav';
import { NavLink, Outlet } from 'react-router-dom'

function Dashboard() {
  const menu=[
    {
    path:"Overview",
    name:"Overview",
   
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
    path:"Payment",
    name:"Payment",
   
    },
   
    ]
  
  return (
    <div className='w-full'>
    
       
       <div className=' bg-gray-200 w-full  '>
        
       

         
       
       
        <div className='capitalize flex gap-8'>
           
        {
				menu.map((item, index)=>(
					<NavLink to={item.path}
					key={index}
					className=' text-black hover:text-white hover:bg-blue-500 py-4 px-4 items-center'>
				
						<div className=' text-xl font-semibold tracking-wide  '>{item.name}</div>
					</NavLink>
				))
			}
        	</div>
		<main className=' w-full'><Outlet/>
    
    </main>
  
        </div>
        
        
      {/* <nav className="bg-gray-200  shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            </div>
          </div>
        </div>
      </nav> */}
     
   
   
    </div>
  );
}

export default Dashboard;
