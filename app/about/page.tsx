'use client';
import {
  FaBrain,
  FaBrush,
  FaChalkboardTeacher,
  FaFutbol,
  FaHardHat,
} from 'react-icons/fa';
import React, { ReactNode, useEffect } from 'react';
import { Introduction } from '@/components/about/Introduction';
import {
  Challenge,
  MagnifyingGlass,
  Sports,
  Teacher,
  TextSection,
} from '@/components/about/TextSection';

export default function AboutMe() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // @ts-ignore - IntersectionObserverEntry doesn't include a simple away to type target property
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
    <div className='flex snap-y snap-mandatory flex-col overflow-scroll scroll-smooth'>
      {/* accounts for the header */}
      <div
        id='section-one'
        className='flex h-full shrink-0 snap-start justify-center px-16 py-12'
      >
        <Introduction />
      </div>
      <TextSection
        text={'I am Curious'}
        subText={'Always Learning, Always Growing'}
        sectionId={'section-two'}
        nextSectionId={'section-three'}
        icon={<FaBrain />}
        animation={<MagnifyingGlass />}
      />
      <TextSection
        text={'I am a Mentor'}
        subText={'Bringing Others on the Journey'}
        sectionId={'section-three'}
        nextSectionId={'section-four'}
        icon={<FaChalkboardTeacher className='mt-1' />}
        animation={<Teacher />}
      />
      <TextSection
        text={'Challenge Seeker'}
        subText={'The Kind that Others Shy Away From'}
        sectionId={'section-four'}
        nextSectionId={'section-five'}
        icon={<FaHardHat />}
        animation={<Challenge />}
      />
      <TextSection
        text={'I am a Creator'}
        subText={'Look Around!'}
        sectionId={'section-five'}
        nextSectionId={'section-six'}
        icon={<FaBrush />}
      />
      <TextSection
        text={'A Sports Player'}
        subText={'Better as a Team'}
        sectionId={'section-six'}
        nextSectionId={'section-seven'}
        icon={<FaFutbol />}
        animation={<Sports />}
      />
    </div>
  );
}
