'use client';
import React, { useEffect } from 'react';
import { Introduction } from '@/components/about/Introduction';

export default function AboutMe() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // @ts-ignore - IntersectionObserverEntry doesn't include a simple way to type target property
          if (entry.isIntersecting) entry.target.style.opacity = 1;
          // @ts-ignore
          if (!entry.isIntersecting) entry.target.style.opacity = 0;
        });
      },
      { threshold: 1 }
    );

    const elements = document.querySelectorAll<HTMLElement>('[data-observe]');
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className='flex h-full w-full flex-col items-center'>
      <Introduction />
    </div>
  );
}
