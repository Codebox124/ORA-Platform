import React from 'react'
import Navbar from './Navbar';

export default function Hero() {
    const backgroundImageStyle = {
        backgroundImage: 'url("sheldon-C8MrJpuwjDM-unsplash-2 1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    };
    return (
        <div style={backgroundImageStyle} className='h-screen flex flex-col justify-between py-4  md:px-16'>
            <Navbar />
            <div className='items-center grid grid-cols-2 '>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-6xl uppercase'>Cabelo Sedoso</h1>
                    <span className='text-2xl uppercase'>Não acontece por acaso Acontece por marcação</span>
                    <div>
                        <button className="px-6 py-2 bg-[#A5775E]">FAZER MARCAÇÃO</button>
                    </div>
                </div>


            </div>
            <div className='items-center grid grid-cols-2 '>
            <div className=' grid grid-cols-3   gap-1 '>
                <div className='flex gap-2 items-center'>
                 <img className='h-12 w-12' src='location (1).png' />
                    <div>
                    <span className='text-sm'>Address:</span>
                    <h1 className='font-bold text-sm'>Rua Aquiles Machado 5 1900-077 Lisboa</h1>
                 </div>    
                
                          

                </div>

                <div className='flex gap-2 items-center'>
                 <img className='h-12 w-12' src='location (1).png' />
                    <div>
                    <span className='text-sm'>Parking:</span>
                    <h1 className='font-bold text-sm'>Parqueamento Junto ao salão</h1>
                 </div>    
                
                          

                </div>
                <div className='flex gap-2 items-center'>
                 <img className='h-12 w-12' src='location (1).png' />
                    <div>
                    <span className='text-sm'>Metro:</span>
                    <h1 className='font-bold text-sm'>Estação de Metro  junto salão</h1>
                 </div>    
                
                          

                </div>

            </div>
            </div>
           
           
            
        </div>
    )
}
