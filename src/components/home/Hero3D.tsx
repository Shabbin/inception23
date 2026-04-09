'use client';

import React, { useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Sparkles, Environment } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { ArrowRight } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const homeContent = {
  slides: [
    {
      id: 'strategy',
      title: {
        en: 'Business & Strategy Advisory',
        bn: 'ব্যবসা এবং কৌশলগত পরামর্শ',
      },
      sub: {
        en: 'Strategic consulting, company registration, and scaling frameworks to guide business growth.',
        bn: 'ব্যবসায়িক বৃদ্ধি নিশ্চিত করতে কৌশলগত পরামর্শ এবং কোম্পানি নিবন্ধন।',
      },
      lottie: '/business.lottie',
    },
    {
      id: 'legal',
      title: {
        en: 'Corporate Legal Support',
        bn: 'কর্পোরেট আইনি সহায়তা',
      },
      sub: {
        en: 'Comprehensive legal assistance, compliance management, and corporate protection.',
        bn: 'সমন্বিত আইনি সহায়তা, কমপ্লায়েন্স ব্যবস্থাপনা এবং কর্পোরেট সুরক্ষা।',
      },
      lottie: '/law.lottie',
    },
    {
      id: 'tech',
      title: {
        en: 'Software & IT Solutions',
        bn: 'সফটওয়্যার এবং আইটি সলিউশন',
      },
      sub: {
        en: 'Dynamic websites, ERPs, apps, and digital platforms built strictly for scale.',
        bn: 'স্কেলিংয়ের জন্য ডিজাইন করা ডাইনামিক ওয়েবসাইট, ইআরপি এবং অ্যাপস।',
      },
      lottie: '/technology.lottie',
    },
  ],
};

const LIGHT_BG = '#f3f8f9';

function SceneLighting({ isLight }: { isLight: boolean }) {
  return (
    <>
      <color attach="background" args={[isLight ? LIGHT_BG : '#181b2c']} />
      <fog attach="fog" args={[isLight ? LIGHT_BG : '#181b2c', 10, 24]} />

      <ambientLight
        intensity={isLight ? 0.82 : 0.65}
        color={isLight ? '#f8fbfc' : '#dbeafe'}
      />
      <hemisphereLight
        intensity={isLight ? 0.9 : 0.75}
        color={isLight ? '#ffffff' : '#dbeafe'}
        groundColor={isLight ? '#dbe5ea' : '#0f172a'}
      />

      <directionalLight
        position={[4, 5, 6]}
        intensity={isLight ? 1.35 : 1.5}
        color="#ffffff"
      />
      <directionalLight
        position={[-5, 2, -4]}
        intensity={isLight ? 0.34 : 0.45}
        color="#3b82f6"
      />
      <pointLight
        position={[2, 0, 6]}
        intensity={isLight ? 0.55 : 1.4}
        color="#14b8a6"
      />
      <pointLight
        position={[-6, 1, 2]}
        intensity={isLight ? 0.4 : 0.8}
        color="#6366f1"
      />
    </>
  );
}

