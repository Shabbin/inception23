'use client';

import { useEffect, useState } from 'react';
import { useAppStore } from '@/lib/store';
import { motion, useReducedMotion } from 'framer-motion';
import {
    TrendingUp,
    BarChart,
    ShieldCheck,
    Target,
    Lightbulb,
    Rocket,
    Lock,
    ArrowRight,
    Building2,
    Mail,
    User,
    BriefcaseBusiness,
    FileText,
    ChevronDown
} from 'lucide-react';
import { RichIcon } from '@/components/ui/RichIcon';
import {
    FinTechIllustration,
    PublicSectorIllustration,
    ManufacturingIllustration,
    TechIllustration,
    EnergyIllustration,
    HealthIllustration
} from '@/components/ui/Illustrations';

const useIsMobileAnimation = () => {
    const [isMobile, setIsMobile] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const mediaQuery = window.matchMedia('(max-width: 767px)');

        const update = () => {
            setIsMobile(mediaQuery.matches || !!prefersReducedMotion);
        };

        update();

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', update);
            return () => mediaQuery.removeEventListener('change', update);
        } else {
            mediaQuery.addListener(update);
            return () => mediaQuery.removeListener(update);
        }
    }, [prefersReducedMotion]);

    return isMobile;
};

export const Industries = () => {
    const { lang } = useAppStore();
    const isMobile = useIsMobileAnimation();

    const industries = [
        { name: 'Financial Services', bn: 'আর্থিক সেবাসমূহ', icon: FinTechIllustration },
        { name: 'Public Sector', bn: 'পাবলিক সেক্টর', icon: PublicSectorIllustration },
        { name: 'Manufacturing', bn: 'উৎপাদন', icon: ManufacturingIllustration },
        { name: 'Technology', bn: 'প্রযুক্তি', icon: TechIllustration },
        { name: 'Energy', bn: 'শক্তি', icon: EnergyIllustration },
        { name: 'Healthcare', bn: 'স্বাস্থ্যসেবা', icon: HealthIllustration }
    ];

    return (
        <section id="industries" className="py-24 bg-white dark:bg-night-900 overflow-hidden">
            <motion.div
                initial={isMobile ? { opacity: 0, y: 12 } : { opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={isMobile ? { once: true, margin: '-40px' } : { once: true, margin: '-100px' }}
                transition={
                    isMobile
                        ? { duration: 0.35, ease: 'easeOut' }
                        : { duration: 0.8, type: 'spring' }
                }
                suppressHydrationWarning
                className="container mx-auto px-6"
            >
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-center text-gray-400 mb-16">
                    {lang === 'en' ? 'Industry Focus' : 'শিল্প ফোকাস'}
                </h2>

                <div
                    suppressHydrationWarning
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-gray-100 dark:border-night-800"
                >
                    {industries.map((ind, i) => (
                        <div
                            suppressHydrationWarning
                            key={i}
                            className="px-4 py-8 md:py-10 border-b border-r border-gray-100 dark:border-night-800 hover:bg-brand-50/50 dark:hover:bg-night-800/50 transition-colors md:transition-all duration-300 md:duration-500 cursor-pointer text-center group flex flex-col items-center justify-center min-h-[220px]"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 mb-6 md:group-hover:-translate-y-2 md:group-hover:scale-105 transition-transform duration-500">
                                <ind.icon className="w-full h-full drop-shadow-sm" />
                            </div>
                            <span className="font-serif font-bold text-sm md:text-base text-gray-700 dark:text-gray-300 group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors uppercase tracking-[0.05em]">
                                {lang === 'en' ? ind.name : ind.bn}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export const Proof = () => {
    const { lang } = useAppStore();
    const isMobile = useIsMobileAnimation();

    const stats = [
        {
            val: '$50B+',
            label: { en: 'Assets Advised', bn: 'উপদেষ্টা সম্পদ' },
            desc: {
                en: 'Capital, transaction, and strategic mandates supported across large-scale engagements.',
                bn: 'বৃহৎ পরিসরের এনগেজমেন্টে মূলধন, লেনদেন এবং কৌশলগত ম্যান্ডেট সহায়তা।'
            },
            icon: TrendingUp,
            theme: 'emerald'
        },
        {
            val: '30%',
            label: { en: 'Avg. Efficiency Gain', bn: 'গড় দক্ষতা বৃদ্ধি' },
            desc: {
                en: 'Measured operational improvements delivered through restructuring and optimization.',
                bn: 'পুনর্গঠন ও অপ্টিমাইজেশনের মাধ্যমে পরিমাপযোগ্য অপারেশনাল উন্নতি।'
            },
            icon: BarChart,
            theme: 'blue'
        },
        {
            val: '100%',
            label: { en: 'Regulatory Compliance', bn: 'নিয়ন্ত্রক সম্মতি' },
            desc: {
                en: 'Governance-first execution designed for regulated and high-stakes environments.',
                bn: 'নিয়ন্ত্রিত ও উচ্চ-ঝুঁকিপূর্ণ পরিবেশের জন্য গভর্নেন্স-প্রথম বাস্তবায়ন।'
            },
            icon: ShieldCheck,
            theme: 'purple'
        }
    ];

    return (
        <section
            id="proof"
            className="py-20 md:py-28 bg-white dark:bg-night-950 relative overflow-hidden border-t border-gray-100 dark:border-night-800"
        >
            <div className="absolute inset-0 pointer-events-none">
                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] bg-brand-500/5 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,transparent_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)]" />
            </div>

            <motion.div
                initial={isMobile ? { opacity: 0, y: 14 } : { opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={isMobile ? { once: true, amount: 0.2 } : { once: false }}
                transition={
                    isMobile
                        ? { duration: 0.4, ease: 'easeOut' }
                        : { duration: 0.8, type: 'spring', delay: 0.1 }
                }
                suppressHydrationWarning
                className="container mx-auto px-6 relative z-10"
            >
                <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
                    <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.28em] text-brand-600 dark:text-brand-400 mb-5">
                        {lang === 'en' ? 'Proof of Impact' : 'প্রভাবের প্রমাণ'}
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-serif font-bold text-brand-950 dark:text-white mb-5 leading-tight">
                        {lang === 'en'
                            ? 'Measured Outcomes. Premium Execution.'
                            : 'পরিমাপযোগ্য ফলাফল। প্রিমিয়াম বাস্তবায়ন।'}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                        {lang === 'en'
                            ? 'Our engagement model is built to deliver strategic clarity, operational lift, and dependable regulatory discipline.'
                            : 'আমাদের এনগেজমেন্ট মডেল কৌশলগত স্বচ্ছতা, অপারেশনাল উন্নতি এবং নির্ভরযোগ্য নিয়ন্ত্রক শৃঙ্খলা প্রদানের জন্য নির্মিত।'}
                    </p>
                </div>

                <div suppressHydrationWarning className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            initial={isMobile ? { opacity: 0, y: 14 } : { opacity: 0, y: 24, scale: 0.96 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={isMobile ? { once: true, amount: 0.15 } : { once: false }}
                            transition={
                                isMobile
                                    ? { delay: i * 0.05, duration: 0.35, ease: 'easeOut' }
                                    : { delay: i * 0.12, type: 'spring', stiffness: 140, damping: 16 }
                            }
                            suppressHydrationWarning
                            key={i}
                            className="group relative overflow-hidden rounded-[2rem] border border-gray-100 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.04] md:backdrop-blur-md p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] dark:shadow-none md:hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_60px_rgba(124,58,237,0.08)] transition-all duration-500"
                        >
                            <div className="absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-brand-50/60 to-transparent dark:from-brand-900/10 dark:to-transparent" />

                            <div suppressHydrationWarning className="relative z-10 flex flex-col items-start">
                                <div className="mb-7">
                                    <RichIcon icon={stat.icon} theme={stat.theme} />
                                </div>

                                <div
                                    suppressHydrationWarning
                                    className="text-[2.75rem] sm:text-5xl lg:text-6xl font-serif font-bold text-brand-950 dark:text-white tracking-tight leading-none"
                                >
                                    {stat.val}
                                </div>

                                <div
                                    suppressHydrationWarning
                                    className="mt-4 text-sm font-bold uppercase tracking-[0.22em] text-brand-600 dark:text-brand-400"
                                >
                                    {lang === 'en' ? stat.label.en : stat.label.bn}
                                </div>

                                <div className="mt-5 h-[2px] w-14 md:group-hover:w-24 bg-brand-500/70 transition-all duration-500" />

                                <p className="mt-5 text-sm md:text-[15px] leading-7 text-gray-500 dark:text-gray-400">
                                    {lang === 'en' ? stat.desc.en : stat.desc.bn}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export const InquiryForm = () => {
    const { lang } = useAppStore();
    const isMobile = useIsMobileAnimation();

    const inquiryTypes = [
        { en: 'Strategic Advisory', bn: 'কৌশলগত পরামর্শ' },
        { en: 'Legal Support', bn: 'আইনি সহায়তা' },
        { en: 'Technology Solutions', bn: 'প্রযুক্তি সমাধান' },
        { en: 'Confidential Discussion', bn: 'গোপনীয় আলোচনা' }
    ];

    return (
        <section className="relative overflow-hidden bg-white dark:bg-night-900 py-24 md:py-32">
            <div className="absolute inset-0 pointer-events-none">
                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[44rem] h-[44rem] bg-brand-500/5 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,transparent_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)]" />
            </div>

            <motion.div
                initial={isMobile ? { opacity: 0, y: 12 } : { opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={isMobile ? { once: true, margin: '-40px' } : { once: false, margin: '-100px' }}
                transition={
                    isMobile
                        ? { duration: 0.35, ease: 'easeOut' }
                        : { duration: 0.8, type: 'spring' }
                }
                suppressHydrationWarning
                className="container mx-auto px-6 max-w-7xl relative z-10"
            >
                <div className="grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 items-start">
                    <div className="xl:sticky xl:top-28">
                        <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/5 px-4 py-2 mb-6">
                            <Lock size={14} className="text-brand-600 dark:text-brand-400" />
                            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-700 dark:text-brand-400">
                                {lang === 'en' ? 'Confidential Inquiry' : 'গোপনীয় অনুসন্ধান'}
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-brand-950 dark:text-white leading-[1.02] tracking-tight">
                            {lang === 'en'
                                ? 'Begin a private conversation with our senior team.'
                                : 'আমাদের সিনিয়র টিমের সাথে একটি ব্যক্তিগত আলোচনা শুরু করুন।'}
                        </h2>

                        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-8 max-w-xl mb-8">
                            {lang === 'en'
                                ? 'Share your mandate, challenge, or objective with discretion. We review all submissions directly and respond through an appropriately secure channel.'
                                : 'গোপনীয়তার সঙ্গে আপনার প্রয়োজন, চ্যালেঞ্জ বা উদ্দেশ্য শেয়ার করুন। আমরা প্রতিটি জমা সরাসরি পর্যালোচনা করি এবং উপযুক্ত নিরাপদ মাধ্যমে সাড়া দিই।'}
                        </p>

                        <div className="space-y-4">
                            <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.04] p-5 md:backdrop-blur-md">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-700 dark:text-brand-300">
                                        <User size={18} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-400 mb-2">
                                            {lang === 'en' ? 'Direct Review' : 'সরাসরি পর্যালোচনা'}
                                        </h3>
                                        <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
                                            {lang === 'en'
                                                ? 'Your inquiry is reviewed by senior decision-makers, not routed through a generic support queue.'
                                                : 'আপনার অনুসন্ধান সাধারণ সাপোর্ট কিউতে না গিয়ে সিনিয়র সিদ্ধান্তগ্রহণকারীদের দ্বারা পর্যালোচিত হয়।'}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-gray-100 dark:border-white/10 bg-gray-50/80 dark:bg-white/[0.04] p-5 md:backdrop-blur-md">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-700 dark:text-brand-300">
                                        <ShieldCheck size={18} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-700 dark:text-brand-400 mb-2">
                                            {lang === 'en' ? 'Secure Handling' : 'নিরাপদ ব্যবস্থাপনা'}
                                        </h3>
                                        <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
                                            {lang === 'en'
                                                ? 'Sensitive details are handled with discretion and aligned to enterprise confidentiality expectations.'
                                                : 'সংবেদনশীল তথ্য বিচক্ষণতার সঙ্গে এবং এন্টারপ্রাইজ গোপনীয়তার মানদণ্ড অনুযায়ী পরিচালিত হয়।'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form
                        className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 dark:border-white/10 bg-white/85 dark:bg-white/[0.04] shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:shadow-none md:backdrop-blur-xl"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.07),transparent_28%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.12),transparent_28%)] pointer-events-none" />
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

                        <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12">
                            <div className="mb-8 md:mb-10">
                                <h3 className="text-2xl md:text-3xl font-serif font-bold text-brand-950 dark:text-white mb-3">
                                    {lang === 'en' ? 'Secure inquiry form' : 'নিরাপদ অনুসন্ধান ফর্ম'}
                                </h3>
                                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-7">
                                    {lang === 'en'
                                        ? 'Provide the essential details below and our team will respond with the right next step.'
                                        : 'নিচে প্রয়োজনীয় তথ্য দিন, আমাদের টিম আপনাকে উপযুক্ত পরবর্তী ধাপ জানাবে।'}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                                <div>
                                    <label className="mb-2.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-400">
                                        <User size={14} />
                                        {lang === 'en' ? 'Full Name' : 'পূর্ণ নাম'}
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full h-14 px-4 bg-gray-50 dark:bg-night-900/90 border border-gray-200 dark:border-night-600 focus:border-brand-600 dark:focus:border-brand-500 outline-none transition-all duration-300 dark:text-white rounded-xl placeholder:text-gray-400 dark:placeholder:text-gray-500"
                                        placeholder={lang === 'en' ? 'Enter your full name' : 'আপনার পূর্ণ নাম লিখুন'}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="mb-2.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-400">
                                        <Mail size={14} />
                                        {lang === 'en' ? 'Work Email' : 'কর্মক্ষেত্রের ইমেইল'}
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full h-14 px-4 bg-gray-50 dark:bg-night-900/90 border border-gray-200 dark:border-night-600 focus:border-brand-600 dark:focus:border-brand-500 outline-none transition-all duration-300 dark:text-white rounded-xl placeholder:text-gray-400 dark:placeholder:text-gray-500"
                                        placeholder={lang === 'en' ? 'name@company.com' : 'name@company.com'}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="mb-2.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-400">
                                        <Building2 size={14} />
                                        {lang === 'en' ? 'Organization' : 'প্রতিষ্ঠান'}
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full h-14 px-4 bg-gray-50 dark:bg-night-900/90 border border-gray-200 dark:border-night-600 focus:border-brand-600 dark:focus:border-brand-500 outline-none transition-all duration-300 dark:text-white rounded-xl placeholder:text-gray-400 dark:placeholder:text-gray-500"
                                        placeholder={lang === 'en' ? 'Company or institution name' : 'কোম্পানি বা প্রতিষ্ঠানের নাম'}
                                    />
                                </div>

                                <div>
                                    <label className="mb-2.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-400">
                                        <BriefcaseBusiness size={14} />
                                        {lang === 'en' ? 'Inquiry Type' : 'অনুসন্ধানের ধরন'}
                                    </label>
                                    <div className="relative">
                                        <select className="w-full h-14 px-4 pr-12 bg-gray-50 dark:bg-night-900/90 border border-gray-200 dark:border-night-600 focus:border-brand-600 dark:focus:border-brand-500 outline-none transition-all duration-300 dark:text-white rounded-xl appearance-none">
                                            {inquiryTypes.map((item, i) => (
                                                <option key={i} value={item.en}>
                                                    {lang === 'en' ? item.en : item.bn}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center justify-center text-gray-500 dark:text-gray-400">
                                            <ChevronDown size={18} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 md:mt-6">
                                <label className="mb-2.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-700 dark:text-brand-400">
                                    <FileText size={14} />
                                    {lang === 'en' ? 'Confidential Brief' : 'গোপনীয় বিবরণ'}
                                </label>
                                <textarea
                                    className="w-full p-4 md:p-5 bg-gray-50 dark:bg-night-900/90 border border-gray-200 dark:border-night-600 focus:border-brand-600 dark:focus:border-brand-500 outline-none transition-all duration-300 dark:text-white h-44 md:h-48 resize-none rounded-xl placeholder:text-gray-400 dark:placeholder:text-gray-500 leading-7"
                                    placeholder={
                                        lang === 'en'
                                            ? 'Outline your objective, challenge, or context. A concise briefing is sufficient.'
                                            : 'আপনার উদ্দেশ্য, চ্যালেঞ্জ বা প্রেক্ষাপট সংক্ষেপে লিখুন। সংক্ষিপ্ত বিবরণই যথেষ্ট।'
                                    }
                                    required
                                />
                            </div>

                            <div className="mt-6 md:mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                                <div className="max-w-md">
                                    <p className="text-xs md:text-sm leading-6 text-gray-500 dark:text-gray-400">
                                        {lang === 'en'
                                            ? 'By submitting, you request a confidential follow-up from our team regarding this inquiry.'
                                            : 'জমা দেওয়ার মাধ্যমে আপনি এই অনুসন্ধান সম্পর্কে আমাদের টিমের কাছ থেকে একটি গোপনীয় ফলো-আপের অনুরোধ করছেন।'}
                                    </p>
                                </div>

                                <button
                                    type="submit"
                                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-700 hover:bg-brand-600 text-white font-bold px-6 md:px-8 py-4 md:py-4 shadow-[0_16px_40px_rgba(124,58,237,0.25)] transition-all uppercase tracking-[0.18em] text-[11px] md:text-xs md:hover:-translate-y-1"
                                >
                                    <Lock size={16} />
                                    <span>{lang === 'en' ? 'Submit Securely' : 'নিরাপদে জমা দিন'}</span>
                                    <ArrowRight
                                        size={16}
                                        className="transition-transform duration-300 md:group-hover:translate-x-1"
                                    />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};

export const Methodology = () => {
    const { lang } = useAppStore();
    const isMobile = useIsMobileAnimation();

    const steps = [
        {
            num: '01',
            icon: Target,
            theme: 'rose',
            title: { en: 'Strategic Assessment', bn: 'কৌশলগত মূল্যায়ন' },
            desc: {
                en: 'Deep-dive analysis of market position, operational bottlenecks, and untapped digital vectors.',
                bn: 'বাজারের অবস্থান, অপারেশনাল বাধা এবং অব্যবহৃত ডিজিটাল ভেক্টরের গভীর বিশ্লেষণ।'
            }
        },
        {
            num: '02',
            icon: Lightbulb,
            theme: 'amber',
            title: { en: 'Architecting Solutions', bn: 'সমাধান নির্মাণ' },
            desc: {
                en: 'Developing custom frameworks leveraging legal loopholes and cutting-edge tech deployment.',
                bn: 'আইনি ফাঁকফোকর এবং অত্যাধুনিক প্রযুক্তির সাহায্যে কাস্টম ফ্রেমওয়ার্ক তৈরি।'
            }
        },
        {
            num: '03',
            icon: Rocket,
            theme: 'cyan',
            title: { en: 'Execution & Scale', bn: 'বাস্তবায়ন এবং স্কেল' },
            desc: {
                en: 'Frictionless rollout with continuous optimization to secure maximum ROI and market share.',
                bn: 'সর্বোচ্চ আয় এবং বাজারের অংশীদারিত্ব নিশ্চিত করতে ধারাবাহিক অপ্টিমাইজেশন।'
            }
        }
    ];

    return (
        <section
            id="methodology"
            className="py-24 md:py-32 bg-gray-50 dark:bg-night-950 relative overflow-hidden border-t border-gray-100 dark:border-night-800"
        >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.03)_0%,transparent_100%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.02)_0%,transparent_100%)] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={isMobile ? { opacity: 0, y: 12 } : { opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={isMobile ? { once: true, amount: 0.2 } : { once: false }}
                    transition={
                        isMobile
                            ? { duration: 0.35, ease: 'easeOut' }
                            : { duration: 0.8 }
                    }
                    className="text-center max-w-4xl mx-auto mb-20 md:mb-32"
                >
                    <h2 className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-brand-600 dark:text-brand-400 mb-6">
                        {lang === 'en' ? 'Our Methodology' : 'আমাদের পদ্ধতি'}
                    </h2>
                    <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif font-black leading-[1.1] text-brand-950 dark:text-white mb-8 tracking-tight">
                        {lang === 'en'
                            ? 'Engineered for Scale. Designed for Dominance.'
                            : 'স্কেলের জন্য ইঞ্জিনিয়ারিং। আধিপত্যের জন্য ডিজাইন করা।'}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                        {lang === 'en'
                            ? 'We do not just offer advice; we build the infrastructure for your success. Our tri-pillar approach seamlessly integrates business acuity, legal fortification, and technological superiority.'
                            : 'আমরা শুধু পরামর্শ দিই না; আমরা আপনার সাফল্যের অবকাঠামো তৈরি করি।'}
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-brand-200 dark:via-brand-800/50 to-transparent md:-translate-x-1/2 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.1)]"></div>

                    <div className="space-y-16 md:space-y-24 relative pb-10">
                        {steps.map((step, i) => {
                            const isEven = i % 2 === 0;

                            return (
                                <div
                                    key={i}
                                    className={`flex flex-col md:flex-row items-center justify-between w-full group ${!isEven ? 'md:flex-row-reverse' : ''}`}
                                >
                                    <div className="hidden md:block w-[45%]"></div>

                                    <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white dark:bg-night-950 border-[5px] border-brand-500 z-10 shadow-[0_0_20px_rgba(20,184,166,0.5)] md:group-hover:scale-150 transition-transform duration-500 ease-out"></div>

                                    <motion.div
                                        initial={
                                            isMobile
                                                ? { opacity: 0, y: 16 }
                                                : { opacity: 0, x: isEven ? -100 : 100, scale: 0.9 }
                                        }
                                        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                                        viewport={
                                            isMobile
                                                ? { once: true, amount: 0.15 }
                                                : { once: false, margin: '-10%' }
                                        }
                                        transition={
                                            isMobile
                                                ? { duration: 0.38, ease: 'easeOut', delay: i * 0.04 }
                                                : { duration: 0.8, type: 'spring', stiffness: 100, damping: 20 }
                                        }
                                        className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} text-left relative`}
                                    >
                                        <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} items-start w-full`}>
                                            <div className="flex items-center gap-3 mb-5 md:group-hover:-translate-y-1 transition-transform duration-300">
                                                <span className="px-5 py-2 rounded-full border border-brand-200 dark:border-brand-500/30 bg-white dark:bg-night-900 text-brand-700 dark:text-brand-300 text-[11px] font-black uppercase tracking-[0.2em] shadow-sm flex items-center gap-2">
                                                    Step - {step.num}
                                                </span>
                                            </div>

                                            <div
                                                className={`p-8 md:p-10 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/5 shadow-[0_15px_50px_rgba(0,0,0,0.02)] dark:shadow-none md:hover:shadow-2xl dark:md:hover:shadow-[0_20px_60px_rgba(20,184,166,0.1)] md:hover:border-brand-300 dark:md:hover:border-brand-500/40 md:hover:-translate-y-2 transition-all duration-500 relative group overflow-hidden w-full ${isEven ? 'md:rounded-tr-none' : 'md:rounded-tl-none'} rounded-tl-none md:rounded-tl-2xl`}
                                            >
                                                <div
                                                    className={`absolute top-[40px] w-12 h-[2px] bg-brand-200 dark:bg-brand-500/30 hidden md:block ${isEven ? '-right-12' : '-left-12'}`}
                                                ></div>

                                                <div className="absolute -inset-4 bg-gradient-to-br from-brand-50 to-transparent dark:from-brand-900/20 dark:to-transparent opacity-0 md:group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none"></div>

                                                <div className={`flex w-full ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                                                    <RichIcon icon={step.icon} theme={step.theme} />
                                                </div>

                                                <h4 className="relative z-10 text-2xl md:text-3xl font-serif font-bold mb-4 text-brand-950 dark:text-white transition-colors md:group-hover:text-brand-700 dark:md:group-hover:text-brand-300">
                                                    {lang === 'en' ? step.title.en : step.title.bn}
                                                </h4>
                                                <p className="relative z-10 text-gray-500 dark:text-gray-400 text-base md:text-lg leading-relaxed font-light">
                                                    {lang === 'en' ? step.desc.en : step.desc.bn}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};