'use client';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import servicesData from '@/app/data/services.json';
import { PiGreaterThanLight } from 'react-icons/pi';

interface ServiceItem {
    title: string;
    description: string;
    image: string;
}

export default function Service() {
    const [nextClicked, setNextClicked] = useState(false);
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
            <h1 className='px-6 border-l-2 text-black my-8 text-xl animate-fade-in'>Our services</h1>

            <div style={backgroundImageStyle} className="md:items-center relative md:static justify-center grid grid-cols-1 md:grid-cols-2">
                <div className='bg-[#1E1E1E66] md:h-full h-2/3 md:px-10 px-5 absolute md:relative bottom-0 flex md:gap-5 gap-8 flex-col justify-center animate-slide-in-left'>
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

            <div className='hidden md:grid grid-cols-1 lg:grid-cols-2 mt-5 gap-4 text-black animate-fade-in'>
                {services.map((service, index) => (
                    <div key={index} className='flex gap-2 bg-[#FAF3F2] p-4 animate-fade-in'>
                        <div>
                            <img className='w-full' src={service.image} alt={service.title} />
                        </div>
                        <div className='flex flex-col gap-3 justify-center'>
                            <h1 className='text-xl'>{service.title}</h1>
                            <span className='text-sm'>{service.description}</span>
                        </div>
                    </div>
                ))}

                <div className='bg-[#ab8672]'>
                    <div className='w-full h-full bg-[#A5775E] text-white ml-3 p-6 flex flex-col justify-between'>
                        <div>
                            <p className=' text-5xl font-light'>−15% DESCONTO</p>
                            <span className='italic text-3xl font-light'>na sua primeira visita</span>
                        </div>

                        <div className='mt-auto'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className=' text-lg'>FAZER MARCAÇÃO</p>
                                </div>

                                <button
                                onClick={() => {
                                    setNextClicked(true);
                                    setTimeout(() => setNextClicked(false), 200);
                                }}
                                    className={`p-2 border w-fit h-fit hidden md:block ${nextClicked ? 'bg-[#DDC3BB66] text-white' : 'border-[#DDC3BB66]'}`}
                                >
                                    <PiGreaterThanLight size={19} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:hidden animate-fade-in'>
                <Slider className='overflow-hidden' {...settings}>
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

                <div className='bg-[#ab8672]'>
                    <div className='w-full h-full bg-[#A5775E] text-white ml-3 p-6 flex flex-col justify-between'>
                        <div>
                            <p className=' text-4xl font-light'>−15% DESCONTO</p>
                            <span className='italic text-2xl font-light'>na sua primeira visita</span>
                        </div>

                        <div className='mt-auto'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className=' text-base'>FAZER MARCAÇÃO</p>
                                </div>

                                <button
                                onClick={() => {
                                    setNextClicked(true);
                                    setTimeout(() => setNextClicked(false), 200);
                                }}
                                    className={`p-2 border w-fit h-fit hidden md:block ${nextClicked ? 'bg-[#DDC3BB66] text-white' : 'border-[#DDC3BB66]'}`}
                                >
                                    <PiGreaterThanLight size={19} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
