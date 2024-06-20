'use client';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import servicesData from '@/app/data/services.json';

interface ServiceItem {
    title: string;
    description: string;
    image: string;
}// Adjust the path if necessary

export default function Service() {
    const [services, setServices] = useState<ServiceItem[]>([]);

    useEffect(() => {
        setServices(servicesData);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const backgroundImageStyle = {
        backgroundImage: 'url("juan-manuel-merino-wNQ180WtW5g-unsplash-2 2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    };

    return (
        <div className='max-w-5xl mx-auto my-24'>
            <h1 className='px-6 border-l-2 text-black my-8 text-xl'>Our services</h1>
            <div style={backgroundImageStyle} className="items-center justify-center grid grid-cols-1 md:grid-cols-2">
                <div className='bg-[#1E1E1E66] h-full px-10  flex md:gap-5 gap-2 items-center flex-col justify-center'>
                    <div>
                        <h1 className='text-white text-3xl md:text-5xl'>VENDA DE </h1>
                        <span className='text-4xl md:text-6xl text-white'>CABELO NATURAL</span>
                    </div>
                    <div>
                        <span className='text-white'>
                            Transforme o seu visual com extensões luxuosas e perucas feitas à medida e aplicadas no Paraíso das Princesa. Explore a nossa coleções, disponíveis em diversas texturas e cores para combinar com o seu estilo único.
                        </span>
                    </div>
                    <div>
                        <button className="px-6 py-2 bg-[#A5775E] text-white">FAZER MARCAÇÃO</button>
                    </div>
                </div>
            </div>

            <div className='hidden md:grid md:grid-cols-2 mt-5 gap-4 text-black'>
                {services.map((service, index) => (
                    <div key={index} className='flex gap-2 bg-[#FAF3F2] p-4'>
                        <div>
                            <img className='w-full' src={service.image} alt={service.title} />
                        </div>
                        <div className='flex flex-col gap-3 justify-center'>
                            <h1 className='text-xl'>{service.title}</h1>
                            <span className='text-sm'>{service.description}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className='md:hidden'>
                <Slider {...settings}>
                    {services.map((service, index) => (
                        <div key={index} className='flex flex-col items-center text-black bg-[#FAF3F2] p-4'>
                            <div>
                                <img className='w-full' src={service.image} alt={service.title} />
                            </div>
                            <div className='flex flex-col gap-4 mt-4 text-center'>
                                <h1 className='text-xl'>{service.title}</h1>
                                <span className='text-sm'>{service.description}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
