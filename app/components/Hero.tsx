import React from 'react';
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
    <div style={backgroundImageStyle} className='h-screen flex flex-col justify-between py-4 md:px-16 px-4'>
      <Navbar />
      <div className='flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left'>
        <div className='flex flex-col gap-5 max-w-xl'>
          <h1 className='text-5xl md:text-6xl uppercase'>Cabelo Sedoso</h1>
          <span className='text-xl md:text-2xl uppercase'>
            Não acontece por acaso, acontece por marcação
          </span>
          <div>
            <button className='px-6 py-2 bg-[#A5775E] text-white'>FAZER MARCAÇÃO</button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 py-4'>
        <div className='flex gap-2 items-center'>
          <img className='h-12 w-12' src='location (1).png' alt='Location' />
          <div>
            <span className='text-sm'>Address:</span>
            <h1 className='font-bold text-sm'>Rua Aquiles Machado 5 1900-077 Lisboa</h1>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <img className='h-12 w-12' src='routing-2.png' alt='Parking' />
          <div>
            <span className='text-sm'>Parking:</span>
            <h1 className='font-bold text-sm'>Parqueamento junto ao salão</h1>
          </div>
        </div>
        <div className='flex gap-2 items-center'>
          <img className='h-12 w-12' src='routing-2 (1).png' alt='Metro' />
          <div>
            <span className='text-sm'>Metro:</span>
            <h1 className='font-bold text-sm'>Estação de Metro junto ao salão</h1>
          </div>
        </div>
      </div>

    </div>
  );
}
