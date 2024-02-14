'use client';
import { TypeAnimation } from 'react-type-animation';
import { RefObject, useEffect, useRef, useState } from 'react';

export const useIntersects = (
  ref: RefObject<HTMLElement>,
  onIntersect: () => void
) => {
  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      { threshold: 0.8 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);
};

export const FitsIn = () => {
  const [start, setStart] = useState(false);
  const [next, setNext] = useState(false);
  const ref = useRef(null);

  useIntersects(ref, () => setStart(true));

  return (
    <div
      ref={ref}
      className='grid h-[calc(100dvh)] flex-1 snap-start bg-purple-100 px-4 py-5 sm:grid-cols-[40%_1fr] md:px-8 md:py-10'
    >
      <div className='mr-10 h-full sm:pt-[30%]'>
        <h2 className='pb-5 text-6xl'>{`Fit's in!`}</h2>
        <div className='mt-5 sm:mt-0'>
          {start && (
            <TypeAnimation
              sequence={[
                `Thank goodness! But you didn't seriously expect to get hired with just that did you?`,
                () => setNext(true),
              ]}
              wrapper='p'
              speed={60}
              className='pb-3 text-xl before:text-purple-500 before:content-["Stu:_"] sm:text-2xl'
              cursor={false}
            />
          )}
          {next && (
            <TypeAnimation
              sequence={[
                500,
                `Uhh... yeah no, good thing I've got a few more tricks up my sleeve `,
              ]}
              wrapper='p'
              speed={60}
              className='mt-[5%] text-xl before:text-purple-500 before:content-["Leighton:_"] sm:mt-0 sm:text-2xl'
              cursor={false}
            />
          )}
        </div>
      </div>
      <div className='mt-auto flex h-fit items-center sm:mt-0 sm:h-full'>
        <div
          className='h-[300px] sm:h-[700px] sm:p-0'
          style={{
            backgroundImage: 'url(partoftheteam.png)',
            width: '100%',
            backgroundSize: 'cover',
            position: 'static',
            borderRadius: 40,
            backgroundPosition: '50%',
          }}
        />
      </div>
    </div>
  );
};
