
import React, { useEffect } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FaSistrix, FaUserAlt, FaRegChartBar } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { BsBagFill } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai'
import Hyundai from "../Assets/Hyundai.png"

function AdminNav() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    try {
      localStorage.removeItem('Token'); // Clear the token from local storage
      navigate('/Main');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  

  const menuItems = [
    {
      path: 'Dashboard',
      name: 'Dashboard',
      icon: <FaRegChartBar />,
    },
    {
      path: 'OrderPage',
      name: 'Orders',
      icon: <FaSistrix />,
    },
    {
      path: 'Client',
      name: 'Clients',
      icon: <FaUserAlt />,
    },
    {
      path: 'Addproduct',
      name: 'Products',
      icon: <BsBagFill />,
    },
    {
      path: 'Setting',
      name: 'Settings',
      icon: <AiOutlineSetting />,
    },
  ];

  return (
    <>
      <div className="  sm:flex">
        <div className="min-h-screen fixed sidebar bg-black-white shadow-lg  bg-gradient-to-l from-[#eb767a4d] to-red-200 w-64">
          <img src={Hyundai} alt="logo" className="flex mx-auto py-2" />
          {menuItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="flex text-black hover:text-white hover:bg-black  py-4 px-4  items-center"
            >
              <div className="flex mx-auto  items-center py-4 px-4 gap-2 text-2xl font-semibold tracking-wide w-64">
              
                {item.icon}
                {item.name}
              </div>
            </Link>
          ))}
          <div className="mt-20 text-3xl font-bold">
            <ul className="flex justify-center">
              <li className="flex">
                <h1 className="text-2xl">LOG-OUT</h1>{' '}
                <button onClick={toggleDropdown}>
                  {isOpen ? (
                    <AiOutlineUser className="text-[#606060]" />
                  ) : (
                    <AiOutlineUser className="text-[#606060]" />
                  )}
                </button>
              </li>
            </ul>
          </div>
          <div className={!isOpen ? 'absolute right-0 mt-12 w-32 bg-white rounded-md shadow-lg z-10 ' : 'hidden'}>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={handleLogout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              Logout
            </a>
          </div>
        </div>
        <main className="w-full">
          
          <div className='ml-64'><Outlet /></div>
          
          
        </main>
      </div>
    </>
  );
}

export default AdminNav;