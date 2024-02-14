'use client';
import { useEffect, useRef, useState } from 'react';
import { useIntersects } from '@/app/tracksuit/FitsIn';

export const Techies = () => {
  const [start, setStart] = useState(false);
  const [next, setNext] = useState(false);
  const ref = useRef(null);

  useIntersects(ref, () => setStart(true));

  return (
    <div
      ref={ref}
      className='grid min-h-screen flex-1 grid-cols-[40%_1fr] bg-purple-100 px-8 py-10'
    >
      <CircleProgress />
    </div>
  );
};

const CircleProgress = () => {
  const c1 = useRef<SVGCircleElement | null>(null);
  const c2 = useRef<SVGCircleElement | null>(null);
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    if (!c1.current || !c2.current) return;

    setInterval(() => {
      if (!c1.current) return;
      if (progress < 50) {
        setProgress(progress + 1);
        const c = Math.PI * 40 * 2;
        const percent = ((100 - progress) / 100) * c;

        c1.current.style.strokeDasharray = `${percent} ${c}`;
      }
    }, 20);
  }, [c1, c2, progress]);

  return (
    <div className='relative flex h-96 w-96 items-center justify-center'>
      <p className='absolute z-10 text-5xl font-bold text-purple-500'>50%</p>
      <svg viewBox={'0 0 100 100'} xmlns='http://www.w3.org/2000/svg'>
        <circle
          ref={c1}
          cx={50}
          cy={50}
          r={40}
          fill={'transparent'}
          strokeWidth={12}
          strokeDasharray={'210 999'}
          strokeLinecap={'round'}
          className={'stroke-violet-200'}
        />
        <circle
          ref={c2}
          cx={50}
          cy={50}
          r={34}
          fill={'transparent'}
          strokeWidth={12}
          strokeDasharray={'210 999'}
          strokeLinecap={'round'}
          className={'stroke-purple-800'}
        />
      </svg>
    </div>
  );
};
