'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface GalleryItem {
  image: string;
  alt: string;
  category: 'woman' | 'man';
}

const galleryData: GalleryItem[] = [
  { image: 'juan-manuel-merino-wNQ180WtW5g-unsplash-2 34.png', alt: 'Image 2', category: 'woman' },
  { image: 'juan-manuel-merino-wNQ180WtW5g-unsplash-2 33 (1).png', alt: 'Image 1', category: 'woman' },
  { image: 'juan-manuel-merino-wNQ180WtW5g-unsplash-2 35.png', alt: 'Image 1', category: 'woman' },
  { image: 'juan-manuel-merino-wNQ180WtW5g-unsplash-2 33 (1).png', alt: 'Image 1', category: 'woman' },
  { image: 'juan-manuel-merino-wNQ180WtW5g-unsplash-2 30.png', alt: 'Image 1', category: 'woman' },
  { image: 'juan-manuel-merino-wNQ180WtW5g-unsplash-2 33 (1).png', alt: 'Image 1', category: 'woman' },
  { image: 'juan-manuel-merino-wNQ180WtW5g-unsplash-2 30 (1).png', alt: 'Image 1', category: 'woman' },
  { image: 'juan-manuel-merino-wNQ180WtW5g-unsplash-2 36.png', alt: 'Image 1', category: 'man' },
  { image: 'juan-manuel-merino-wNQ180WtW5g-unsplash-2 37.png', alt: 'Image 1', category: 'man' },
  { image: 'juan-manuel-merino-wNQ180WtW5g-unsplash-2 38.png', alt: 'Image 1', category: 'man' },
  { image: 'juan-manuel-merino-wNQ180WtW5g-unsplash-2 39.png', alt: 'Image 1', category: 'man' },
  { image: 'juan-manuel-merino-wNQ180WtW5g-unsplash-2 40.png', alt: 'Image 1', category: 'man' },
  { image: 'juan-manuel-merino-wNQ180WtW5g-unsplash-2 37.png', alt: 'Image 1', category: 'man' },
  { image: 'juan-manuel-merino-wNQ180WtW5g-unsplash-2 36.png', alt: 'Image 1', category: 'man' },
];

export default function Gallery() {
  const [filter, setFilter] = useState<'woman' | 'man' | 'all'>('woman');

  const filteredData = filter === 'all' ? galleryData : galleryData.filter(item => item.category === filter);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
        },
      },
    ],
  };

  return (
    <div className='pl-4 mx-auto py-20 text-black'>
      <div className='flex justify-between max-w-5xl mx-auto mb-10 items-center'>
        <p className='text-3xl border-l-4 pl-5'>GALERIA</p>
        <div className='flex px-6 gap-4'>
          <button onClick={() => setFilter('woman')} className={filter === 'woman' ? 'font-bold' : ''}>Woman</button>
          <button onClick={() => setFilter('man')} className={filter === 'man' ? 'font-bold' : ''}>Man</button>
        </div>
      </div>
      <div className='overflow-hidden md:pl-32'>
        <Slider {...settings} className='flex'>
          {filteredData.map((item, index) => (
            <div key={index} className='px-1'>
              <img src={item.image} alt={item.alt} className=' w-full      ' />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
