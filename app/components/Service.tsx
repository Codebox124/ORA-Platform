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
        <div className='max-w-5xl mx-auto my-24'>
            <h1 className='px-6 border-l-2 text-black my-8 text-xl'>Our services</h1>
            <div style={backgroundImageStyle} className="items-center justify-center grid grid-cols-1 md:grid-cols-2">
                <div className='bg-[#1E1E1E66] h-full px-10 py-8 flex gap-8 flex-col justify-center'>
                    <div>
                        <h1 className='text-white text-3xl md:text-5xl'>VENDA DE </h1>
                        <span className='text-4xl md:text-6xl text-white'>CABELO NATURAL</span>
                    </div>
                    <div>
                        <span className='text-white'>
                            Transforme o seu visual com extensões luxuosas e perucas feitas à medida e aplicadas no Paraíso das Princesa. Explore a nossa coleções, disponíveis em diversas texturas e cores para combinar com o seu estilo único
                        </span>
                    </div>
                    <div>
                        <button className="px-6 py-2 bg-[#A5775E] text-white">FAZER MARCAÇÃO</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 mt-5 gap-4 text-black'>
                <div className='flex gap-2 bg-[#FAF3F2] p-4'>
                    <div className=''>
                        <img className='' src='juan-manuel-merino-wNQ180WtW5g-unsplash-2 21.png' alt='Cabelo Natural' />
                    </div>
                    <div className='flex flex-col gap-8'>
                        <h1 className='text-xl'>CUIDADOS COM CABELO NATURAL</h1>
                        <span className='text-sm'>
                            Celebre a beleza do seu cabelo natural com cuidados direcionados e personalizados no Paraíso das Princesas. Os nossos serviços de cuidados com cabelo natural destinam-se a indivíduos que procuram realçar e manter a textura única do seu cabelo.
                        </span>
                    </div>
                </div>

                <div className='flex gap-2 bg-[#FAF3F2] p-4'>
                    <div className=''>
                        <img className='w-full' src='juan-manuel-merino-wNQ180WtW5g-unsplash-2 21 (1).png' alt='Tranças' />
                    </div>
                    <div className='flex flex-col gap-8'>
                        <h1 className='text-xl'>TRANÇAS</h1>
                        <span className='text-sm'>
                            Eleve o seu visual com tranças habilmente criadas no Paraíso das Princesas. Quer esteja à procura de um novo visual audacioso ou de um estilo protetor para manter o seu cabelo natural, os nossos serviços de tranças oferecem tanto estilo como praticidade.
                        </span>
                    </div>
                </div>

                <div className='flex gap-2 bg-[#FAF3F2] p-4'>
                    <div className=''>
                        <img className='w-full ' src='juan-manuel-merino-wNQ180WtW5g-unsplash-2 21 (2).png' alt='Corte e Modelismo' />
                    </div>
                    <div className='flex flex-col gap-8'>
                        <h1 className='text-xl'>CORTE E MODELISMO</h1>
                        <span className='text-sm'>
                            Descubra o corte de cabelo perfeito para o seu estilo e personalidade com nossos estilistas especialistas. Do clássico ao contemporâneo, criamos looks sob medida que amplificam sua beleza natural.
                        </span>
                    </div>
                </div>

                <div className='flex gap-2 bg-[#FAF3F2] p-4'>
                    <div className=''>
                        <img className='w-full ' src='juan-manuel-merino-wNQ180WtW5g-unsplash-2 21 (4).png' alt='Estética e Bem-estar' />
                    </div>
                    <div className='flex flex-col gap-8'>
                        <h1 className='text-xl'>ESTÉTICA E BEM-ESTAR</h1>
                        <span className='text-sm'>
                            Eleve a sua beleza com os nossos serviços especializados no Paraíso das Princesas. Desde a depilação à manicure, mime-se com tratamentos luxuosos adaptados para realçar o seu estilo único.
                        </span>
                    </div>
                </div>

                <div className='flex gap-2 bg-[#FAF3F2] p-4'>
                    <div className=''>
                        <img className='w-full ' src='juan-manuel-merino-wNQ180WtW5g-unsplash-2 21 (5).png' alt='Coloração' />
                    </div>
                    <div className='flex flex-col gap-8'>
                        <h1 className='text-xl'>COLORAÇÃO</h1>
                        <span className='text-sm'>
                            Transforme o seu cabelo com a nossa coloração especializada. Desde destaques subtis a tons audaciosos, os nossos coloristas dão vida à sua visão. Quer procure um look natural ou uma mudança dramática, confie em nós para resultados impecáveis.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

