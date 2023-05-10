import React from 'react'
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
    const date = new Date();
    return (
        <footer className='bg-[#606060] text-white text-sm  z-10 mb-0 w-full'>
     
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
   <div className="container mx-auto w-1/2 items-center flex  p-2">
         
           <ul className="text-sm text-white leading-loose sm:flex hidden">
             <li className="mb-2 mx-2 font-Ubuntu"><a href="#">Contacts</a></li>
             <li className="mb-2 mx-2 font-Ubuntu"><a href="#">TOS</a></li>
             <li className="mb-2 mx-2 font-Ubuntu"><a href="#">Privacy Policy</a></li>
             <li className="mb-2 mx-2 font-Ubuntu"><a href="#">Company information</a></li>
             <li className="mb-2 mx-2 font-Ubuntu"><a href="#">Payment</a></li>
             <li className="mb-2 mx-2 font-Ubuntu"><a href="#">Shipping</a></li>
            
           </ul>
          
         </div>
           
         <h1 className='text-center font-Ubuntu'>&copy;{date.getFullYear()} Online car parts: Buy cheap auto parts and spare online</h1>

        </footer>
    )
}

export default Footer
