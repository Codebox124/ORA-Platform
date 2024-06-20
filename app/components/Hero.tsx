import React from 'react'

export default function Hero() {
    const backgroundImageStyle = {
        backgroundImage: 'url("Frame.png")',
        backgroundSize: 'cover', // Adjusts the image to cover the whole div
        backgroundPosition: 'center', // Centers the image
        height: '100vh', // Full height of the viewport
        width: '100%',
    };
    return (
        <div style={backgroundImageStyle}  className='h-screen'>Hero</div>
    )
}
