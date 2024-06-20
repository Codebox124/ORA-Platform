'use client'
import React from 'react'

export default function Service() {
    const backgroundImageStyle = {
        backgroundImage: 'url("juan-manuel-merino-wNQ180WtW5g-unsplash-2 2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
    };
    return (
        <div className='max-w-5xl  mx-auto my-24 '>
            <h1 className='px-6 border-l-2 text-black my-8 text-xl'>Our services</h1>
            <div style={backgroundImageStyle} className="items-center justify-center grid grid-cols-2 ">
                <div className='bg-[#1E1E1E66] h-full px-10 flex gap-8 flex-col justify-center'>
                    <div>
                        <h1>VENDA DE </h1>
                        <span className='text-6xl'>CABELO NATURAL</span>
                    </div>

                    <div>
                        <span>Transforme o seu visual com extensões luxuosas e perucas feitas à medida e aplicadas no Paraíso das Princesa. Explore a nossa coleções, disponíveis em diversas texturas e cores para combinar com o seu estilo único
                        </span>
                    </div>
                    <div>
                        <button className="px-6 py-2 bg-[#A5775E]">FAZER MARCAÇÃO</button>
                    </div>

                </div>

            </div>

            <div className='grid grid-cols-2 mt-5 gap-4 text-black'>
                <div className='flex gap-2  bg-[#FAF3F2] '>
                    <div className='grow'>
                        <img  className='' src='juan-manuel-merino-wNQ180WtW5g-unsplash-2 21.png' />

                    </div>
                    <div className='flex flex-col my-2   gap-8 '>
                        <h1 className='text-xl'>CUIDADOS COM CABELO NATURAL</h1>
                        <span className='text-sm'>Celebre a beleza do seu cabelo natural com cuidados direcionados e personalizados no Paraíso das Princesas. Os nossos serviços de cuidados com cabelo natural destinam-se a indivíduos que procuram realçar e manter a textura única do seu cabelo.</span>

                    </div>

                </div>
                <div className='flex gap-2  bg-[#FAF3F2] '>
                    <div className='grow'>
                        <img  className='' src='juan-manuel-merino-wNQ180WtW5g-unsplash-2 21 (1).png' />

                    </div>
                    <div className='flex flex-col my-2   gap-8 '>
                        <h1 className='text-xl'>TRANÇAS </h1>
                        <span className='text-sm'>Eleve o seu visual com tranças habilmente criadas no Paraíso das Princesas. Quer esteja à procura de um novo visual audacioso ou de um estilo protetor para manter o seu cabelo natural, os nossos serviços de tranças oferecem tanto estilo como praticidade.</span>

                    </div>

                </div>
                <div className='flex gap-2  bg-[#FAF3F2] '>
                    <div className='grow'>
                        <img  className='' src='juan-manuel-merino-wNQ180WtW5g-unsplash-2 21 (2).png' />

                    </div>
                    <div className='flex flex-col my-2   gap-8 '>
                        <h1 className='text-xl'>CORTE E MODELISMO </h1>
                        <span className='text-sm'>Celebre a beleza do seu cabelo natural com cuidados direcionados e personalizados no Paraíso das Princesas. Os nossos serviços de cuidados com cabelo natural destinam-se a indivíduos que procuram realçar e manter a textura única do seu cabelo.</span>

                    </div>

                </div>
                <div className='flex gap-2  bg-[#FAF3F2] '>
                    <div className='grow'>
                        <img  className='' src='juan-manuel-merino-wNQ180WtW5g-unsplash-2 21.png' />

                    </div>
                    <div className='flex flex-col my-2 items-center  gap-8 '>
                        <h1 className='text-xl'>CUIDADOS COM CABELO NATURAL</h1>
                        <span className='text-sm'>Celebre a beleza do seu cabelo natural com cuidados direcionados e personalizados no Paraíso das Princesas. Os nossos serviços de cuidados com cabelo natural destinam-se a indivíduos que procuram realçar e manter a textura única do seu cabelo.</span>

                    </div>

                </div>

            </div>
        </div>
    )
}
