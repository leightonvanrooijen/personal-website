import React from 'react';
export const SectionScroll = ({
  text,
  nextSectionId,
}: {
  text?: string;
  nextSectionId: string;
}) => {
  return (
    <div className='flex  flex-col items-center justify-center'>
      <p className='flex text-xl font-bold text-gray-300 sm:text-2xl'>{text}</p>
      <a href={`#${nextSectionId}`}>
        <svg
          width='34'
          height='28'
          viewBox='0 0 34 28'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={`mt-3.5 animate-bounce`}
        >
          <path
            d='M15.8875 27.75L33.775 0H0L15.8875 27.75Z'
            fill='black'
            fillOpacity='0.1'
          />
        </svg>
      </a>
    </div>
  );
};
