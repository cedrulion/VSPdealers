import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import {FaEuroSign} from "react-icons/fa"
import {BsBagPlus,BsBookmark} from "react-icons/bs"
import belt from "../Assets/image 7.png"
import Nav from './Nav'
import Footer from './Footer'
const baseURL = 'http://localhost:4000/Products'
function ProductHeader() {
const [products,setProducts] = useState(null)

useEffect(()=>{
        axios.get(baseURL)
        .then((Response)=>{
                setProducts(Response.data)
        })
},[])


 if(!products) return null
  return (
    <div className="">
        <Nav/>
   <div className="flex justify-center p-4">
  <div className="search-container rounded-full border border-gray-700 flex items-center justify-center w-1/2 px-4 py-2 mx-auto">
    <FaSearch className="text-gray-700 mr-2" />
    <input className="w-full text-gray-700 bg-transparent focus:outline-none" type="text" placeholder="Search by items, car or part number" />
  </div>
  </div>

      <div className='flex p-4 justify-center font-Ubuntu'>
      <div className="dropdown-container mx-4 ">
       
        <select className='bg-orange-200 rounded-full py-2 px-3' >
          <option value="Car Model">Car Model</option>
          <option value="sedan">Sedan</option>
          <option value="hatchback">Hatchback</option>
        </select>
      </div>
      <div className="dropdown-container mx-4 ">
        <select className='bg-orange-200 rounded-full py-2 px-3'>
          <option value="">Category</option>
          <option value="toyota">Toyota</option>
          <option value="honda">Honda</option>
          <option value="nissan">Nissan</option>
        </select>
        </div>
        <div className="dropdown-container mx-4">
        <select className='bg-orange-200 rounded-full py-2 px-3'>
          <option value="">Customer rating</option>
          </select>
          </div>
        <div className="dropdown-container mx-4">
        <select className='bg-orange-200 rounded-full py-2 px-3'>
          <option value="">Price range</option>
          <option value="under20">Under $20,000</option>
          <option value="20to30">$20,000 - $30,000</option>
          <option value="over30">Over $30,000</option>
        </select>
      </div>
      <div className="dropdown-container mx-4">
        <select className='bg-orange-200 rounded-full py-2 px-3'>
          <option value="">Availability</option>
          </select>
          </div>
      </div>
  <div className='flex p-4 justify-center'>
  <button className='bg-red-700 font-Ubuntu hover:bg-gray-100 hover:text-[#C52F33] text-white rounded-full py-2 px-16 font-semibold'>Filter</button>
      
     </div>
     <section className='mt-12' >
        <div className='ml-16 mb-10'>
              
                <div className='mt-6 grid grid-cols-3  rounded-lg w-[1100px] ml-3 px-5 py-4  bg-gray-100'>
                        {/* 1 Card */}
                        {products.map((product)=>(
                        <div className='pl-14 pb-5' key={product.Id}>
                                <div className='shadow-lg  w-64 '> 
                                       <div className='bg-white w-64 h-60 px-4'> 
                                                <div className=' flex text-[#C52F33] space-x-2 justify-between items-center pt-3'>
                                                <h1 className='font-bold font-Roboto'>{product.Title}</h1>
                                                <div className=''>
                                                <BsBookmark className=' text-2xl'/>
                                                </div>
                                                </div>
                                                <div className='w-34 mx-8 pt-4'>
                                                        <img src={products.Image} alt="belt"/>
                                                </div>
                                        </div>
                                        <div className='bg-red-100 w-64 h-72'>
                                                <div className='flex justify-between py-3'>        
                                                <h1 className='font-bold text-xl ml-3 flex'><FaEuroSign className='mt-1'/><span>{product.Price}</span></h1>
                                                <div className='mr-4'>
                                                 <BsBagPlus className='text-[#C52F33] text-2xl'/>
                                                </div>
                                                </div>
                                                <div className='flex text-sm ml-3 font-Ubuntu'>
                                                        <p className='text-black opacity-[0.5]'>Type</p>
                                                        <p className='font-semibold ml-2'>{product.Type}</p>
                                                </div>
                                                <div className='ml-3 text-sm'>
                                                        <h1 className='font-Ubuntu text-black opacity-[0.5] py-3'>Description</h1>
                                                        <p className='w-52 font-semibold'>{product.Description}</p>
                                                </div>
                                                <div className='ml-10 mt-5'>
                                                        <button className='bg-[#C52F33] hover:bg-gray-100 hover:text-[#C52F33] font-Ubuntu text-white uppercase rounded-[16px] py-2 px-8 font-semibold'>add to cart</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        ))}

                        {/* Cards End Here */}
                </div>
        </div>

     </section>
     <Footer/>
   </div>
  );
}

export default ProductHeader;
