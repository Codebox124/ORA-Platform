import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import Image from 'next/image'

export default function FollowUs() {
    return (
        <div className=' max-w-5xl mx-auto w-full mx-auto bg-white text-black'>
            <div className='flex justify-between mb-10  bg-white'>
                <p className=' text-3xl'>FOLLOW US ON INSTAGRAM</p>
                <div className='flex gap-3'>
                    <p className=' font-light'>
                        Follow Us
                    </p>
                    <FaInstagram size={24}/>
                </div>
            </div>

            <div className='flex'>
                <div>
                    <Image src="/Hair_uno.png" width={355} height={355} alt="" />
                </div>
                <div>
                    <Image src="/Hair_dos.png" width={355} height={355} alt="" />
                </div>
                <div>
                    <Image src="/Hair_tres.png" width={355} height={355} alt="" />
                </div>
                <div>
                    <Image src="/Hair_quat.png" width={355} height={355} alt="" />
                </div>
            </div>

            <div className='bg-[#FAF3F2]'>
                <div className=' text-center py-28'>
                    <div className='text-[#84635C] flex justify-center'>
                        <FaInstagram size={24}/>
                    </div>
                    <div className=' text-[#84635C] text-[80px] italic my-3'>
                        FOLLOW US
                    </div>
                    <div className='capitalize text-[#84635C] mb-3 text-3xl'>
                        <p>ON INSTAGRAM AND OTHER SOCIAL NETWORK</p>
                    </div>

                    <div className='flex gap-2 justify-center transition-all'>
                        <button className='font-medium py-4 px-7 text-white bg-[#A5775E]'>INSTAGRAM</button>
                        <button className='font-medium py-4 px-7 text-[#84635C] bg-white border-[#84635C]'>FACEBOOK</button>
                    </div>
                </div>
            </div>
        </div>
    )
}