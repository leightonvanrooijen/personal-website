'use client'; // TODO change animation tactic to allow for SSR
import Image from 'next/image';
import image from '@/public/aboutme.png';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import { draw } from '@/components/about/drawAnimationVariant';

export const Introduction = () => {
  return (
    <div
      id='section-one'
      className='flex h-full w-full max-w-screen-md shrink-0 snap-start flex-col justify-center py-8 md:py-16'
    >
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
        <SocialMediaLinks />
      </div>
    </div>
  );
};

const SocialMediaLinks = () => {
  return (
    <div
      className={
        'mt-auto flex w-full items-center justify-center space-x-4 text-4xl text-gray-700 md:pb-16'
      }
    >
      <a
        href={'https://www.instagram.com/leighton_van_rooijen/'}
        target='_blank'
        className='hover:text-gray-500'
      >
        <FaInstagram />
      </a>
      <a
        href={'https://www.linkedin.com/in/leightonvanrooijen'}
        target='_blank'
        className='hover:text-gray-500'
      >
        <FaLinkedin />
      </a>
      <a
        href={'https://www.github.com/leightonvanrooijen'}
        target='_blank'
        className='hover:animate-bounce hover:text-gray-500'
      >
        <FaGithub />
      </a>
    </div>
  );
};

const Arrow = () => {
  return (
    <motion.svg
      initial='hidden'
      animate='visible'
      width='107'
      height='174'
      viewBox='0 0 107 174'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.g>
        <motion.path
          strokeWidth='3'
          variants={draw(1.5, 1, 0)}
          d='M36.8605 172C103.241 150.268 0.477446 108.011 76.3894 108.324C152.301 108.637 59.3975 32.5543 3 4'
          stroke='black'
        />
        <motion.path
          variants={draw(1.5, 1, 0)}
          d='M6.5 15.5L2.5 4L15 2'
          stroke='black'
          strokeWidth='3'
        />
      </motion.g>
    </motion.svg>
  );
};
