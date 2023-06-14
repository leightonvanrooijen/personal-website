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
    <div className='flex h-full w-full flex-col'>
      <div
        id='section-one'
        className='flex h-full shrink-0 snap-start justify-center px-16 py-8 md:py-16'
      >
        <Introduction />
      </div>
      <GenericTextSection
        text={'I am curious'}
        subText={'Always learning, always growing'}
        sectionId={'section-two'}
        nextSectionId={'section-three'}
        icon={<FaBrain />}
        animation={<MagnifyingGlass />}
      />
      <GenericTextSection
        text={'I am a mentor'}
        subText={'Bringing others on the journey'}
        sectionId={'section-three'}
        nextSectionId={'section-four'}
        icon={<FaChalkboardTeacher className='mt-1' />}
        animation={<Teacher />}
      />
      <CreatorTextSection
        sectionId={'section-four'}
        nextSectionId={'section-five'}
      />
      <GenericTextSection
        text={'Challenge seeker'}
        subText={'No problem too tough'}
        sectionId={'section-five'}
        nextSectionId={'section-six'}
        icon={<FaHardHat />}
        animation={<Challenge />}
      />
      <GenericTextSection
        text={'A sports player'}
        subText={'Better as a team'}
        sectionId={'section-six'}
        icon={<FaFutbol />}
        animation={<Sports />}
      />
    </div>
  );
}
