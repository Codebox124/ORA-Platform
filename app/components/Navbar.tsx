import Image from 'next/image'
import React from 'react'

export default function Navbar() {
    return (
        <div className='flex justify-between  items-center '>
            <div className='flex items-center gap-2 mt-4'>
                <div>
                   <img className='h-16 w-32' src='Frame.png' />

                </div>
                <div>
                    <span className='text-2xl uppercase'>paraíso das princesas</span>
                </div>

            </div>
            <div className='flex items-center gap-10'>
                <a href="">Home</a>
                <a href="">Quem Somos</a>
                <a href="">Serviços</a>
                <a href="">Galeria</a>
                <a href="">Testemunhos</a>

            </div>

        </div>
    )
}
