'use client';
import {
  FaBrain,
  FaChalkboardTeacher,
  FaFutbol,
  FaHardHat,
} from 'react-icons/fa';
import React, { useEffect } from 'react';
import { Introduction } from '@/components/about/Introduction';
import {
  Challenge,
  MagnifyingGlass,
  Sports,
  Teacher,
  GenericTextSection,
} from '@/components/about/textSections/GenericTextSection';
import { CreatorTextSection } from '@/components/about/textSections/CreatorTextSection';

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
    <div className='flex h-full w-full snap-y snap-mandatory flex-col overflow-scroll scroll-smooth'>
      <div
        id='section-one'
        className='flex h-full shrink-0 snap-start justify-center px-16 py-8 md:py-16'
      >
        <Introduction />
      </div>
      <GenericTextSection
        text={'I am Curious'}
        subText={'Always Learning, Always Growing'}
        sectionId={'section-two'}
        nextSectionId={'section-three'}
        icon={<FaBrain />}
        animation={<MagnifyingGlass />}
      />
      <GenericTextSection
        text={'I am a Mentor'}
        subText={'Bringing Others on the Journey'}
        sectionId={'section-three'}
        nextSectionId={'section-four'}
        icon={<FaChalkboardTeacher className='mt-1' />}
        animation={<Teacher />}
      />
      <GenericTextSection
        text={'Challenge Seeker'}
        subText={'The Kind that Others Shy Away From'}
        sectionId={'section-four'}
        nextSectionId={'section-five'}
        icon={<FaHardHat />}
        animation={<Challenge />}
      />
      <CreatorTextSection
        sectionId={'section-five'}
        nextSectionId={'section-six'}
      />

      <GenericTextSection
        text={'A Sports Player'}
        subText={'Better as a Team'}
        sectionId={'section-six'}
        icon={<FaFutbol />}
        animation={<Sports />}
      />
    </div>
  );
}
