'use client';
import { useAppStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials = () => {
    const { lang } = useAppStore();
    const [idx, setIdx] = useState(0);

    const quotes = [
        { quote: { en: "Inception 23 didn't just advise us—they re-engineered our entire operational architecture, unlocking $200M in trapped value.", bn: "তারা শুধু আমাদের উপদেশ দেয়নি—তারা আমাদের সম্পূর্ণ কর্মক্ষমতা পুনর্গঠন করেছে।" }, author: "Sarah Jenkins", role: "CEO, NexaGlobal Group" },
        { quote: { en: "Their legal defense strategy during our global restructuring was nothing short of legendary. Absolute precision.", bn: "কর্পোরেট আইনি প্রতিরক্ষায় কর্তৃপক্ষের দক্ষতা কল্পনাতীত।" }, author: "David Chen", role: "Chief Counsel, Titan Energy" },
        { quote: { en: "The AI transformation they deployed took us from an analog legacy player to a digital-first market leader in 18 months.", bn: "তাদের এআই রূপান্তর আমাদের ১৮ মাসের মধ্যে আধুনিক ডিজিটাল লিডারে পরিণত করেছে।" }, author: "Elena Rostova", role: "CTO, FinVault Banking" }
    ];

    const paginate = (newDirection: number) => {
        setIdx((prev) => (prev + newDirection + quotes.length) % quotes.length);
    };

    return (
        <section className="py-40 bg-white dark:bg-brand-950 text-brand-950 dark:text-white overflow-hidden relative border-t border-gray-200 dark:border-white/10">
            {/* Structural Typography */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif font-black text-black/5 dark:text-white/5 select-none pointer-events-none tracking-tighter mix-blend-overlay">
                PROOF
            </div>

            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="flex justify-between items-end mb-24">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }}>
                        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-brand-600 dark:text-brand-400 mb-6">{lang === 'en' ? 'Client Endorsements' : 'ক্লায়েন্ট অনুমোদন'}</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold max-w-xl leading-tight">
                            {lang === 'en' ? 'Track Record of Total Dominance.' : 'সাফল্যের ধারাবাহিকতা।'}
                        </h3>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} className="hidden md:flex gap-4">
                        <button onClick={() => paginate(-1)} className="w-14 h-14 rounded-full border border-gray-300 dark:border-white/20 flex items-center justify-center hover:bg-brand-950 hover:border-brand-950 hover:text-white dark:hover:bg-white dark:hover:text-brand-950 transition-colors group">
                            <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button onClick={() => paginate(1)} className="w-14 h-14 rounded-full border border-gray-300 dark:border-white/20 flex items-center justify-center hover:bg-brand-950 hover:border-brand-950 hover:text-white dark:hover:bg-white dark:hover:text-brand-950 transition-colors group">
                            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>

                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 100, filter: "blur(10px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, x: -100, filter: "blur(10px)" }}
                            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                            className="absolute inset-0 flex flex-col justify-center"
                        >
                            <Quote className="text-brand-500/20 dark:text-brand-500/50 mb-8" size={64} />
                            <p className="font-serif text-3xl md:text-5xl lg:text-6xl font-light leading-snug mb-16 max-w-4xl">
                                "{lang === 'en' ? quotes[idx].quote.en : quotes[idx].quote.bn}"
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-[1px] bg-brand-500"></div>
                                <div>
                                    <h4 className="font-bold text-xl uppercase tracking-widest">{quotes[idx].author}</h4>
                                    <p className="text-brand-600 dark:text-brand-300 text-sm mt-2">{quotes[idx].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
                
                {/* Mobile controls */}
                <div className="flex md:hidden gap-4 mt-16">
                    <button onClick={() => paginate(-1)} className="w-12 h-12 rounded-full border border-gray-300 dark:border-white/20 flex items-center justify-center hover:bg-brand-950 hover:text-white dark:hover:bg-white dark:hover:text-brand-950 transition-colors">
                        <ChevronLeft size={20} />
                    </button>
                    <button onClick={() => paginate(1)} className="w-12 h-12 rounded-full border border-gray-300 dark:border-white/20 flex items-center justify-center hover:bg-brand-950 hover:text-white dark:hover:bg-white dark:hover:text-brand-950 transition-colors">
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};
