import React, { useEffect, useState } from 'react'
import  axios from 'axios';
import {BsBagPlus,BsBookmark} from "react-icons/bs"
import { FaSearch } from 'react-icons/fa';
import {FaEuroSign} from "react-icons/fa"

const baseURL = 'http://localhost:3000/Products'
function ReadProduct() {
    const [productdata, setProductdata] = useState(null);
    useEffect(()=>{
        axios.get(baseURL)
        .then((Response)=>{
                setProductdata(Response.data)
        })
},[])
const filteredProducts = productdata
? productdata.filter((product)=>
product.Title.toLowerCase().toLowerCase())

:[];

  return (
    <div>
        <section className='' >
        <div className=''>
              
                        {/* 1 Card */}
                        {filteredProducts.map((product)=>(
                        <div className='pl-14 ' key={product.Id}>
                                <div className='flex justify-between w-full h-full'> 
                                                     <div className='h-2'>
                                    
                                                        <img src={product.Image} alt="belt"/>
                                                        </div>     
                                       
                                        <div className='bg-white flex justify-between w-full'>
                                                <div className=' py-3'>   
                                                <h1 className='text-red-700'>{product.Title}</h1>     
                                                <h1 className='font-bold text-xl ml-3 flex'>{product.Price}</h1>
                                                
                                                </div>
                                                <div className='flex text-sm ml-3 font-Ubuntu'>
                                                        <p className='text-black opacity-[0.5]'>Type</p>
                                                        <p className='font-semibold ml-2'>{product.Type}</p>
                                                </div>
                                                <div className='ml-3 text-sm'>
                                                        <h1 className='font-Ubuntu text-black opacity-[0.5] py-3'>Description</h1>
                                                        <p className='font-semibold w-full'>{product.Description}</p>
                                                </div>
                                                
                                        </div>
                                </div>
                        </div>
                        ))}

                        {/* Cards End Here */}
                </div>
        

     </section>
      
    </div>
  )
}

export default ReadProduct
