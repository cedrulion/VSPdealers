import React from 'react'
import { Link } from 'react-router-dom'
import {FaSistrix} from "react-icons/fa"
import {BsCart3,BsHeart,BsFilterLeft} from "react-icons/bs"
import ProductHeader from './ProductHeader'
import {AiOutlineUser} from "react-icons/ai"
import { useState } from 'react'
export default function Nav() {

  const [navList,setNavList] = useState(true)
  const handleClick =()=>{
            setNavList(!navList)
  }

  return (
    <>
    <div className='hidden bg-gradient-to-l from-[#C52F334D] to-red-400 w-full h-14  rounded-t-lg md:flex justify-between'>
        <div className=''>
        <ul className='capitalize md:flex text-[18px] space-x-28 ml-24 pt-3'>
            <li className='bg-black text-white px-6 rounded-lg font-Ubuntu'><Link to="/">home</Link></li>
<<<<<<< HEAD
            <li className='text-[#606060] font-Ubuntu'><Link>products</Link></li>
            <li className='text-[#606060] font-Ubuntu'><Link to='/about'>about</Link></li>
=======
            <li className='text-[#606060] font-Ubuntu'><Link to="/ProductHeader">products</Link></li>
            <li className='text-[#606060] font-Ubuntu'><Link>about</Link></li>
>>>>>>> ebdb7036c6ca4bea6a2ab2fd4bd7be095cca9862
        </ul>
        </div>
        <div className='mr-16 '>
            <ul className='flex pt-4 space-x-6'>
               <li><FaSistrix className='text-[#606060]'/></li>
               <li><BsHeart className='text-[#606060]' /></li>   
               <li><BsCart3 className='text-[#606060]' /></li>
               <li><AiOutlineUser className='text-[#606060]' /></li>
            </ul>         
        </div>  
    </div>
    <div className='bg-white w-full h-14 md:hidden'>
          <div className='flex mt-2'>
            <div>
              <button onClick={handleClick}>
                {
                   navList?<BsFilterLeft className='text-[#606060] text-4xl  ml-6 cursor-pointer'/>:<BsFilterLeft className='text-[#606060] text-4xl  ml-6 cursor-pointer'/>
                }
             </button>       
          </div>
          <div className=' ml-[500px]'>
          <BsCart3 className='text-[#606060] text-3xl mr-6 cursor-pointer ' />
          </div>
          </div>
          <form className=''>
            <div className='relative'>
             <FaSistrix className='text-[#606060] absolute ml-12 mt-3 w-16 h-6'/>
            <input type="text" id="search" placeholder='Search by Item,car or part number' className=' ml-12 w-[500px] px-12  border-gray-400 border-2 py-2 rounded-lg'></input>
            </div>
          </form>
          <div className={!navList ? 'block left-0 top-0 shadow-xl w-24':'hidden'}>
                    <ul className='capitalize text-[18px] ml-5 pt-3'>
                        <li className='text-[#606060] font-Ubuntu hover:text-red-700'><Link to="/">home</Link></li>
                        <li className='text-[#606060] font-Ubuntu hover:text-red-700'><Link to="/ProductHeader">products</Link></li>
                        <li className='text-[#606060] font-Ubuntu hover:text-red-700'><Link>about</Link></li>
                    </ul>
                 </div>
          <div>
          </div>
          

    </div>
      
    </>
  )
}
