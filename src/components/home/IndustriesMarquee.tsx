'use client';

import { useAppStore } from '@/lib/store';
import {
  FinTechIllustration,
  PublicSectorIllustration,
  ManufacturingIllustration,
  TechIllustration,
  EnergyIllustration,
  HealthIllustration,
} from '@/components/ui/Illustrations';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Sparkles,
  Globe2,
  BriefcaseBusiness,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

export const IndustriesMarquee = () => {
  const { lang } = useAppStore();

  const industries = [
    {
      name: { en: 'Technology', bn: 'প্রযুক্তি' },
      eyebrow: { en: 'Digital Acceleration', bn: 'ডিজিটাল ত্বরান্বিতকরণ' },
      description: {
        en: 'Advising high-growth technology companies on scale, structure, compliance, and digital expansion.',
        bn: 'দ্রুত-বর্ধনশীল প্রযুক্তি প্রতিষ্ঠানের স্কেল, গঠন, কমপ্লায়েন্স এবং ডিজিটাল সম্প্রসারণে পরামর্শ।',
      },
      icon: TechIllustration,
      accent: 'from-cyan-400/25 via-blue-500/20 to-indigo-500/25',
    },
    {
      name: { en: 'Energy', bn: 'জ্বালানি' },
      eyebrow: { en: 'Infrastructure & Transition', bn: 'ইনফ্রাস্ট্রাকচার ও রূপান্তর' },
      description: {
        en: 'Strategic support for energy transition, regulatory navigation, infrastructure delivery, and risk controls.',
        bn: 'এনার্জি ট্রানজিশন, নিয়ন্ত্রক নেভিগেশন, অবকাঠামো বাস্তবায়ন এবং ঝুঁকি নিয়ন্ত্রণে কৌশলগত সহায়তা।',
      },
      icon: EnergyIllustration,
      accent: 'from-emerald-400/25 via-lime-400/20 to-yellow-400/20',
    },
    {
      name: { en: 'Healthcare', bn: 'স্বাস্থ্যসেবা' },
      eyebrow: { en: 'Critical Systems', bn: 'গুরুত্বপূর্ণ সিস্টেম' },
      description: {
        en: 'Operational, legal, and digital transformation support for providers, health platforms, and regulated care models.',
        bn: 'প্রোভাইডার, হেলথ প্ল্যাটফর্ম এবং নিয়ন্ত্রিত কেয়ার মডেলের জন্য অপারেশনাল, আইনি এবং ডিজিটাল সহায়তা।',
      },
      icon: HealthIllustration,
      accent: 'from-pink-400/25 via-fuchsia-400/20 to-rose-400/20',
    },
    {
      name: { en: 'Financial Services', bn: 'আর্থিক সেবা' },
      eyebrow: { en: 'Governance & Growth', bn: 'গভর্নেন্স ও প্রবৃদ্ধি' },
      description: {
        en: 'Serving banks, fintechs, and investment platforms with compliance, resilience, and transformation strategy.',
        bn: 'ব্যাংক, ফিনটেক এবং ইনভেস্টমেন্ট প্ল্যাটফর্মের জন্য কমপ্লায়েন্স, রেজিলিয়েন্স এবং ট্রান্সফরমেশন কৌশল।',
      },
      icon: FinTechIllustration,
      accent: 'from-violet-400/25 via-purple-500/20 to-indigo-500/25',
    },
    {
      name: { en: 'Public Sector', bn: 'পাবলিক সেক্টর' },
      eyebrow: { en: 'Institutional Modernization', bn: 'প্রাতিষ্ঠানিক আধুনিকায়ন' },
      description: {
        en: 'Supporting public institutions with modernization, legal integrity, procurement systems, and citizen-facing delivery.',
        bn: 'পাবলিক প্রতিষ্ঠানের আধুনিকায়ন, আইনি দৃঢ়তা, ক্রয় ব্যবস্থা এবং সিটিজেন-ফেসিং সেবা উন্নয়নে সহায়তা।',
      },
      icon: PublicSectorIllustration,
      accent: 'from-slate-300/20 via-zinc-400/10 to-violet-400/15',
    },
    {
      name: { en: 'Manufacturing', bn: 'ম্যানুফ্যাকচারিং' },
      eyebrow: { en: 'Operational Excellence', bn: 'অপারেশনাল উৎকর্ষতা' },
      description: {
        en: 'Enhancing industrial performance through supply chain design, plant digitization, and enterprise risk management.',
        bn: 'সাপ্লাই চেইন ডিজাইন, প্ল্যান্ট ডিজিটাইজেশন এবং এন্টারপ্রাইজ রিস্ক ম্যানেজমেন্টের মাধ্যমে শিল্প কর্মক্ষমতা উন্নত করা।',
      },
      icon: ManufacturingIllustration,
      accent: 'from-amber-400/25 via-orange-400/15 to-red-400/15',
    },
  ];

  const capabilityPillars = [
    {
      icon: BriefcaseBusiness,
      title: { en: 'Strategic Advisory', bn: 'কৌশলগত পরামর্শ' },
      text: {
        en: 'Growth, restructuring, market entry, and operational direction.',
        bn: 'প্রবৃদ্ধি, পুনর্গঠন, বাজারে প্রবেশ এবং অপারেশনাল দিকনির্দেশনা।',
      },
    },
    {
      icon: ShieldCheck,
      title: { en: 'Legal & Risk Support', bn: 'আইনি ও ঝুঁকি সহায়তা' },
      text: {
        en: 'Compliance, governance, contracts, and institutional resilience.',
        bn: 'কমপ্লায়েন্স, গভর্নেন্স, চুক্তি এবং প্রাতিষ্ঠানিক স্থিতিশীলতা।',
      },
    },
    {
      icon: Cpu,
      title: { en: 'Technology Enablement', bn: 'প্রযুক্তি সক্ষমতা' },
      text: {
        en: 'Digital transformation, infrastructure, data, and modernization.',
        bn: 'ডিজিটাল রূপান্তর, অবকাঠামো, ডেটা এবং আধুনিকায়ন।',
      },
    },
  ];

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-gray-50 dark:bg-night-950 py-20 md:py-32"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-8%] left-1/2 -translate-x-1/2 h-[30rem] w-[30rem] rounded-full bg-brand-500/8 blur-3xl" />
        <div className="absolute top-[32%] left-[6%] h-64 w-64 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-[8%] right-[8%] h-72 w-72 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.025),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/5 px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-brand-600 dark:text-brand-400" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-400">
              {lang === 'en' ? 'Sectors of Operation' : 'কার্যকরী খাতসমূহ'}
            </span>
          </div>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-950 dark:text-white leading-tight">
            {lang === 'en' ? 'Global Industry Expertise' : 'বৈশ্বিক শিল্প দক্ষতা'}
          </h3>

          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg leading-8 text-gray-600 dark:text-gray-400">
            {lang === 'en'
              ? 'We advise organizations across multiple industries through an integrated model of strategy, legal support, and technology execution—designed for complex institutions, regulated markets, and modern enterprises.'
              : 'আমরা কৌশল, আইনি সহায়তা এবং প্রযুক্তি বাস্তবায়নের সমন্বিত মডেলের মাধ্যমে একাধিক শিল্পখাতে প্রতিষ্ঠানগুলোকে সহায়তা করি—যা জটিল প্রতিষ্ঠান, নিয়ন্ত্রিত বাজার এবং আধুনিক উদ্যোগের জন্য পরিকল্পিত।'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75 }}
          className="mb-8 md:mb-12"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] md:rounded-[2.5rem] border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl shadow-[0_24px_80px_-32px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-violet-500/10 to-emerald-400/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_25%)]" />

            <div className="relative p-5 sm:p-6 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-6 md:gap-8 lg:gap-10 items-start">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-black/5 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] px-4 py-2 mb-5 md:mb-6">
                    <Globe2 className="h-4 w-4 text-brand-700 dark:text-brand-400" />
                    <span className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-brand-900 dark:text-brand-300 font-semibold">
                      {lang === 'en'
                        ? 'Cross-Industry Advisory Platform'
                        : 'বহুখাতভিত্তিক অ্যাডভাইজরি প্ল্যাটফর্ম'}
                    </span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-950 dark:text-white leading-tight">
                    {lang === 'en'
                      ? 'One platform. Multiple industries. Integrated solutions.'
                      : 'একটি প্ল্যাটফর্ম। একাধিক শিল্পখাত। সমন্বিত সমাধান।'}
                  </h4>

                  <p className="mt-4 md:mt-5 max-w-2xl text-[15px] md:text-lg leading-7 md:leading-8 text-gray-600 dark:text-gray-300">
                    {lang === 'en'
                      ? 'Our work is not limited to one sector. We support private enterprises, public institutions, regulated industries, and high-growth organizations with tailored advisory, legal, and digital transformation capabilities.'
                      : 'আমাদের কাজ কোনো একক খাতে সীমাবদ্ধ নয়। আমরা প্রাইভেট এন্টারপ্রাইজ, পাবলিক প্রতিষ্ঠান, নিয়ন্ত্রিত শিল্প এবং দ্রুত-বর্ধনশীল প্রতিষ্ঠানের জন্য কাস্টমাইজড পরামর্শ, আইনি সহায়তা এবং ডিজিটাল রূপান্তর সক্ষমতা প্রদান করি।'}
                  </p>

                  <div className="mt-6 md:mt-8 flex flex-wrap gap-2.5 md:gap-3">
                    <div className="rounded-full border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] px-4 py-2 text-[11px] md:text-xs uppercase tracking-[0.14em] text-gray-700 dark:text-gray-300">
                      {lang === 'en' ? 'Private Sector' : 'প্রাইভেট সেক্টর'}
                    </div>
                    <div className="rounded-full border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] px-4 py-2 text-[11px] md:text-xs uppercase tracking-[0.14em] text-gray-700 dark:text-gray-300">
                      {lang === 'en' ? 'Public Institutions' : 'পাবলিক প্রতিষ্ঠান'}
                    </div>
                    <div className="rounded-full border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] px-4 py-2 text-[11px] md:text-xs uppercase tracking-[0.14em] text-gray-700 dark:text-gray-300">
                      {lang === 'en' ? 'Regulated Markets' : 'নিয়ন্ত্রিত বাজার'}
                    </div>
                    <div className="rounded-full border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] px-4 py-2 text-[11px] md:text-xs uppercase tracking-[0.14em] text-gray-700 dark:text-gray-300">
                      {lang === 'en' ? 'Enterprise Transformation' : 'এন্টারপ্রাইজ ট্রান্সফরমেশন'}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                  {capabilityPillars.map((pillar, index) => (
                    <motion.div
                      key={pillar.title.en}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.45, delay: index * 0.08 }}
                      className="relative overflow-hidden rounded-[1.4rem] md:rounded-[1.6rem] border border-gray-200 dark:border-white/10 bg-white/75 dark:bg-white/[0.05] backdrop-blur-md p-4 md:p-6 shadow-sm"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%)]" />
                      <div className="relative z-10">
                        <div className="mb-4 md:mb-5 flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04]">
                          <pillar.icon className="h-5 w-5 text-brand-700 dark:text-brand-400" />
                        </div>
                        <h5 className="text-base md:text-lg font-semibold text-brand-950 dark:text-white">
                          {lang === 'en' ? pillar.title.en : pillar.title.bn}
                        </h5>
                        <p className="mt-2.5 md:mt-3 text-sm leading-6 md:leading-7 text-gray-600 dark:text-gray-400">
                          {lang === 'en' ? pillar.text.en : pillar.text.bn}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
                {industries.map((industry) => (
                  <div
                    key={industry.name.en}
                    className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/[0.04] px-4 py-4 text-center"
                  >
                    <p className="mb-2 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.16em] text-brand-900 dark:text-brand-300 leading-5 break-words">
                      {lang === 'en' ? industry.eyebrow.en : industry.eyebrow.bn}
                    </p>
                    <p className="font-semibold text-brand-950 dark:text-white text-sm sm:text-[15px] leading-snug">
                      {lang === 'en' ? industry.name.en : industry.name.bn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name.en}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="group"
            >
              <div className="relative h-full overflow-hidden rounded-[1.5rem] md:rounded-[1.75rem] border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] backdrop-blur-xl p-5 sm:p-6 md:p-7 shadow-sm hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1">
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${industry.accent}`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_28%)] opacity-60" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-5 md:mb-7 flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04] shadow-sm group-hover:scale-105 transition-transform duration-500">
                      <industry.icon className="h-9 w-9 md:h-10 md:w-10 drop-shadow-sm" />
                    </div>

                    <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.04] text-brand-950 dark:text-white transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="mb-2.5 md:mb-3 text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-[0.14em] sm:tracking-[0.16em] md:tracking-[0.18em] text-brand-900 dark:text-brand-300 leading-5 break-words">
                    {lang === 'en' ? industry.eyebrow.en : industry.eyebrow.bn}
                  </div>

                  <h5 className="font-serif font-bold text-[1.75rem] sm:text-[1.9rem] md:text-2xl leading-tight text-brand-950 dark:text-white">
                    {lang === 'en' ? industry.name.en : industry.name.bn}
                  </h5>

                  <p className="mt-3 md:mt-4 text-sm leading-6 md:leading-7 text-gray-600 dark:text-gray-400 flex-grow">
                    {lang === 'en' ? industry.description.en : industry.description.bn}
                  </p>

                  <div className="mt-5 md:mt-6 h-[2px] w-10 bg-brand-600 dark:bg-brand-500 transition-all duration-500 group-hover:w-24" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};