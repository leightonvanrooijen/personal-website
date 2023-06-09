'use client'; // TODO change animation tactic to allow for better SSR
import Image from 'next/image';
import image from '@/public/aboutme.png';
import { ScrollDown } from '@/components/about/ScrollDown';
import React from 'react';
import { motion } from 'framer-motion';

export const Introduction = () => {
  return (
    <div className='flex flex-1 flex-col items-center'>
      <div className='mb-2 aspect-square max-w-xs overflow-hidden rounded-full border-2 border-gray-200 shadow-inner'>
        <Image src={image} alt={'Image'} />
      </div>
      <div className='relative max-w-2xl'>
        <h1 className=' text-6xl font-semibold tracking-tight text-gray-800 sm:text-7xl'>
          <p className='flex justify-center'>Leighton</p>
          <div className='flex justify-center space-x-5'>
            <p className=''>van</p>
            <p className=''>Rooijen</p>
          </div>
        </h1>
        <div className='absolute bottom-[85%] left-[78%]'>
          <Arrow />
        </div>
        <p className='mt-5 flex justify-center text-xl font-semibold text-gray-500 sm:text-2xl'>
          Fullstack Web Developer
        </p>
        <p className='mb-8 mt-1 flex justify-center text-xl font-semibold text-gray-500 sm:text-2xl'>
          & Life Long Learner
        </p>
      </div>
      <div className='mt-auto'>
        <ScrollDown text={'Who I Am'} nextSectionId={'section-two'} />
      </div>
    </div>
  );
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1 },
    },
  },
};

const Arrow = () => {
  return (
    <motion.svg
      className='z-1'
      initial='hidden'
      animate='visible'
      width='107'
      height='174'
      viewBox='0 0 107 174'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g>
        <motion.path
          stroke-width='3'
          variants={draw}
          d='M36.8605 172C103.241 150.268 0.477446 108.011 76.3894 108.324C152.301 108.637 59.3975 32.5543 3 4'
          stroke='black'
          fill={'none'}
        />
        <motion.path
          variants={draw}
          d='M6.5 15.5L2.5 4L15 2'
          stroke='black'
          stroke-width='3'
        />
      </g>
    </motion.svg>
  );
};
