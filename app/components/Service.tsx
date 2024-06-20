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
        <div style={backgroundImageStyle} className="max-w-5xl items-center justify-center grid grid-cols-2 my-24 mx-auto ">
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
    )
}
