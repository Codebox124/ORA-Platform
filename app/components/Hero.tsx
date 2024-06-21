'use client'
import React from 'react';
import Navbar from './Navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Hero() {
  const backgroundImageStyle = {
    backgroundImage: 'url("sheldon-C8MrJpuwjDM-unsplash-2 1.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
  };

  const infoItems = [
    {
      img: 'location (1).png',
      alt: 'Location',
      label: 'Address:',
      value: 'Rua Aquiles Machado 5 1900-077 Lisboa',
    },
    {
      img: 'routing-2.png',
      alt: 'Parking',
      label: 'Parking:',
      value: 'Parqueamento junto ao salão',
    },
    {
      img: 'routing-2 (1).png',
      alt: 'Metro',
      label: 'Metro:',
      value: 'Estação de Metro junto ao salão',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={backgroundImageStyle} className='h-screen flex flex-col justify-between py-4 md:px-16 px-4'>
      <Navbar />
      <div className='flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left'>
        <div className='flex flex-col gap-5 max-w-xl animate-fade-in'>
          <h1 className='text-5xl md:text-6xl uppercase animate-slide-in-left'>Cabelo Sedoso</h1>
          <span className='text-xl md:text-2xl uppercase animate-slide-in-left'>
            Não acontece por acaso, acontece por marcação
          </span>
          <div className='animate-slide-in-left'>
            <button className='px-6 py-2 bg-[#A5775E] text-white'>FAZER MARCAÇÃO</button>
          </div>
        </div>
      </div>
      <div className='hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 py-4 animate-fade-in'>
        {infoItems.map((item, index) => (
          <div key={index} className='flex gap-2 items-center'>
            <img className='h-12 w-12' src={item.img} alt={item.alt} />
            <div>
              <span className='text-sm'>{item.label}</span>
              <h1 className='font-bold text-sm'>{item.value}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className='md:hidden py-4'>
        <Slider {...sliderSettings} className='w-full overflow-x-hidden'>
          {infoItems.map((item, index) => (
            <div key={index} className='flex justify-center flex-col text-center items-center animate-fade-in'>
              <div className='flex flex-col md:flex-row gap-2 justify-center items-center'>
                <img className='h-12 w-12' src={item.img} alt={item.alt} />
                <div>
                  <span className='text-sm'>{item.label}</span>
                  <h1 className='font-bold text-sm'>{item.value}</h1>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
