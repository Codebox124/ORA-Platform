"use client"
import { useState } from 'react';
import { Menu } from '@headlessui/react';

import { BiMenu } from 'react-icons/bi';
import { MdClose } from "react-icons/md";
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex justify-between items-center '>
            <div className='flex items-center gap-2 '>
                <div>
                    <img className='md:h-16 md:w-32 h-9 w-20' src='Frame.png' alt='Logo' />
                </div>
                <div>
                    <span className='md:text-2xl text-sm uppercase'>paraíso das princesas</span>
                </div>
            </div>
            <div className='hidden lg:flex  items-center gap-10'>
                <a href="#home">Home</a>
                <a href="#quemsomos">Quem Somos</a>
                <a href="#servicos">Serviços</a>
                <a href="#galeria">Galeria</a>
                <a href="#testemunhos">Testemunhos</a>
            </div>
            <div className='lg:hidden'>
                <button onClick={handleToggle} className='focus:outline-none'>
                    {isOpen ? (
                        <MdClose className='h-8 w-8 text-black' />
                    ) : (
                        <BiMenu className='h-8 w-8 text-white' />
                    )}
                </button>
            </div>
            {isOpen && (
                <Menu as='div' className='absolute top-0 left-0 w-full  bg-white text-black shadow-lg lg:hidden'>
                    <div className='p-4 md:p-7'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-3 lg:gap-5 '>
                                <div>
                                    <Image src='/Vector.png' width={70} height={70} alt='' className='text-black'/>
                                </div>
                                <div className='capitalize font-medium'>
                                    paraíso das princesas
                                </div>
                            </div>
                            <div className=' flex items-center'>
                                <button onClick={handleToggle} className='focus:outline-none'>
                                    <MdClose className='h-8 w-8 text-black' />
                                </button>
                            </div>
                        </div>
                        
                        <div className=' my-12 flex flex-col gap-4 pl-6 md:pl-7'>
                            <a href="#home" onClick={handleToggle}>Home</a>
                            <a href="#quemsomos" onClick={handleToggle}>Quem Somos</a>
                            <a href="#servicos" onClick={handleToggle}>Serviços</a>
                            <a href="#galeria" onClick={handleToggle}>Galeria</a>
                            <a href="#testemunhos" onClick={handleToggle}>Testemunhos</a>
                        </div>

                        <div className='pl-6 md:pl-7 mt-20 md:mt-12 mb-5'>
                            <div className='capitalize font-bold mb-[10px]'>
                                <h1>Horário</h1>
                            </div>
                            <div className='flex flex-col md:flex-row justify-normal md:justify-between items-start md:items-center'>
                                <ul className=' capitalize font-light flex flex-col md:flex-row gap-[10px] md:gap-[15px] lg:gap-[20px]'>
                                    <li className='cursor-pointer'>Mon - Sat: 10:00 — 19:30</li>
                                    <li className='cursor-pointer'>Sunday: CLOSED</li>
                                </ul>
                                <div className=' flex gap-[25px] mt-6 md:mt-0 items-center'>
                                    <div className=' text-[#494040] cursor-pointer'><FaFacebookF size={20} /></div>
                                    <div className=' text-[#494040] cursor-pointer'><FaInstagram size={20} /></div>
                                    <div className=' text-[#494040] cursor-pointer'><FaWhatsapp  size={20}/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Menu>
            )}
        </div>
    );
}
