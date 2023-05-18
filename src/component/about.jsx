import React from 'react'
import HomeNav from './HomeNav'
import car from "../Assets/image 15.png"
import john from '../Assets/Group 77.png'
import sarah from '../Assets/Group 80.png'
import eclipse from '../Assets/Ellipse 32.png'
import mike from '../Assets/Group 79.png'
import Footer from './Footer'

export default function About() {
  return (
    <>
    <HomeNav/>    
    <section>
        <div className='flex min-h-screen'>
            <div className='ml-28 mt-20'>
                <h1 className='font-Ubuntu font-bold text-3xl text-[#606060]'>About us</h1>
                <div className='mt-12 w-72 ml-12 font-Ubuntu text-xl'>
                    <p >At our company, we are dedicated to providing our customers with high-quality spare parts for their vehicles.</p>
                    <p className='pt-12'>Our team consists of experts in the industry who are passionate about helping our customers find the right parts for their vehicles.</p>
                </div>
            </div> 
            <div className='mt-6 ml-[300px] '>
                <div className='absolute w-96 h-[500px] ml-5'> 
                <img src={car} alt="car" className='w-full h-full object-cover'/>
                </div>
                <div className='bg-red-700 w-44 h-32  mt-[400px]'>
                </div>
            </div>  
        </div> 

        {/* john */}
        <div className='ml-24 mt-14'>
            <h1 className='font-Ubuntu font-bold text-3xl text-[#606060]'>Meet our team</h1>
            <div className='flex justify-between mt-14'>
                <div className=''>
                <img src={john} alt="john pic"/>
                </div>
                <div className='font-Ubuntu mr-44 mt-12'>
                    <h1 className='font-bold'>John</h1>
                    <p className='w-96 pt-5'>With over 10 years of experience in the automotive industry, 
                        John is our head mechanic and parts specialist. He has a wealth of knowledge about all types
                         of vehicles and can help you find the right parts for your specific make and model.</p>
                </div>
            </div>
        </div>
        {/* sarah  */}

        <div className='ml-24 '>
            <div className='flex justify-between mt-14'>
            <div className='font-Ubuntu  mt-12'>
                    <h1 className='font-bold'>Sarah</h1>
                    <p className='w-96 pt-5'>Sarah is our customer service representative and is dedicated to ensuring our customers have the best experience possible.
                     She is always available to answer any questions you may have and is committed to resolving any issues quickly and efficiently.</p>
                </div>
                <div className='mr-24'>
                    <div className='absolute  mt-[-100px] '>
                    <img src={sarah} alt="john pic"/>
                    </div>
                    <div className='ml-[65px] h-72'>
                    <img src={eclipse} alt="eclipse" className='w-full h-full'/>
                    </div>
                </div>
                
            </div>
        </div>

        {/* mike */}
        
        <div className='flex justify-between mt-14 ml-20'>
                <div>
                <img src={mike} alt="john pic"/>
                </div>
                <div className='font-Ubuntu mr-48 mt-24'>
                    <h1 className='font-bold'>Mike</h1>
                    <p className='w-96 pt-5'>Mike is our shipping and logistics expert. He ensures that all orders are processed and shipped in a timely manner,
                     and that our customers receive their parts as quickly as possible.</p>
                </div>
            </div>

    </section>  

    <Footer/>                                                                                      
      
    </>
  )
}