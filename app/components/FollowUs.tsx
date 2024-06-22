import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import Image from 'next/image'

export default function FollowUs() {
    return (
        <div className=' max-w-5xl mx-auto w-full  bg-white text-black'>
            <div className='flex justify-between mb-10  bg-white'>
                <p className=' text-3xl border-l-4 pl-5'>FOLLOW US ON INSTAGRAM</p>
                <div className='md:flex gap-3 hidden'>
                    <p className=' font-light'>
                        Follow Us
                    </p>
                    <FaInstagram size={24}/>
                </div>
            </div>

            <div className='flex'>
                <div>
                    <Image src="/Hair_uno.png" width={355} height={355} alt="" className='w-[512px] lg:w-[355px]'/>
                </div>
                <div className='hidden md:block'>
                    <Image src="/Hair_dos.png" width={355} height={355} alt="" className='w-[512px] lg:w-[355px]'/>
                </div>
                <div className='hidden lg:block'>
                    <Image src="/Hair_tres.png" width={355} height={355} alt="" className='w-[512px] lg:w-[355px]'/>
                </div>
                <div className='hidden lg:block'>
                    <Image src="/Hair_quat.png" width={355} height={355} alt="" className='w-[512px] lg:w-[355px]'/>
                </div>
            </div>

            <div className='bg-[#FAF3F2]'>
                <div className=' text-center py-28 px-5 md:px-0'>
                    <div className='text-[#84635C] flex justify-center'>
                        <FaInstagram size={24}/>
                    </div>
                    <div className=' text-[#84635C] text-[48px] md:text-[60px] lg:text-[80px] italic my-3'>
                        FOLLOW US
                    </div>
                    <div className='capitalize text-[#84635C] mb-3 text-3xl'>
                        <p>ON INSTAGRAM AND OTHER SOCIAL NETWORK</p>
                    </div>

                    <div className='flex flex-col md:flex-row gap-3 justify-center transition-all'>
                        <button className='font-medium w-full md:w-fit py-4 px-7 text-white bg-[#A5775E]'>INSTAGRAM</button>
                        <button className='font-medium w-full md:w-fit py-4 px-7 text-[#84635C] bg-white border-[#84635C]'>FACEBOOK</button>
                    </div>
                </div>
            </div>

            <div className='hidden md:flex lg:hidden mb-[70px]'>
                <div className=''>
                    <Image src="/Hair_tres.png" width={355} height={355} alt="" className='w-[512px] lg:w-[355px]'/>
                </div>
                <div className=''>
                    <Image src="/Hair_quat.png" width={355} height={355} alt="" className='w-[512px] lg:w-[355px]'/>
                </div>
            </div>
        </div>
    )
}