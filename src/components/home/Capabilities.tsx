'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import {
  ArrowRight,
  TrendingUp,
  Scale,
  Cpu,
  Target,
  Briefcase,
  Zap,
  PieChart,
  ShieldCheck,
  FileCheck,
  Building2,
  Gavel,
  Cloud,
  Lock,
  Database,
  Activity,
  Glasses,
  Compass,
} from 'lucide-react';
import { RichIcon } from '@/components/ui/RichIcon';

export const Capabilities = () => {
  const { lang } = useAppStore();
  const [activeTab, setActiveTab] = useState(0);

  const data = [
    {
      id: 'business',
      label: { en: 'Business Advisory', bn: 'ব্যবসায়িক পরামর্শ' },
      eyebrow: { en: 'Strategic Growth', bn: 'কৌশলগত প্রবৃদ্ধি' },
      summary: {
        en: 'Boardroom-grade strategy, expansion planning, and operational acceleration for ambitious enterprises.',
        bn: 'উদ্যোগের জন্য বোর্ডরুম-মানের কৌশল, সম্প্রসারণ পরিকল্পনা এবং অপারেশনাল উন্নয়ন।',
      },
      icon: TrendingUp,
      color: 'from-[#F43F5E] via-[#FB923C] to-[#FACC15]',
      ring: 'from-rose-500/30 via-orange-400/20 to-yellow-400/30',
      services: [
        {
          icon: Target,
          theme: 'rose',
          title: { en: 'Corporate Strategy', bn: 'কর্পোরেট কৌশল' },
          desc: {
            en: 'Defining the path to sustainable growth.',
            bn: 'টেকসই প্রবৃদ্ধি এবং প্রতিযোগিতামূলক সুবিধার পথ নির্ধারণ।',
          },
        },
        {
          icon: Briefcase,
          theme: 'amber',
          title: { en: 'M&A Advisory', bn: 'একত্রীকরণ ও অধিগ্রহণ' },
          desc: {
            en: 'End-to-end deal advisory & valuation.',
            bn: 'চুক্তি পরামর্শ এবং মূল্যায়ন।',
          },
        },
        {
          icon: Zap,
          theme: 'emerald',
          title: { en: 'Operational Scale', bn: 'অপারেশনাল শ্রেষ্ঠত্ব' },
          desc: {
            en: 'Optimizing processes for efficiency.',
            bn: 'সর্বাধিক দক্ষতা এবং খরচ কমানোর জন্য প্রক্রিয়া অপ্টিমাইজ করা।',
          },
        },
        {
          icon: PieChart,
          theme: 'blue',
          title: { en: 'Financial Restructuring', bn: 'আর্থিক পুনর্গঠন' },
          desc: {
            en: 'Navigating distress & unlocking value.',
            bn: 'মূল্য আনলক করা এবং তারল্য ব্যবস্থাপনা।',
          },
        },
        {
          icon: Compass,
          theme: 'purple',
          title: { en: 'Market Entry', bn: 'বাজার প্রবেশ' },
          desc: {
            en: 'Global expansion and localization strategies.',
            bn: 'বৈশ্বিক সম্প্রসারণ এবং স্থানীয়করণ কৌশল।',
          },
        },
        {
          icon: Glasses,
          theme: 'cyan',
          title: { en: 'Executive Coaching', bn: 'নির্বাহী কোচিং' },
          desc: {
            en: 'C-suite development and leadership focus.',
            bn: 'সি-স্যুট উন্নয়ন এবং নেতৃত্বের ফোকাস।',
          },
        },
      ],
    },
    {
      id: 'legal',
      label: { en: 'Legal Support', bn: 'আইনি সহায়তা' },
      eyebrow: { en: 'Protection & Governance', bn: 'সুরক্ষা ও গভর্নেন্স' },
      summary: {
        en: 'Cross-border legal clarity, risk containment, and regulatory confidence for modern organizations.',
        bn: 'আধুনিক প্রতিষ্ঠানের জন্য সীমান্তপারের আইনি স্বচ্ছতা, ঝুঁকি নিয়ন্ত্রণ এবং নিয়ন্ত্রক নিশ্চয়তা।',
      },
      icon: Scale,
      color: 'from-[#6366f1] via-[#8b5cf6] to-[#d946ef]',
      ring: 'from-indigo-500/30 via-violet-400/20 to-fuchsia-400/30',
      services: [
        {
          icon: ShieldCheck,
          theme: 'blue',
          title: { en: 'Regulatory Compliance', bn: 'নিয়ন্ত্রক সম্মতি' },
          desc: {
            en: 'Frameworks for global regulations.',
            bn: 'জটিল বৈশ্বিক নিয়মাবলী নেভিগেট করার জন্য ফ্রেমওয়ার্ক।',
          },
        },
        {
          icon: FileCheck,
          theme: 'purple',
          title: { en: 'Intellectual Property', bn: 'মেধা সম্পত্তি' },
          desc: {
            en: 'Protecting patents & trademarks.',
            bn: 'বিশ্বব্যাপী পেটেন্ট, ট্রেডমার্ক এবং সম্পদ রক্ষা করা।',
          },
        },
        {
          icon: Building2,
          theme: 'cyan',
          title: { en: 'Corporate Law', bn: 'কর্পোরেট আইন' },
          desc: {
            en: 'Governance & entity management.',
            bn: 'বহুজাতিকদের জন্য শাসন, গঠন এবং সত্তা ব্যবস্থাপনা।',
          },
        },
        {
          icon: Gavel,
          theme: 'rose',
          title: { en: 'Dispute Resolution', bn: 'বিরোধ নিষ্পত্তি' },
          desc: {
            en: 'Litigation support & arbitration.',
            bn: 'উচ্চ-ঝুঁকির মামলা সমর্থন এবং সালিসি সেবা।',
          },
        },
        {
          icon: Lock,
          theme: 'amber',
          title: { en: 'Contract Integrity', bn: 'চুক্তি সততা' },
          desc: {
            en: 'Iron-clad vendor and partnership agreements.',
            bn: 'ভেন্ডর এবং অংশীদারি চুক্তি সুরক্ষিত করা।',
          },
        },
        {
          icon: Target,
          theme: 'emerald',
          title: { en: 'Risk Mitigation', bn: 'ঝুঁকি প্রশমন' },
          desc: {
            en: 'Preemptive legal risk assessments.',
            bn: 'আগাম আইনি ঝুঁকি মূল্যায়ন।',
          },
        },
      ],
    },
    {
      id: 'it',
      label: { en: 'IT Solutions', bn: 'তথ্য প্রযুক্তি সমাধান' },
      eyebrow: { en: 'Digital Infrastructure', bn: 'ডিজিটাল অবকাঠামো' },
      summary: {
        en: 'Secure, intelligent, and scalable technology architectures built for resilience and enterprise speed.',
        bn: 'স্থিতিশীলতা ও এন্টারপ্রাইজ গতির জন্য নিরাপদ, বুদ্ধিমান এবং স্কেলেবল প্রযুক্তি অবকাঠামো।',
      },
      icon: Cpu,
      color: 'from-[#06b6d4] via-[#3b82f6] to-[#10b981]',
      ring: 'from-cyan-400/30 via-blue-500/20 to-emerald-400/30',
      services: [
        {
          icon: Cloud,
          theme: 'cyan',
          title: { en: 'Cloud Infrastructure', bn: 'ক্লাউড অবকাঠামো' },
          desc: {
            en: 'Secure hybrid cloud modernization.',
            bn: 'স্কেলেবল, নিরাপদ, এবং হাইব্রিড ক্লাউড আর্কিটেকচার।',
          },
        },
        {
          icon: Lock,
          theme: 'emerald',
          title: { en: 'Cyber Security', bn: 'সাইবার নিরাপত্তা' },
          desc: {
            en: 'Zero-trust security models.',
            bn: 'জিরো-ট্রাস্ট সিকিউরিটি মডেল এবং হুমকি পর্যবেক্ষণ।',
          },
        },
        {
          icon: Database,
          theme: 'purple',
          title: { en: 'Data & AI Analytics', bn: 'ডেটা ও এআই অ্যানালিটিক্স' },
          desc: {
            en: 'Predictive insights via ML.',
            bn: 'উন্নত এমএল ব্যবহার করে ডেটাকে ইনসাইটে রূপান্তর করা।',
          },
        },
        {
          icon: Activity,
          theme: 'rose',
          title: { en: 'Digital Transformation', bn: 'ডিজিটাল রূপান্তর' },
          desc: {
            en: 'Automating workflows for agility.',
            bn: 'তৎপরতা এবং উদ্ভাবন চালানোর জন্য কর্মপ্রবাহ স্বয়ংক্রিয় করা।',
          },
        },
        {
          icon: Zap,
          theme: 'amber',
          title: { en: 'Edge Computing', bn: 'এজ কম্পিউটিং' },
          desc: {
            en: 'Ultra-low latency edge network solutions.',
            bn: 'অতি-স্বল্প লেটেন্সি এজ নেটওয়ার্ক সমাধান।',
          },
        },
        {
          icon: ShieldCheck,
          theme: 'blue',
          title: { en: 'Disaster Recovery', bn: 'বিপর্যয় পুনরুদ্ধার' },
          desc: {
            en: 'Military-grade backup and node restorations.',
            bn: 'মিলিটারি-গ্রেড ব্যাকআপ এবং রিস্টোর।',
          },
        },
      ],
    },
  ];

  const getBgColor = (theme: string) => {
    const bgMap: Record<string, string> = {
      rose: 'bg-rose-50/50 hover:bg-rose-50 dark:bg-rose-950/20 dark:hover:bg-rose-900/30 border-rose-100 dark:border-rose-900/30',
      blue: 'bg-blue-50/50 hover:bg-blue-50 dark:bg-blue-950/20 dark:hover:bg-blue-900/30 border-blue-100 dark:border-blue-900/30',
      emerald:
        'bg-emerald-50/50 hover:bg-emerald-50 dark:bg-emerald-950/20 dark:hover:bg-emerald-900/30 border-emerald-100 dark:border-emerald-900/30',
      purple:
        'bg-purple-50/50 hover:bg-purple-50 dark:bg-purple-950/20 dark:hover:bg-purple-900/30 border-purple-100 dark:border-purple-900/30',
      amber:
        'bg-amber-50/50 hover:bg-amber-50 dark:bg-amber-950/20 dark:hover:bg-amber-900/30 border-amber-100 dark:border-amber-900/30',
      cyan: 'bg-cyan-50/50 hover:bg-cyan-50 dark:bg-cyan-950/20 dark:hover:bg-cyan-900/30 border-cyan-100 dark:border-cyan-900/30',
    };
    return bgMap[theme] || bgMap.blue;
  };

  const active = data[activeTab];

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-white dark:bg-night-950 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-brand-500/5 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, type: 'spring' }}
        suppressHydrationWarning
        className="container mx-auto px-6 relative z-10"
      >
        <div suppressHydrationWarning className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400 mb-4">
            {lang === 'en' ? 'Our Capabilities' : 'আমাদের সক্ষমতা'}
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-6 text-brand-950 dark:text-white">
            {lang === 'en' ? 'Enterprise Solutions' : 'এন্টারপ্রাইজ সমাধান'}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            {lang === 'en'
              ? 'Comprehensive, evidence-based solutions designed for the complex needs of modern enterprises, meticulously grouped into tri-pillar architectures.'
              : 'আধুনিক উদ্যোগের জটিল প্রয়োজনের জন্য ডিজাইন করা ব্যাপক সমাধান।'}
          </p>
        </div>

        {/* Mobile only premium tabs */}
        <div className="md:hidden max-w-5xl mx-auto mb-10">
          <div className="relative rounded-[2rem] border border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur-xl shadow-[0_20px_80px_-30px_rgba(0,0,0,0.45)] overflow-hidden">
            <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${active.ring}`} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_35%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%)]" />
            <div
              className={`absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-3xl bg-gradient-to-r ${active.ring}`}
            />

            <div className="relative p-4">
              <div className="space-y-4">
                <div className="rounded-[1.6rem] border border-black/5 dark:border-white/10 bg-white/80 dark:bg-night-900/60 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]">
                  <div className="grid grid-cols-1 gap-2">
                    {data.map((tab, i) => {
                      const isActive = activeTab === i;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(i)}
                          className="relative rounded-[1.25rem] px-4 py-4 text-left overflow-hidden transition-all duration-300 group"
                        >
                          {isActive && (
                            <motion.div
                              layoutId="mobileCapabilitiesTab"
                              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                              className={`absolute inset-0 rounded-[1.25rem] bg-gradient-to-br ${tab.color} shadow-[0_18px_40px_-18px_rgba(0,0,0,0.55)]`}
                            />
                          )}

                          <div
                            className={`absolute inset-0 rounded-[1.25rem] border ${
                              isActive
                                ? 'border-white/20'
                                : 'border-black/5 dark:border-white/8 bg-black/[0.015] dark:bg-white/[0.02]'
                            }`}
                          />

                          <div className="relative z-10 flex items-start gap-3">
                            <div
                              className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${
                                isActive
                                  ? 'border-white/20 bg-white/15 text-white'
                                  : 'border-black/5 dark:border-white/10 bg-white dark:bg-white/5 text-brand-950 dark:text-white'
                              }`}
                            >
                              <tab.icon size={18} />
                            </div>

                            <div className="min-w-0">
                              <div
                                className={`text-[10px] uppercase tracking-[0.24em] ${
                                  isActive ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
                                }`}
                              >
                                {lang === 'en' ? tab.eyebrow.en : tab.eyebrow.bn}
                              </div>
                              <div
                                className={`mt-1 text-sm font-semibold leading-snug ${
                                  isActive ? 'text-white' : 'text-brand-950 dark:text-white'
                                }`}
                              >
                                {lang === 'en' ? tab.label.en : tab.label.bn}
                              </div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                    className="relative rounded-[1.6rem] overflow-hidden border border-black/5 dark:border-white/10 bg-brand-950 dark:bg-night-900 p-6 text-white"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${active.color} opacity-20`} />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_28%)]" />

                    <div className="relative z-10 h-full flex flex-col justify-between min-h-[210px]">
                      <div>
                        <div className="flex items-center gap-3 mb-5">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md">
                            <active.icon size={22} />
                          </div>
                          <div>
                            <p className="text-[11px] uppercase tracking-[0.28em] text-white/60">
                              {lang === 'en' ? active.eyebrow.en : active.eyebrow.bn}
                            </p>
                            <h4 className="text-2xl font-serif font-bold text-white">
                              {lang === 'en' ? active.label.en : active.label.bn}
                            </h4>
                          </div>
                        </div>

                        <p className="text-sm leading-7 text-white/78">
                          {lang === 'en' ? active.summary.en : active.summary.bn}
                        </p>
                      </div>

                      <div className="mt-8 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/50">
                          <span className="inline-block h-2 w-2 rounded-full bg-white/70" />
                          {lang === 'en' ? 'Premium Service Cluster' : 'প্রিমিয়াম সার্ভিস ক্লাস্টার'}
                        </div>

                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/85">
                          <span>{active.services.length}</span>
                          <span>{lang === 'en' ? 'Core Services' : 'মূল সেবা'}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop original tabs */}
        <div className="hidden md:flex justify-center mb-16 md:mb-20">
          <div className="inline-flex p-1.5 md:p-2 bg-gray-50 dark:bg-night-900/50 rounded-full border border-gray-200 dark:border-white/10 shadow-sm relative w-full md:w-auto overflow-x-auto no-scrollbar">
            {data.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`relative whitespace-nowrap px-6 md:px-8 py-3 w-full md:w-auto rounded-full text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-500 z-10 flex items-center justify-center gap-2 md:gap-3 ${
                  activeTab === i
                    ? 'text-white shadow-md'
                    : 'text-gray-500 dark:text-gray-400 hover:text-brand-700 dark:hover:text-white'
                }`}
              >
                {activeTab === i && (
                  <motion.div
                    layoutId="activeTabCapabilities"
                    className="absolute inset-0 rounded-full bg-brand-950 dark:bg-brand-600 shadow-md"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <tab.icon
                    size={16}
                    className={activeTab === i ? 'hidden md:block' : 'hidden md:block opacity-50'}
                  />
                  {lang === 'en' ? tab.label.en : tab.label.bn}
                </span>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {data[activeTab].services.map((service, i) => (
              <div
                key={i}
                className={`group p-8 md:p-10 border rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden flex flex-col items-start ${getBgColor(
                  service.theme
                )}`}
              >
                <RichIcon icon={service.icon} theme={service.theme} />

                <h3 className="text-2xl font-serif font-bold mb-3 text-brand-950 dark:text-white group-hover:text-brand-700 transition-colors">
                  {lang === 'en' ? service.title.en : service.title.bn}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-[15px] leading-relaxed mb-8 flex-grow">
                  {lang === 'en' ? service.desc.en : service.desc.bn}
                </p>

                <a
                  href="#"
                  className="mt-auto inline-flex items-center justify-center w-12 h-12 bg-white dark:bg-night-800 rounded-full shadow-sm text-brand-950 dark:text-white group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300"
                >
                  <ArrowRight size={18} className="transition-transform group-hover:rotate-[-45deg]" />
                </a>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};