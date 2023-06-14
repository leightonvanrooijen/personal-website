import { FaBrush } from 'react-icons/fa';
import { ScrollDown } from '@/components/about/ScrollDown';
import { motion, Variants } from 'framer-motion';
import React from 'react';
import { draw } from '@/components/about/textSections/GenericTextSection';

export const beamUp: Variants = {
  hidden: {
    bottom: '20%',
  },
  visible: {
    bottom: '50%',
    transition: {
      delay: 1.45,
      duration: 1.45,
      ease: 'easeInOut',
    },
  },
};
export const CreatorTextSection = ({
  sectionId,
  nextSectionId,
}: {
  sectionId: string;
  nextSectionId: string;
}) => {
  return (
    <div className='flex h-full w-full shrink-0 snap-start items-center'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        id={sectionId}
        className='relative mt-[5%] flex h-[95%] w-full shrink-0 snap-start flex-col items-center justify-center overflow-hidden py-8 transition-all delay-300 duration-[2000ms] md:py-16'
      >
        <motion.div className='flex h-full w-[500px] items-center justify-center pb-10'>
          <Ship />
        </motion.div>
        <motion.div variants={beamUp} className='absolute z-10' data-observe>
          <div className='full mdtext-5xl flex items-center text-center text-4xl font-extrabold'>
            <div className='mr-2 text-pink-500'>
              <FaBrush />
            </div>
            <p className='text-gray-800'>I am a Creator</p>
          </div>
          <p className='mdtext-xl mt-2 flex justify-center text-sm font-semibold text-gray-400'>
            Look Around!
          </p>
        </motion.div>
        <div className='mt-auto'>
          <ScrollDown text='Keep Going!' nextSectionId={nextSectionId} />
        </div>
      </motion.div>
    </div>
  );
};

export const Ship = () => {
  return (
    <motion.svg
      className='z-1 h-full  rotate-90 overflow-hidden text-gray-200 '
      strokeMiterlimit='10'
      viewBox='145.842 148.046 499.211 300.21'
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
    >
      <motion.path
        d='M309.577 381.741C309.577 381.741 312.847 391.614 310.745 402.193C305.207 430.053 287.611 471.677 263.698 417.219C263.698 417.219 229.382 409.58 252.166 393.553C252.166 393.553 223.656 407.391 243.789 369.906C243.789 369.906 204.49 405.366 206.264 347.234C206.264 347.234 249.038 312.594 219.17 252.178C219.17 252.178 195.652 223.551 234.985 205.724C234.985 205.724 232.249 188.875 236.4 178.749C241.275 166.86 243.868 167.687 249.401 165.375C254.049 163.433 265.784 166.133 273.961 175.58C277.448 179.608 275.149 184.631 279.774 191.424C279.774 191.424 341.8 209.817 307.22 260.822C307.22 260.822 348.167 273.856 320.535 332.843C320.535 332.843 338.71 369.365 309.577 381.741Z'
        fill='none'
        opacity='1'
        stroke='pink'
        strokeWidth='8.90074'
      />
      <motion.path
        d='M209.878 352.871C209.878 352.871 145.171 340.527 150.618 295.789C156.065 251.052 215.239 245.519 215.239 245.519'
        fill='none'
        opacity='1'
        stroke='pink'
        strokeWidth='8.90074'
      />
      <motion.path
        d='M221.638 325.711C221.638 325.711 186.3 318.435 190.656 300.874C191.916 295.796 196.494 289.859 206.206 282.988C215.239 276.598 217.737 277.147 224.799 273.91'
        fill='none'
        opacity='1'
        stroke='pink'
        strokeWidth='8.90074'
      />
      <motion.path
        d='M187.36 302.251C186.497 302.558 185.664 302.411 184.765 302.441C182.732 302.509 181.196 303.525 179.209 303.53C178.217 303.532 177.186 303.262 176.194 303.406C175.149 303.558 175.725 305.068 175.518 305.846C175.233 306.914 173.411 308.703 172.432 309.104C169.623 310.257 165.561 308.181 165.553 304.953C165.543 300.955 173.258 298.355 174.461 302.44C175.497 305.96 169.227 308.472 167.546 305.131C166.35 302.754 172.595 301.683 173.283 303.361C173.921 304.915 170.893 306.739 169.749 305.467C168.771 304.379 171.046 302.182 172.208 303.049C173.163 303.762 170.977 307.037 170.066 306.357C169 305.562 170.306 302.807 170.848 304.651C170.97 305.066 170.973 305.507 171.035 305.936'
        fill='none'
        opacity='1'
        stroke='pink'
        strokeWidth='3.19196'
      />
      <motion.path
        d='M216.86 309.943L211.067 310.343L216.86 309.943Z'
        fill='none'
        opacity='1'
        stroke='pink'
        strokeWidth='3.19196'
      />
      <motion.path
        d='M217.263 293.949'
        fill='none'
        opacity='1'
        stroke='pink'
        stroke-linecap='butt'
        stroke-linejoin='round'
        strokeWidth='3.19196'
      />
      <motion.path
        d='M217.226 295.188L209.011 296.498'
        fill='none'
        opacity='1'
        stroke='pink'
        stroke-linecap='butt'
        stroke-linejoin='round'
        strokeWidth='3.19196'
      />
      <motion.path
        variants={draw(1.5)}
        d='M330.112 245.519C330.112 245.519 610.376 139.418 643.457 150.446'
        fill='none'
        stroke='pink'
        strokeWidth='3.19196'
      />
      <motion.path
        variants={draw(1.5)}
        d='M330.112 339.745C330.112 339.745 622.016 454.917 637.331 443.278'
        fill='none'
        opacity='1'
        stroke='pink'
        stroke-linecap='butt'
        stroke-linejoin='round'
        strokeWidth='3.19196'
      />
    </motion.svg>
  );
};
