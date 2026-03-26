'use client';

import dynamic from 'next/dynamic';

const Hero3D = dynamic(() => import('@/components/home/Hero3D'), { 
  ssr: false,
  loading: () => <div className="h-screen w-full bg-white dark:bg-night-950" />
});

export const HeroWrapper = () => {
  return <Hero3D />;
};