export default function Hero3D() {
  const { activeSlide, setSlide, lang, theme } = useAppStore();

  const isLight = theme === 'light';

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((activeSlide + 1) % 3);
    }, 8000);

    return () => clearInterval(interval);
  }, [activeSlide, setSlide]);

  const current = homeContent.slides[activeSlide];

  return (
    <section
      id="home"
      className={`relative w-full overflow-hidden ${
        isLight ? 'bg-[#f3f8f9]' : 'bg-[rgb(24,27,44)]'
      } min-h-[calc(100svh-84px)] lg:min-h-[calc(100svh-92px)]`}
    >
      <div
        className={`absolute inset-0 z-0 ${
          isLight ? 'bg-[#f3f8f9]' : 'bg-[rgb(24,27,44)]'
        }`}
      >
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 10], fov: 42 }}
          gl={{ antialias: true, alpha: false }}
        >
          <Suspense fallback={null}>
            <SceneLighting isLight={isLight} />

            <Suspense fallback={null}>
              <Environment preset={isLight ? 'studio' : 'city'} />
            </Suspense>

            <Sparkles
              count={isLight ? 18 : 70}
              scale={10}
              size={1.4}
              speed={0.18}
              opacity={isLight ? 0.05 : 0.25}
              color="#94a3b8"
            />

            {!isLight && (
              <Stars
                radius={55}
                depth={26}
                count={900}
                factor={2.2}
                saturation={0}
                fade
                speed={0.2}
              />
            )}
          </Suspense>
        </Canvas>

        <div
          className={`pointer-events-none absolute inset-0 ${
            isLight
              ? 'bg-[linear-gradient(90deg,rgba(243,248,249,0.92)_0%,rgba(243,248,249,0.78)_34%,rgba(243,248,249,0.34)_64%,rgba(243,248,249,0.08)_100%)]'
              : 'bg-[linear-gradient(90deg,rgba(24,27,44,0.98)_0%,rgba(24,27,44,0.84)_36%,rgba(24,27,44,0.34)_64%,rgba(24,27,44,0.12)_100%)]'
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-0 ${
            isLight
              ? 'bg-[radial-gradient(circle_at_72%_42%,rgba(59,130,246,0.08),transparent_28%),radial-gradient(circle_at_80%_28%,rgba(99,102,241,0.08),transparent_24%)]'
              : 'bg-[radial-gradient(circle_at_72%_42%,rgba(45,212,191,0.08),transparent_28%),radial-gradient(circle_at_80%_28%,rgba(56,189,248,0.10),transparent_24%)]'
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-32 ${
            isLight
              ? 'bg-gradient-to-b from-[#f3f8f9] to-transparent'
              : 'bg-gradient-to-b from-[rgba(24,27,44,0.88)] to-transparent'
          }`}
        />
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-44 ${
            isLight
              ? 'bg-gradient-to-t from-[#f3f8f9] to-transparent'
              : 'bg-gradient-to-t from-[rgba(24,27,44,1)] to-transparent'
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto h-full w-full max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid min-h-[calc(100svh-84px)] grid-cols-1 items-center gap-4 pt-4 pb-8 sm:gap-6 sm:pt-6 sm:pb-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-8 md:pt-6 lg:min-h-[calc(100svh-92px)] lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-8 lg:pt-2 lg:pb-12 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          {/* Visual first on mobile, right on desktop */}
          <div className="order-1 min-w-0 self-center md:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.96, y: 14, x: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 10, x: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="pointer-events-none flex w-full items-center justify-center md:justify-end"
              >
                <div className="w-full max-w-[620px] sm:max-w-[760px] md:ml-auto md:max-w-[820px] lg:max-w-[980px] xl:max-w-[1120px] 2xl:max-w-[1240px]">
                  <div
                    className={`w-full ${
                      isLight
                        ? '[filter:drop-shadow(0_20px_34px_rgba(17,28,52,0.12))_contrast(1.06)_saturate(1.05)]'
                        : 'bg-transparent [filter:drop-shadow(0_0_32px_rgba(56,189,248,0.08))]'
                    }`}
                  >
                    <DotLottieReact
                      key={current.lottie}
                      src={current.lottie}
                      loop
                      autoplay
                      style={{
                        width: '100%',
                        height: '100%',
                        background: 'transparent',
                        borderRadius: '0',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Text second on mobile, left on desktop */}
          <div className="order-2 pointer-events-auto flex flex-col justify-center self-center max-w-[760px] md:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
                  },
                  exit: {
                    opacity: 0,
                    transition: {
                      staggerChildren: 0.04,
                      staggerDirection: -1,
                    },
                  },
                }}
              >
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                      transition: { ease: 'easeOut', duration: 0.8 },
                    },
                    exit: { opacity: 0, y: -24, filter: 'blur(4px)' },
                  }}
                  className={`mb-4 block font-serif font-bold tracking-tight ${
                    lang === 'bn'
                      ? isLight
                        ? 'pt-0 text-[2.5rem] leading-[1.16] text-[#111c34] sm:text-[3.1rem] md:pt-2 md:text-5xl lg:text-7xl'
                        : 'pt-0 text-[2.5rem] leading-[1.16] text-white sm:text-[3.1rem] md:pt-2 md:text-5xl lg:text-7xl'
                      : isLight
                        ? 'pt-0 text-[2.7rem] leading-[1.02] text-[#111c34] sm:text-[3.8rem] md:pt-1 md:text-6xl lg:text-8xl'
                        : 'pt-0 text-[2.7rem] leading-[1.02] text-slate-100 sm:text-[3.8rem] md:pt-1 md:text-6xl lg:text-8xl'
                  }`}
                  style={{
                    overflow: 'visible',
                    paddingBottom: '0.08em',
                  }}
                >
                  {lang === 'en' ? current.title.en : current.title.bn}
                </motion.h1>

                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { ease: 'easeOut', duration: 0.8 },
                    },
                    exit: { opacity: 0, y: -18 },
                  }}
                  className={`mb-6 max-w-xl border-l-2 pl-4 sm:pl-5 font-light leading-relaxed ${
                    isLight
                      ? 'border-slate-300 text-base text-slate-700 shadow-[inset_2px_0_0_0_rgba(148,163,184,0.16)] sm:text-lg md:text-xl'
                      : lang === 'bn'
                        ? 'border-brand-400/70 text-base text-slate-200 shadow-[inset_2px_0_0_0_rgba(45,212,191,0.12)] md:text-lg'
                        : 'border-brand-400/70 text-base text-slate-300 shadow-[inset_2px_0_0_0_rgba(45,212,191,0.12)] sm:text-lg md:text-xl'
                  }`}
                >
                  {lang === 'en' ? current.sub.en : current.sub.bn}
                </motion.p>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { ease: 'easeOut', duration: 0.8 },
                    },
                    exit: { opacity: 0, y: -18 },
                  }}
                  className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
                >
                  <button
                    className={`group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-sm px-8 py-3.5 sm:px-10 sm:py-4 text-xs font-bold uppercase tracking-widest transition-all ${
                      isLight
                        ? 'bg-[#111c34] text-white shadow-lg shadow-slate-400/30 hover:bg-[#0d1529]'
                        : 'bg-brand-600 text-white shadow-lg shadow-brand-900/30 hover:bg-brand-500'
                    }`}
                  >
                    <div
                      className={`absolute inset-0 translate-y-[100%] transition-transform duration-300 ease-out group-hover:translate-y-0 ${
                        isLight ? 'bg-[#0d1529]' : 'bg-white/15'
                      }`}
                    />
                    <span className="relative z-10 flex items-center gap-3">
                      {lang === 'en' ? 'Explore' : 'দেখুন'}
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </button>

                  <button
                    className={`group relative inline-flex items-center justify-center overflow-hidden rounded-sm border px-8 py-3.5 sm:px-10 sm:py-4 text-xs font-bold uppercase tracking-widest transition-all ${
                      isLight
                        ? 'border-slate-400 text-[#111c34] hover:border-slate-500'
                        : 'border-white/20 text-white hover:border-brand-400/40'
                    }`}
                  >
                    <div
                      className={`absolute inset-0 translate-y-[100%] transition-transform duration-300 ease-out group-hover:translate-y-0 ${
                        isLight ? 'bg-slate-200/60' : 'bg-white/5'
                      }`}
                    />
                    <span className="relative z-10 block transition-transform duration-300 group-hover:-translate-y-0.5">
                      {lang === 'en' ? 'Insights' : 'অন্তর্দৃষ্টি'}
                    </span>
                  </button>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}