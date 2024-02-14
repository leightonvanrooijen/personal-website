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
      className='grid min-h-screen flex-1 grid-cols-[40%_1fr] bg-purple-100 px-8 py-10'
    >
      <div className='mr-10 h-full pt-[30%]'>
        <h2 className='pb-5 text-6xl'>{`Fit's in!`}</h2>
        {start && (
          <TypeAnimation
            sequence={[
              `Thank goodness! But you didn't seriously expect to get hired with just that did you?`,
              () => setNext(true),
            ]}
            wrapper='p'
            speed={60}
            className='pb-3 text-2xl before:text-purple-500 before:content-["Stu:_"]'
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
            className='text-2xl before:text-purple-500 before:content-["Leighton:_"]'
            cursor={false}
          />
        )}
      </div>
      <div className='flex h-full items-center'>
        <div
          style={{
            backgroundImage: 'url(partoftheteam.png)',
            height: '700px',
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
