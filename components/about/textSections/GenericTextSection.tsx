import React from 'react';
import { SectionScroll } from '@/components/about/SectionScroll';
import { motion } from 'framer-motion';
import { draw } from '@/components/about/drawAnimationVariant';

export const GenericTextSection = ({
  text,
  subText,
  sectionId,
  nextSectionId,
  icon,
  animation,
}: {
  text: string;
  subText: string;
  sectionId: string;
  nextSectionId?: string;
  animation?: React.ReactNode;
  icon: React.ReactNode;
}) => {
  return (
    <div
      id={sectionId}
      className='relative flex h-full w-full shrink-0 snap-start flex-col items-center justify-center py-8 md:py-16'
    >
      <div className='absolute flex h-full w-full items-center justify-center pb-10'>
        {animation}
      </div>
      <div
        style={{ opacity: 0 }}
        className='z-10 flex flex-1 flex-col items-center justify-center transition-opacity delay-300 duration-1000'
        data-observe
      >
        <div className='full mdtext-5xl flex items-center text-center text-4xl font-extrabold'>
          <div className='mr-2 text-pink-500'>{icon}</div>
          <p className='text-gray-800'>{text}</p>
        </div>
        <p className='mt-2  flex justify-center text-sm font-semibold text-gray-400 md:text-xl'>
          {subText}
        </p>
      </div>
      {nextSectionId && (
        <div className='mt-auto'>
          <SectionScroll text='Keep Going!' nextSectionId={nextSectionId} />
        </div>
      )}
      {!nextSectionId && (
        <div className={'right-50 absolute bottom-8 z-50 rotate-180'}>
          <a href={`#section-one`}>
            <svg
              width='34'
              height='28'
              viewBox='0 0 34 28'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={`animate-bounce`}
            >
              <path
                d='M15.8875 27.75L33.775 0H0L15.8875 27.75Z'
                fill='black'
                fillOpacity='0.1'
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};

export const MagnifyingGlass = () => {
  return (
    <motion.svg
      className='z-1 mdh-[500px] mdw-[500px] h-[350px] w-[350px] overflow-hidden text-gray-200 opacity-0'
      initial='hidden'
      whileInView='visible'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      data-observe
    >
      <motion.path
        variants={draw(2, 0.68)}
        stroke={'pink'}
        strokeWidth={0.3}
        fill={'none'}
        d='M22.764 20.476l-4.24-4.24a.81.81 0 0 0-1.144 0l-.218.219-1.465-1.465.192-.193a8.303 8.303 0 1 0-1.092 1.092l.193-.192 1.465 1.465-.219.218a.81.81 0 0 0 0 1.145l4.24 4.238a.808.808 0 0 0 1.143 0l1.145-1.143a.811.811 0 0 0 0-1.144z
        M9.496 16.8a7.241 7.241 0 0 1-5.155-2.137 7.299 7.299 0 1 1 10.775-.505L14.09 15.18a7.274 7.274 0 0 1-4.593 1.62z'
      />
    </motion.svg>
  );
};

export const Teacher = () => {
  return (
    <motion.svg
      className='z-1 mdh-[550px] mdw-[550px] h-[390px] w-[390px] overflow-hidden text-gray-200 opacity-0'
      initial='hidden'
      whileInView='visible'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 32 32'
      xmlSpace='preserve'
      data-observe
    >
      <motion.path
        variants={draw(2, 0.45)}
        stroke={'pink'}
        strokeWidth={0.4}
        fill={'none'}
        d='M30,25v1c0,0.552-0.448,1-1,1H3c-0.552,0-1-0.448-1-1v-1c0-0.552,0.448-1,1-1V8
	c0-1.657,1.343-3,3-3h20c1.657,0,3,1.343,3,3v16C29.552,24,30,24.448,30,25z M4,24h18.511C22.195,23.581,22,23.065,22,22.5
	c0-1.209,0.859-2.218,2-2.45V19.5c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v0.55c1.141,0.232,2,1.24,2,2.45
	c0,0.565-0.195,1.081-0.511,1.5H28V8c0-1.105-0.895-2-2-2H6C4.895,6,4,6.895,4,8V24z M24.5,21c-0.827,0-1.5,0.673-1.5,1.5
	s0.673,1.5,1.5,1.5s1.5-0.673,1.5-1.5S25.327,21,24.5,21z M29,25H3v1h26V25z'
      />
    </motion.svg>
  );
};

export const Challenge = () => {
  return (
    <motion.svg
      className='z-1 mdh-[500px] mdw-[500px] h-[300px] w-[300px] overflow-hidden text-gray-200'
      initial='hidden'
      whileInView='visible'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.path
        variants={draw(3, 1.1)}
        stroke={'pink'}
        strokeWidth={0.6}
        fill={'none'}
        d='M11.1206 1.02129C12.109 1.0067 12.9592 1.54344 13.7096 2.29199L13.7104 2.29285L14.9707 3.5531C15.1118 3.34249 15.2753 3.14257 15.461 2.95679C17.0025 1.4153 19.5018 1.4153 21.0433 2.9568C22.5848 4.49829 22.5848 6.99754 21.0433 8.53904C20.8575 8.72481 20.6576 8.88828 20.447 9.02939L21.7072 10.2896L21.708 10.2905C22.4565 11.0408 22.9932 11.891 22.9787 12.8794C22.9642 13.8602 22.41 14.6797 21.7058 15.3789C21.7054 15.3793 21.7049 15.3798 21.7045 15.3802L20.4287 16.656C19.9519 17.1327 19.3279 17.0824 18.9512 16.9234C18.5783 16.7659 18.1803 16.4041 18.0897 15.8508C18.0262 15.4628 17.8456 15.0914 17.5452 14.791C16.7847 14.0306 15.5518 14.0306 14.7914 14.791C14.0309 15.5515 14.0309 16.7844 14.7914 17.5448C15.0917 17.8452 15.4631 18.0259 15.8511 18.0894C16.4044 18.18 16.7663 18.5779 16.9237 18.9509C17.0827 19.3276 17.1331 19.9516 16.6564 20.4283L15.377 21.7077C15.3766 21.7081 15.3762 21.7085 15.3757 21.709C14.6777 22.412 13.8591 22.965 12.8794 22.9795C11.8922 22.994 11.0429 22.4585 10.2938 21.7112L10.2929 21.7103L9.0295 20.4469C8.88841 20.6575 8.72496 20.8573 8.53922 21.0431C6.99773 22.5846 4.49847 22.5846 2.95698 21.0431C1.41549 19.5016 1.41549 17.0023 2.95698 15.4608C3.14272 15.2751 3.3426 15.1116 3.55317 14.9706L2.29294 13.7103L2.29208 13.7095C1.54353 12.9591 1.00681 12.1089 1.02141 11.1205C1.03589 10.1397 1.59009 9.32029 2.29424 8.62107C2.29469 8.62062 2.29515 8.62017 2.2956 8.61972L3.57165 7.34366C4.0484 6.86691 4.67249 6.9173 5.04916 7.07633C5.4221 7.23378 5.82003 7.59563 5.91062 8.14898C5.97414 8.53701 6.15479 8.90842 6.45519 9.20882C7.21563 9.96926 8.44856 9.96926 9.209 9.20882C9.96945 8.44837 9.96945 7.21545 9.20901 6.455C8.90861 6.1546 8.53719 5.97396 8.14917 5.91043C7.59581 5.81984 7.23397 5.42191 7.07652 5.04897C6.91749 4.6723 6.86709 4.04821 7.34384 3.57146L8.61978 2.29553C8.62025 2.29506 8.62071 2.29459 8.62118 2.29413C9.32039 1.58996 10.1398 1.03576 11.1206 1.02129Z'
      />
    </motion.svg>
  );
};

export const Sports = () => {
  return (
    <motion.svg
      className='z-1 mdh-[500px] mdw-[500px] h-[300px] w-[300px] overflow-hidden text-gray-200'
      initial='hidden'
      whileInView='visible'
      viewBox='0 0 512 512'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.path
        variants={draw(3, 0.35)}
        stroke={'pink'}
        strokeWidth={5}
        fill={'none'}
        d='M290.2 49.04c-15.7.1-32.3 13.83-38 35.81-6.5 25.15 4.7 47.85 22.1 52.35 17.4 4.5 38.2-9.9 44.7-35 6.5-25.16-4.6-47.82-22.1-52.33-2.2-.56-4.4-.84-6.7-.83zM89.04 68.3L77.5 87.31c32.4 15.99 63.1 33.49 96.4 46.49 9.5-3.8 18.8-7.8 28-12-40.2-15.4-76.7-33.69-112.86-53.5zm148.06 56.1c-47.8 25.4-97.9 41.6-153.64 61.1l8.08 16.4c51.96-16.1 111.26-32.9 161.16-56-6.9-5.5-12.1-12.9-15.6-21.5zm30.3 34.8c-22.5 10.8-46.8 20.2-71.4 28.7-20.3 45.6-27.7 94.9-36.8 140.1l-2.1 10.5-101.02-39.4-16.03 25.4 130.25 60.7c1-1.4 1.7-2.5 2.9-4.5 3.9-6.7 9.2-16.6 15.2-28.6 11.9-23.8 26.7-55.9 40.4-88.1 13.8-32.1 26.4-64.4 33.9-88.4 1.9-6.1 3.5-11.6 4.7-16.4zm-31.9 134.6c-5.5 12.5-11.1 24.8-16.5 36.3 25 37.4 57 79 94.9 109.2l23.3-17.6c-35.8-39.7-72.9-84.3-101.7-127.9zM423.9 367a48 48 0 0 0-48 48 48 48 0 0 0 48 48 48 48 0 0 0 48-48 48 48 0 0 0-48-48z'
      />
    </motion.svg>
  );
};
