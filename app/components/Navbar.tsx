"use client"
import { useState } from 'react';
import { Menu } from '@headlessui/react';

import { BiMenu } from 'react-icons/bi';
import { MdClose } from "react-icons/md";

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
            <div className='hidden md:flex  items-center gap-10'>
                <a href="#home">Home</a>
                <a href="#quemsomos">Quem Somos</a>
                <a href="#servicos">Serviços</a>
                <a href="#galeria">Galeria</a>
                <a href="#testemunhos">Testemunhos</a>
            </div>
            <div className='md:hidden'>
                <button onClick={handleToggle} className='focus:outline-none'>
                    {isOpen ? (
                        <MdClose className='h-8 w-8 text-black' />
                    ) : (
                        <BiMenu className='h-8 w-8 text-white' />
                    )}
                </button>
            </div>
            {isOpen && (
                <Menu as='div' className='absolute top-0 left-0 w-full h-screen bg-white text-black shadow-lg md:hidden'>
                    <div className='flex flex-col items-center gap-4 p-4'>
                        <button onClick={handleToggle} className='self-end focus:outline-none'>
                            <MdClose className='h-8 w-8 text-black' />
                        </button>
                        <a href="#home" onClick={handleToggle}>Home</a>
                        <a href="#quemsomos" onClick={handleToggle}>Quem Somos</a>
                        <a href="#servicos" onClick={handleToggle}>Serviços</a>
                        <a href="#galeria" onClick={handleToggle}>Galeria</a>
                        <a href="#testemunhos" onClick={handleToggle}>Testemunhos</a>
                    </div>
                </Menu>
            )}
        </div>
    );
}
