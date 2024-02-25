'use client';
import React from 'react';
import { Introduction } from '@/components/about/Introduction';

export default function AboutMe() {
  return (
    <div className='flex h-full w-full flex-col items-center'>
      <Introduction />
    </div>
  );
}
