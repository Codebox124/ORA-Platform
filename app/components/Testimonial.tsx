import Image from 'next/image'
import React from 'react'

export default function Testimonial() {
  return (
    <div className='my-16'>
      <div className=' max-w-5xl w-full mx-auto bg-white text-black px-5 md:px-0'>
        <div className='flex justify-between mb-10  bg-white'>
          <p className=' text-3xl border-l-4 pl-5 uppercase'>Testimonials</p>
          <div className='md:flex gap-3 hidden'>
            <p className=' font-light'>
              Google Reviews
            </p>
            ⭐⭐⭐⭐⭐4.9
          </div>
        </div>
        <div className='bg-[#FAF6F2]'>
          <div className=' text-center py-28'>
            <div className='text-[#494040] flex justify-center'>
              <Image src="/Ellipse.png" width={50} height={50} alt=''/>
            </div>
            <div className=' text-[#494040] text-2xl my-3'>
              MARIA SANTOS
            </div>
            <div className='capitalize text-[#494040] my-3 font-light'>
              <p>I have been a very satisfied client for over 20 years.</p>
              <p>Fatumata became a really good friend. Plus, she is an expert in her line of work.</p>
            </div>
            <div>
              ⭐⭐⭐⭐⭐
            </div>
          </div>
        </div>
        <div className=' text-center'>
          <div className='my-5'>
            <p className='uppercase text-3xl text-[#84635C]'>É cliente? Deixe o seu comentário</p>
          </div>

          <div className='my-7 mx-auto'>
            <textarea placeholder="⭐⭐⭐⭐⭐ Elecioneaa classificação" className='border-2 border-[#DDC3BB] focus:outline-none focus:ring-0 focus:border-[#DDC3BB] p-3 max-w-[700px] w-full'></textarea>
          </div>

          <div>
            <button className=' w-[100%] md:w-fit uppercase px-7 py-3 bg-[#A5775E] text-[white] font-medium'>Deixar comentários</button>
          </div>
        </div>
      </div>
    </div>
  )
}
