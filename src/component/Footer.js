import React from 'react'
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
    return (
        <div className='bg-gray-500 text-white text-sm p-4'>
           
            <h1 className='text-center'>SUBSCRIBE TO OUR NEWSLETTER AND GET EXCLUSIVE DEALS</h1>
           
            <div className='flex p-4'>
            <div className='mx-auto flex items-center'>
                <div className=" border flex  border-gray-400 rounded">
                
                    <HiOutlineMail className="mr-2" />
                    <input
                        className="w-full bg-gray-500"

                        placeholder='Email'
                    />
                </div>
                <button className="text-white rounded bg-red-700" type="submit">
                    Subscribe </button>
                </div>
                
            </div>
    <div className="container mx-auto w-1/2 items-center flex p-2">
          
            <ul className="text-sm text-white leading-loose flex">
              <li className="mb-2 mx-2"><a href="#">Contacts</a></li>
              <li className="mb-2 mx-2"><a href="#">TOS</a></li>
              <li className="mb-2 mx-2"><a href="#">Privacy Policy</a></li>
              <li className="mb-2 mx-2"><a href="#">Company information</a></li>
              <li className="mb-2 mx-2"><a href="#">Payment</a></li>
              <li className="mb-2 mx-2"><a href="#">Shipping</a></li>
             
            </ul>
           
          </div>
            
          <h1 className='text-center'>@2023 Online car parts:Buy cheap auto parts and spare online</h1>

        </div>
    )
}

export default Footer
