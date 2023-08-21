import React from 'react'
import HomeNav from './HomeNav'
import car from "../Assets/image 15.png"
import sarah from '../Assets/Group 80.png'
import eclipse from '../Assets/Ellipse 32.png'
import map from '../Assets/map.png'
import Footer from './Footer'
import images from '../Assets/images.jpg'
export default function About() {
  return (
    <>
    <HomeNav/>    
    <section>
        <div className='flex gap-96'>
            <div className='ml-28 mt-20'>
                <h1 className='font-Ubuntu font-bold text-3xl text-[#606060]'>About us</h1>
                <div className='mt-12 w-96 ml-12 font-Ubuntu text-xl'>
                    <p>Welcome to Hyundai Vehicle Spare Parts dealers – Your one-stop destination for genuine and high-quality spare parts for Hyundai vehicles. We take pride in providing reliable parts to keep your Hyundai running smoothly on the road. Trust us for authentic products and exceptional customer service </p>
                    <p className='pt-12'>Our team consists of experts in the industry who are passionate about helping our customers find the right parts for their vehicles.</p>
                </div>
            </div> 
            <div className='mt-6 '>
                <div className='absolute w-96 h-[500px] ml-5'> 
                <img src={car} alt="car" className='w-full h-full object-cover'/>
                </div>
                
            </div>  
        </div> 

        {/* john */}
        <div className='ml-24 mt-14'>
            <h1 className='font-Ubuntu font-bold text-3xl text-[#606060]'>Meet our team</h1>
            <div className='flex gap-96 mt-14'>
                <div className='rounded-full bg-red-700'>
                <img src={images} alt="john pic" className=''/>
                </div>
                <div className='font-Ubuntu mr-44 mt-12'>
                    <h1 className='font-bold'>CEO</h1>
                    <h1 className='font-bold'>Olivier MUGABO Nizeyimana</h1>
                    <p className='w-96 pt-5'> we strive to deliver exceptional products and services to our valued customers.
                     As the CEO, I am humbled by the talent surrounding me, and together, we are committed to setting new standards and creating a better driving experience for you. Thank you for trusting us on this incredible journey.
                     Drive with us towards a brighter tomorrow</p>
                </div>
            </div>
        </div>
        {/* sarah  */}

        <div className='ml-24 '>
            <div className='flex gap-96 mt-14'>
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
        
        <div className='flex gap-96 mt-14 ml-20'>
                <div>
                <img src={map} alt="john pic"/>
                </div>
                <div className='font-Ubuntu  mt-24'>
                    <h1 className='font-bold text-5xl'>Location</h1>
                   </div> 
            </div>

    </section>  

    <Footer/>                                                                                      
      
    </>
  )
}