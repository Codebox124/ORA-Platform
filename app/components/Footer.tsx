import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='max-w-[1640px] mx-auto py-[20px] px-5 md:px-14 lg:px-24 bg-white text-[#494040]'>
      <div className=' max-w-[1420px] mx-auto h-full py-8 md:py-14 lg:py-20'>
        <div className=' flex justify-between flex-wrap'>
          <div  className=' max-w-[390px] w-full'>
            <div className=' mb-5'>
              <div className='flex items-center gap-3 lg:gap-5 '>
                <div>
                    
                </div>
                <div className='capitalize font-bold'>
                  paraíso das princesas
                </div>
              </div>
              <div>
                <div className=' capitalize font-bold mt-5'>
                  <p>Caros visitantes! </p>
                </div>
                <div className='my-[25px]'>
                  <p className='font-light'>
                    Entre no nosso salão e deixe-nos transformar os seus sonhos de beleza em realidade
                  </p>
                </div>
                <div className=' flex gap-[25px] mt-6'>
                  <div className=' text-[#494040] cursor-pointer'><FaFacebookF size={20} /></div>
                  <div className=' text-[#494040] cursor-pointer'><FaInstagram size={20} /></div>
                  <div className=' text-[#494040] cursor-pointer'><FaWhatsapp  size={20}/></div>
                </div>
              </div>
            </div>
          </div>
          <div  className=' w-[250px]  mb-5'>
            <div>
              <div className='capitalize font-bold mb-[20px] lg:mb-[30px]'>
                <h1>Links</h1>
              </div>
              <ul className=' capitalize flex flex-col gap-[10px] md:gap-[15px] lg:gap-[20px] font-light'>
                <li className='cursor-pointer'>About Us</li>
                <li className='cursor-pointer'>Our Service</li>
                <li className='cursor-pointer'>Gallery</li>
                <li className='cursor-pointer'>Reviews</li>
                <li className='cursor-pointer'>Follow Us</li>
              </ul>
            </div>
          </div>
          <div  className=' w-[250px]  mb-5'>
            <div>
              <div className='capitalize font-bold mb-[20px] lg:mb-[30px]'>
                <h1>Horário</h1>
              </div>
              <ul className=' capitalize font-light flex flex-col gap-[10px] md:gap-[15px] lg:gap-[20px]'>
                <li className='cursor-pointer'>Monday: 10:00 — 19:30</li>
                <li className='cursor-pointer'>Tuesday: 10:00 — 19:30</li>
                <li className='cursor-pointer'>Wednesday: 10:00 — 19:30</li>
                <li className='cursor-pointer'>Thursday: 10:00 — 19:30</li>
                <li className='cursor-pointer'>Friday: 10:00 — 19:30</li>
                <li className='cursor-pointer'>Saturday: 10:00 — 19:30</li>
                <li className='cursor-pointer'>Sunday: CLOSED</li>
              </ul>
            </div>
          </div>
          <div className=' w-[250px] mb-5'>
            <div>
              <div className='capitalize font-bold mb-[20px] lg:mb-[30px]'>
                <h1>Contact</h1>
              </div>
              <ul className=' capitalize font-light flex flex-col gap-[10px] md:gap-[15px] lg:gap-[20px]'>
                <li className='cursor-pointer'>Address: Rua Aquiles Machado 5, 1900-077 Lisboa</li>
                <li className='cursor-pointer'>Phone: +123 456 7890</li>
                <li className='cursor-pointer'>WhatsApp: +123 456 7890</li>
                <li className='cursor-pointer'>Email: hello@sitename.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className=' flex justify-between'>
          <div className=' text-[#BBA39B] font-medium text-xs cursor-pointer'>
            © PARAÍSO DAS PRINCESAS 2024
          </div>

          <div className='flex gap-3 text-[#BBA39B] font-medium text-xs list-none'>
            <li className=' cursor-pointer'>
              Privacy Policy
            </li>

            <li className=' cursor-pointer'>
              Terms of Service
            </li>
          </div>
        </div>
      </div>
  </div>
  )
}
