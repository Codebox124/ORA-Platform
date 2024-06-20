import Image from 'next/image'
import React from 'react'

export default function Navbar() {
    return (
        <div className='flex justify-between items-center '>
            <div className='flex items-center'>
                <div>
                   <img className='h-16 w-32' src='Frame.png' />

                </div>
                <div>
                    <span>paraíso das princesas</span>
                </div>

            </div>
            <div>

            </div>

        </div>
    )
}
