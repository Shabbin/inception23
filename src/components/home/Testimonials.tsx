'use client';

import { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote, Sparkles } from 'lucide-react';

export const Testimonials = () => {
  const { lang, theme } = useAppStore();
  const [activeIndex, setActiveIndex] = useState(0);

  const isLight = theme === 'light';

  const testimonials = [
    {
      quote: {
        en: 'Their legal defense strategy during our global restructuring was nothing short of legendary. Absolute precision.',
        bn: 'আমাদের বৈশ্বিক পুনর্গঠনের সময় তাদের আইনি প্রতিরক্ষা কৌশল ছিল অসাধারণ। নিখুঁত নির্ভুলতা।',
      },
      name: 'David Chen',
      role: {
        en: 'Chief Counsel, Titan Energy',
        bn: 'চিফ কাউন্সেল, টাইটান এনার্জি',
      },
      category: {
        en: 'Global Restructuring',
        bn: 'বৈশ্বিক পুনর্গঠন',
      },
      outcome: {
        en: 'Cross-border legal stabilization',
        bn: 'ক্রস-বর্ডার আইনি স্থিতিশীলতা',
      },
    },
    {
      quote: {
        en: 'They brought structure, speed, and confidence into a highly regulated transformation program. The execution quality was exceptional.',
        bn: 'অত্যন্ত নিয়ন্ত্রিত রূপান্তর কর্মসূচিতে তারা কাঠামো, গতি এবং আস্থা নিয়ে এসেছে। বাস্তবায়নের মান ছিল অসাধারণ।',
      },
      name: 'Amira Solberg',
      role: {
        en: 'Transformation Director, NorthAxis Capital',
        bn: 'ট্রান্সফরমেশন ডিরেক্টর, নর্থঅ্যাক্সিস ক্যাপিটাল',
      },
      category: {
        en: 'Regulatory Transformation',
        bn: 'নিয়ন্ত্রক রূপান্তর',
      },
      outcome: {
        en: 'Governance-led modernization',
        bn: 'গভর্নেন্স-নির্ভর আধুনিকায়ন',
      },
    },
    {
      quote: {
        en: 'From strategic assessment to implementation, their team operated with rare clarity. We saw immediate operational lift.',
        bn: 'কৌশলগত মূল্যায়ন থেকে বাস্তবায়ন পর্যন্ত, তাদের দল বিরল স্বচ্ছতার সঙ্গে কাজ করেছে। আমরা তাৎক্ষণিক অপারেশনাল উন্নতি দেখেছি।',
      },
      name: 'Sophia Rahman',
      role: {
        en: 'COO, Meridian Manufacturing Group',
        bn: 'সিওও, মেরিডিয়ান ম্যানুফ্যাকচারিং গ্রুপ',
      },
      category: {
        en: 'Operational Excellence',
        bn: 'অপারেশনাল উৎকর্ষতা',
      },
      outcome: {
        en: 'Immediate efficiency improvement',
        bn: 'তাৎক্ষণিক দক্ষতা উন্নতি',
      },
    },
  ];

  const current = testimonials[activeIndex];

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
      className={`relative overflow-hidden py-24 md:py-32 transition-colors duration-500 ${
        isLight ? 'bg-[#f6f8fc]' : 'bg-[#14001f]'
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full blur-3xl ${
            isLight ? 'bg-brand-500/8' : 'bg-brand-500/10'
          }`}
        />
        <div
          className={`absolute left-[8%] top-[26%] h-72 w-72 rounded-full blur-3xl ${
            isLight ? 'bg-fuchsia-500/6' : 'bg-fuchsia-500/5'
          }`}
        />
        <div
          className={`absolute bottom-[8%] right-[8%] h-80 w-80 rounded-full blur-3xl ${
            isLight ? 'bg-violet-500/6' : 'bg-violet-500/5'
          }`}
        />
        <div
          className={`absolute inset-0 ${
            isLight
              ? 'bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.55),transparent_60%)]'
              : 'bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]'
          }`}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-14 grid grid-cols-1 gap-8 lg:mb-20 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <div
              className={`mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 ${
                isLight ? 'bg-brand-500/8' : 'bg-white/[0.04]'
              }`}
            >
              <Sparkles size={14} className="text-brand-400" />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-brand-400">
                {lang === 'en' ? 'Client Endorsements' : 'ক্লায়েন্ট এনডোর্সমেন্ট'}
              </span>
            </div>

            <h2
              className={`font-serif text-4xl font-bold leading-[0.96] tracking-[-0.03em] md:text-6xl lg:text-7xl ${
                isLight ? 'text-[#111c34]' : 'text-white'
              }`}
            >
              {lang === 'en'
                ? 'Credibility built through discretion, precision, and results.'
                : 'গোপনীয়তা, নির্ভুলতা এবং ফলাফলের মাধ্যমে নির্মিত বিশ্বাসযোগ্যতা।'}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={goPrev}
              className={`group flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
                isLight
                  ? 'bg-white text-[#111c34] shadow-[0_8px_30px_rgba(15,23,42,0.08)] hover:bg-slate-50'
                  : 'bg-white/[0.05] text-white/90 hover:bg-white/[0.1]'
              }`}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>

            <button
              onClick={goNext}
              className={`group flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
                isLight
                  ? 'bg-white text-[#111c34] shadow-[0_8px_30px_rgba(15,23,42,0.08)] hover:bg-slate-50'
                  : 'bg-white/[0.05] text-white/90 hover:bg-white/[0.1]'
              }`}
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        <div
          className={`relative overflow-hidden rounded-[2rem] backdrop-blur-xl md:rounded-[2.5rem] ${
            isLight
              ? 'bg-white/85 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.18)]'
              : 'bg-white/[0.035] shadow-[0_30px_90px_-40px_rgba(0,0,0,0.6)]'
          }`}
        >
          <div
            className={`absolute inset-0 ${
              isLight
                ? 'bg-[linear-gradient(135deg,rgba(255,255,255,0.8),transparent_28%,transparent_72%,rgba(124,58,237,0.06))]'
                : 'bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_28%,transparent_72%,rgba(124,58,237,0.08))]'
            }`}
          />
          <div
            className={`absolute inset-x-0 top-0 h-px ${
              isLight
                ? 'bg-gradient-to-r from-transparent via-slate-200 to-transparent'
                : 'bg-gradient-to-r from-transparent via-white/12 to-transparent'
            }`}
          />

          <div className="relative grid grid-cols-1 gap-8 p-6 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:p-14">
            <div className="min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.32 }}
                >
                  <div className="mb-8 flex items-center gap-4">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                        isLight ? 'bg-brand-500/8 text-brand-600' : 'bg-white/[0.05] text-brand-300'
                      }`}
                    >
                      <Quote size={24} />
                    </div>

                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-400">
                        {lang === 'en' ? current.category.en : current.category.bn}
                      </p>
                      <div className="mt-2 h-px w-20 bg-gradient-to-r from-brand-500 to-transparent" />
                    </div>
                  </div>

                  <blockquote
                    className={`max-w-5xl font-serif text-[2.1rem] leading-[1.02] tracking-[-0.035em] md:text-5xl lg:text-[5rem] ${
                      isLight ? 'text-[#111c34]' : 'text-white'
                    }`}
                  >
                    “{lang === 'en' ? current.quote.en : current.quote.bn}”
                  </blockquote>

                  <div className="mt-10 md:mt-12">
                    <div className={`h-px w-full ${isLight ? 'bg-slate-200' : 'bg-white/8'}`} />
                    <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                      <div>
                        <p
                          className={`text-xl font-bold uppercase tracking-[0.12em] md:text-2xl ${
                            isLight ? 'text-[#111c34]' : 'text-white'
                          }`}
                        >
                          {current.name}
                        </p>
                        <p className={`mt-2 text-sm md:text-base ${isLight ? 'text-brand-700' : 'text-brand-300'}`}>
                          {lang === 'en' ? current.role.en : current.role.bn}
                        </p>
                      </div>

                      <div
                        className={`rounded-2xl px-4 py-3 ${
                          isLight ? 'bg-slate-50' : 'bg-white/[0.04]'
                        }`}
                      >
                        <p
                          className={`text-[10px] font-bold uppercase tracking-[0.22em] ${
                            isLight ? 'text-slate-400' : 'text-white/45'
                          }`}
                        >
                          {lang === 'en' ? 'Outcome' : 'ফলাফল'}
                        </p>
                        <p
                          className={`mt-2 text-sm font-medium ${
                            isLight ? 'text-[#111c34]' : 'text-white/85'
                          }`}
                        >
                          {lang === 'en' ? current.outcome.en : current.outcome.bn}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col justify-between gap-6">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {testimonials.map((item, i) => {
                  const isActive = i === activeIndex;

                  return (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`rounded-[1.5rem] p-4 text-left transition-all duration-300 ${
                        isLight
                          ? isActive
                            ? 'bg-white shadow-[0_18px_40px_-28px_rgba(15,23,42,0.18)]'
                            : 'bg-slate-50/80 hover:bg-white'
                          : isActive
                            ? 'bg-white/[0.08] shadow-[0_20px_40px_-30px_rgba(124,58,237,0.45)]'
                            : 'bg-white/[0.03] hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-400">
                            {lang === 'en' ? item.category.en : item.category.bn}
                          </p>
                          <p
                            className={`mt-3 line-clamp-3 font-serif text-lg leading-tight ${
                              isLight ? 'text-[#111c34]' : 'text-white'
                            }`}
                          >
                            “{lang === 'en' ? item.quote.en : item.quote.bn}”
                          </p>
                        </div>

                        <div
                          className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full transition-all duration-300 ${
                            isActive
                              ? 'bg-brand-500 shadow-[0_0_18px_rgba(124,58,237,0.7)]'
                              : isLight
                                ? 'bg-slate-300'
                                : 'bg-white/18'
                          }`}
                        />
                      </div>

                      <div className="mt-5">
                        <p
                          className={`text-sm font-bold uppercase tracking-[0.12em] ${
                            isLight ? 'text-[#111c34]' : 'text-white'
                          }`}
                        >
                          {item.name}
                        </p>
                        <p
                          className={`mt-1 text-sm ${
                            isLight ? 'text-slate-500' : 'text-white/55'
                          }`}
                        >
                          {lang === 'en' ? item.role.en : item.role.bn}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-2">
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-[0.22em] ${
                      isLight ? 'text-slate-400' : 'text-white/40'
                    }`}
                  >
                    {lang === 'en' ? 'Selected testimonial' : 'নির্বাচিত টেস্টিমোনিয়াল'}
                  </span>
                  <span className={`text-sm ${isLight ? 'text-slate-500' : 'text-white/55'}`}>
                    {String(activeIndex + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                  </span>
                </div>

                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIndex
                          ? 'w-16 bg-brand-500'
                          : isLight
                            ? 'w-8 bg-slate-300 hover:bg-slate-400'
                            : 'w-8 bg-white/12 hover:bg-white/22'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};