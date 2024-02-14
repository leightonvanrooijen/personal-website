'use client';
import { useEffect, useRef, useState } from 'react';
import { useIntersects } from '@/app/tracksuit/FitsIn';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export const Techies = () => {
  const [start, setStart] = useState(false);
  const [next, setNext] = useState(false);
  const ref = useRef(null);

  useIntersects(ref, () => setStart(true));

  return (
    <div
      ref={ref}
      className='flex min-h-screen flex-1 flex-col  bg-purple-100 px-8 py-10'
    >
      <h2 className='pt-5 text-6xl'>{`Curious`}</h2>
      <div className='flex w-full items-center pt-[10%]'>
        <p className='pt-5 text-4xl'>{`I wonder how they did that?`}</p>
        <div className='flex flex-1 items-center justify-center'>
          <FaArrowRight
            className=' mt-5 animate-bounce text-purple-300'
            size={40}
          />
          <CircleProgress />
          <FaArrowLeft
            className='mt-5 animate-bounce text-purple-300'
            size={40}
          />
        </div>
      </div>
    </div>
  );
};

const CircleProgress = () => {
  const [inView, setInView] = useState(false);
  const [begin, setBegin] = useState(false);

  const percentage = 0.75;
  const pageRef = useRef<null | HTMLDivElement>(null);
  const outerProgress = useRef<null | SVGCircleElement>(null);
  const innerProgress = useRef<null | SVGCircleElement>(null);
  const percentageRef = useRef<null | HTMLParagraphElement>(null);

  useIntersects(pageRef, () => setInView(true));

  // lets not talk about this haha
  useEffect(() => {
    if (!begin) return;
    if (
      !innerProgress.current ||
      !outerProgress.current ||
      !percentageRef.current
    )
      return;

    const outerCircle = outerProgress.current;
    const outerCircleRadius = outerCircle.r.baseVal.value;

    const outerCircleCircumference = outerCircleRadius * 2 * Math.PI;

    const innerCircle = innerProgress.current;
    const radius = innerCircle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const percentageAround = circumference * percentage;

    outerCircle.style.strokeDasharray = `${outerCircleCircumference} ${outerCircleCircumference}`;
    innerCircle.style.strokeDasharray = `${percentageAround} ${circumference}`;
  }, [begin]);

  useEffect(() => {
    if (!begin) return;
    if (!percentageRef.current) return;

    const percentageElement = percentageRef.current;
    const percentageValue = percentage * 100;
    let currentPercentage = 0;

    const interval = setInterval(() => {
      if (currentPercentage >= percentageValue) {
        clearInterval(interval);
      } else {
        currentPercentage + 2 > percentageValue
          ? (currentPercentage += 1)
          : (currentPercentage += 2);
        percentageElement.textContent = `${currentPercentage}%`;
      }
    }, 20);

    return () => clearInterval(interval);
  }, [begin]);

  useEffect(() => {
    if (!inView) return;
    setTimeout(() => {
      setBegin(true);
    }, 1000);
  }, [inView]);

  return (
    <div
      className='relative flex w-fit items-center justify-center'
      ref={pageRef}
    >
      <div className='absolute flex h-full w-full items-center justify-center '>
        <p ref={percentageRef} className='text-5xl font-bold text-green-700'>
          0%
        </p>
      </div>
      <div style={{ transform: 'rotate(50deg)' }}>
        <svg viewBox='0 0 100 100' width='300' height='300' data-percent='89'>
          <circle
            className='fill-none stroke-green-500 stroke-[12] transition-all duration-1000 ease-in-out'
            cx='50'
            cy='50'
            r='40'
            ref={outerProgress}
            style={{
              strokeDasharray: '40 999',
              strokeLinecap: 'round',
            }}
          />
          <circle
            ref={innerProgress}
            className='stroke-dash fill-none stroke-green-700 stroke-[12] transition-all duration-1000 ease-in-out'
            cx='50'
            cy='50'
            r='32'
            style={{
              strokeDasharray: '20 999',
              strokeLinecap: 'round',
            }}
          />
        </svg>
      </div>
    </div>
  );
};
