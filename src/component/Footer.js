import React from 'react'
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
    const date = new Date();
    return (
        <footer className='bg-[#606060] text-white text-sm  z-10 mb-0 min-w-screen'>
     
            <h1 className='text-center font-Ubuntu font-semibold pt-4'>SUBSCRIBE TO OUR NEWSLETTER AND GET EXCLUSIVE DEALS</h1>
           
           <div className='flex p-4'>
           <div className='mx-auto flex items-center'>
               <div className=" border flex  border-gray-300 rounded-lg mx-2">
                  <div className='pt-2'>
                   <HiOutlineMail className="mr-2 w-8 text-2xl opacity-[0.5]" />
                   </div>
                   <input
                      type="email"
                       className="w-full bg- py-2 px-8 bg-[#606060]"
                       placeholder='Email'
                    
                   />
               </div>
               <button className="bg-[#C52F33] font-Ubuntu text-white Capitalize rounded-[16px] py-2 px-8  " type="submit">
                   Subscribe  
                   </button>
               </div>
               
           </div>
   
           
         <h1 className='text-center font-Ubuntu'>&copy;{date.getFullYear()} Online car parts: Buy cheap auto parts and spare online</h1>

        </footer>
    )
}

export default Footer
