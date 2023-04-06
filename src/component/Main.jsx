import React from 'react'
import ring from "../Assets/Group 51.png"
import well from "../Assets/Group 65.png"
import wheels from "../Assets/Vector.png"
import arrow from "../Assets/Vector1.png"
import bodyPart from "../Assets/Group.png"
import electronics from "../Assets/Group (1).png"
import {FaHeadset,FaEuroSign} from "react-icons/fa"
import {BsBagPlus,BsBookmark} from "react-icons/bs"
import interior from "../Assets/mdi_car-seat.png"
import lighting from "../Assets/Vector (1).png"
import mechanics from "../Assets/Group (2).png"
import inter from "../Assets/Group 66.png"
import mech from "../Assets/Group7.png"
import belt from "../Assets/image 7.png"
import belt2 from "../Assets/image 9.png"
import belt3 from "../Assets/image 8.png"

export default function Main() {
  return (
    <>
    <main>
    <header>
            <div className="flex justify-between">
                    <div className='ml-24 mt-24 w-[500px]'>
                    <h1 className='text-[#444444] text-5xl w-96 font-Interi '>Best spare parts Dealers</h1>
                    <p className='text-[#444444] text-lg font-Roboto font-bold pt-4 pb-4'>The answer is most of the countries' RARBG main sites are blocked for users so that's why we</p>
                    <button className='bg-red-700 rounded-xl px-14 shadow-lg text-white py-1 '>Join us</button>
                    </div> 
                    <div className='md:mr-24 mt-24'>
                    <img src={ring} alt="ring" />  
                    </div>   
            </div>
            <div className='absolute ml-[400px] md:ml-[500px] w-52 mt-[-70px]  '>
                    <img src={well} alt="well"/>
            </div>
    </header>
    {/* Card start here */}
    <div className=' hidden md:block bg-[#C52F334D] w-14 h-14 rounded-full float-right shadow-lg mr-12 mt-32 cursor-pointer '>
         <FaHeadset className='mx-5 my-5'/>
        </div>
     <section className='mt-52 md:ml-24 ml-44 pb-5'>
        
        <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {/* First Card */}
                <div className=' border-black border-[1.5px]  w-64 rounded-lg h-80'>
                        <div className='w-18 ml-20 mt-8'>
                                <img src={wheels} alt="wheels"/>
                        </div>
                        <div className=''>
                                <h1 className='font-Roboto font-bold ml-20 text-xl py-3'>Wheels</h1>
                                <p className='mx-12 font-Roboto'>Rims,Tire,custom size for all vehicles</p>
                        </div>
                        <div className=' mx-24 my-6 border-[#C52F33] border-[1.5px] w-12 h-12 rounded-full cursor-pointer'>
                                <img src={arrow} alt="arrow" className='py-3 px-3'/>
                        </div>
                </div>
                {/* second card */}
                <div className=' border-black border-[1.5px]  w-64 rounded-lg h-80 md:ml-[-40px]'>
                        <div className='w-18 ml-16 mt-8'>
                                <img src={bodyPart} alt="body parts"/>
                        </div>
                        <div className=''>
                                <h1 className='font-Roboto font-bold ml-20 py-3 text-xl'>Body Parts</h1>
                                <p className='mx-8 font-Roboto'>Headlights, Tail lights, Tailgates & Interior lights</p>
                        </div>
                        <div className=' mx-24 my-6 border-[#C52F33] border-[1.5px] w-12 h-12 rounded-full cursor-pointer'>
                                <img src={arrow} alt="arrow" className='py-3 px-3'/>
                        </div>   
                </div>
                {/* Third card  */}
                <div className=' border-black border-[1.5px] w-64 rounded-lg h-80 lg:ml-[-60px]'>
                        <div className='w-17 ml-16 mt-8'>
                                <img src={electronics} alt="wheels"/>
                        </div>
                        <div className=''>
                                <h1 className='font-Roboto font-bold ml-20 text-xl py-3'>Electronics</h1>
                                <p className='mx-8 font-Roboto'>Headlights, Tail lights, Tailgates & Interior lights</p>
                        </div>
                        <div className=' mx-24 my-6 border-[#C52F33] border-[1.5px] w-12 h-12 rounded-full cursor-pointer'>
                                <img src={arrow} alt="arrow" className='py-3 px-3'/>
                        </div>
                </div>
                {/* card 4 */}
                <div className=' border-black border-[1.5px]  w-64 rounded-lg h-80 md:ml-[-40px] lg:ml-0 relative'>
                        <div className='w-18 ml-16 mt-8'>
                                <img src={interior} alt="Interior"/>
                        </div>
                        <div className=''>
                                <h1 className='font-Roboto font-bold ml-20 py-3 text-xl'>Interior</h1>
                                <p className='mx-8 font-Roboto'>Floor mats, dash kits, seat covers, Steeling wheels</p>
                        </div>
                        <div className=' mx-24 my-6 border-[#C52F33] border-[1.5px] w-12 h-12 rounded-full cursor-pointer'>
                                <img src={arrow} alt="arrow" className='py-3 px-3'/>
                        </div>
                        <div className='absolute mt-[-150px] '>
                             <img src={inter} alt="alt" className='ml-[-100px] w-64'/>   
                        </div>   
                </div>
                {/* 5 card */}
                <div className=' border-black border-[1.5px]  w-64 rounded-lg h-80 lg:ml-[-40px] '>
                        <div className='w-18 ml-16 mt-8'>
                                <img src={lighting} alt="Lighting"/>
                        </div>
                        <div className=''>
                                <h1 className='font-Roboto font-bold ml-20 py-3 text-xl'>Lighting</h1>
                                <p className='mx-8 font-Roboto'>Headlights, Tail lights, Tailgates & Interior lights</p>
                        </div>
                        <div className=' mx-24 my-6 border-[#C52F33] border-[1.5px] w-12 h-12 rounded-full cursor-pointer'>
                                <img src={arrow} alt="arrow" className='py-3 px-3'/>
                        </div>   
                </div>
               
                {/* 6 card */}
                <div className=' border-black border-[1.5px] w-64 rounded-lg h-80 md:ml-[-40px] lg:ml-[-60px] '>
                        <div className='w-17 ml-16 mt-8'>
                                <img src={mechanics} alt="mechanics"/>
                        </div>
                        <div className=''>
                                <h1 className='font-Roboto font-bold ml-20 text-xl py-3'>Mechanics</h1>
                                <p className='mx-12 font-Roboto'>Radiator, Engine, Transmission, Brakes</p>
                        </div>
                        <div className=' mx-24 my-6 border-[#C52F33] border-[1.5px] w-12 h-12 rounded-full cursor-pointer'>
                                <img src={arrow} alt="arrow" className='py-3 px-3'/>
                        </div>
                </div>
                <div className=" hidden md:block absolute w-72  ml-[900px] mt-64">
                        <img src={mech} alt="mech"/>
                </div>
                
        </div>
     </section>
{/* Products section */}
     <section className='' >
        <div className='ml-24 mb-10'>
                <h1 className='font-Roboto font-semibold text-xl'>Our Products</h1>
                <div className='mt-14 grid grid-cols-3 border-[1px] border-black  rounded-lg w-[980px] ml-3 px-5 py-4 bg-gray-100'>
                        {/* 1 card */}
                        <div className='pl-4'>
                                <div className='shadow-lg  w-64 '> 
                                       <div className='bg-white w-64 h-60 px-4'> 
                                                <div className=' flex text-[#C52F33] space-x-2 justify-between items-center pt-3'>
                                                <h1 className='font-bold font-Roboto'>Belt Tightener Assembly</h1>
                                                <div className=''>
                                                <BsBookmark className=' text-2xl'/>
                                                </div>
                                                </div>
                                                <div className='w-34 mx-8 pt-4'>
                                                        <img src={belt} alt="belt"/>
                                                </div>
                                        </div>
                                        <div className='bg-red-100 w-64 h-72'>
                                                <div className='flex justify-between py-3'>        
                                                <h1 className='font-bold text-xl ml-3 flex'><FaEuroSign className='mt-1'/><span>664</span></h1>
                                                <div className='mr-4'>
                                                 <BsBagPlus className='text-[#C52F33] text-2xl'/>
                                                </div>
                                                </div>
                                                <div className='flex text-sm ml-3 font-Ubuntu'>
                                                        <p className='text-black opacity-[0.5]'>Type</p>
                                                        <p className='font-semibold ml-2'>Engine</p>
                                                </div>
                                                <div className='ml-3 text-sm'>
                                                        <h1 className='font-Ubuntu text-black opacity-[0.5] py-3'>Description</h1>
                                                        <p className='w-52 font-semibold'>Specially designed & precisely manufactured engine
                                                         parts to enhance the life mahindra empower engine and better fuel efficiency.</p>
                                                </div>
                                                <div className='ml-10 mt-5'>
                                                        <button className='bg-[#C52F33] font-Ubuntu text-white uppercase rounded-[16px] py-2 px-8 font-semibold'>add to cart</button>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        {/* card2 */}
                        <div className='pl-5'>
                                <div className='shadow-lg  w-64 '> 
                                       <div className='bg-white w-64 h-60 px-4'> 
                                                <div className=' flex text-[#C52F33] space-x-2 justify-between items-center pt-3'>
                                                <h1 className='font-bold font-Roboto'>Belt Tightener Assembly</h1>
                                                <div className=''>
                                                <BsBookmark className=' text-2xl'/>
                                                </div>
                                                </div>
                                                <div className='w-34 mx-8 pt-4'>
                                                        <img src={belt2} alt="belt"/>
                                                </div>
                                        </div>
                                        <div className='bg-red-100 w-64 h-72'>
                                                <div className='flex justify-between py-3'>        
                                                <h1 className='font-bold text-xl ml-3 flex'><FaEuroSign className='mt-1'/><span>664</span></h1>
                                                <div className='mr-4'>
                                                 <BsBagPlus className='text-[#C52F33] text-2xl'/>
                                                </div>
                                                </div>
                                                <div className='flex text-sm ml-3 font-Ubuntu'>
                                                        <p className='text-black opacity-[0.5]'>Type</p>
                                                        <p className='font-semibold ml-2'>Engine</p>
                                                </div>
                                                <div className='ml-3 text-sm'>
                                                        <h1 className='font-Ubuntu text-black opacity-[0.5] py-3'>Description</h1>
                                                        <p className='w-52 font-semibold'>Specially designed & precisely manufactured engine
                                                         parts to enhance the life mahindra empower engine and better fuel efficiency.</p>
                                                </div>
                                                <div className='ml-10 mt-5'>
                                                        <button className='bg-[#C52F33] font-Ubuntu text-white uppercase rounded-[16px] py-2 px-8 font-semibold'>add to cart</button>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        {/* card 3 */}
                        <div className='pl-6'>
                                <div className='shadow-lg  w-64 '> 
                                       <div className='bg-white w-64 h-60 px-4'> 
                                                <div className=' flex text-[#C52F33] space-x-2 justify-between items-center pt-3'>
                                                <h1 className='font-bold font-Roboto'>Belt Tightener Assembly</h1>
                                                <div className=''>
                                                <BsBookmark className=' text-2xl'/>
                                                </div>
                                                </div>
                                                <div className='w-34 mx-8 pt-4'>
                                                        <img src={belt3} alt="belt"/>
                                                </div>
                                        </div>
                                        <div className='bg-red-100 w-64 h-72'>
                                                <div className='flex justify-between py-3'>        
                                                <h1 className='font-bold text-xl ml-3 flex'><FaEuroSign className='mt-1'/><span>664</span></h1>
                                                <div className='mr-4'>
                                                 <BsBagPlus className='text-[#C52F33] text-2xl'/>
                                                </div>
                                                </div>
                                                <div className='flex text-sm ml-3 font-Ubuntu'>
                                                        <p className='text-black opacity-[0.5]'>Type</p>
                                                        <p className='font-semibold ml-2'>Engine</p>
                                                </div>
                                                <div className='ml-3 text-sm'>
                                                        <h1 className='font-Ubuntu text-black opacity-[0.5] py-3'>Description</h1>
                                                        <p className='w-52 font-semibold'>Specially designed & precisely manufactured engine
                                                         parts to enhance the life mahindra empower engine and better fuel efficiency.</p>
                                                </div>
                                                <div className='ml-10 mt-5'>
                                                        <button className='bg-[#C52F33] font-Ubuntu text-white uppercase rounded-[16px] py-2 px-8 font-semibold'>add to cart</button>
                                                </div>
                                        </div>
                                </div>
                        </div>

                </div>
        </div>

     </section>
    </main>
    </>
  )
}
