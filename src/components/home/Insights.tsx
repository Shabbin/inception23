'use client';
import { useAppStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const Insights = () => {
    const { lang } = useAppStore();

    const articles = [
        { category: "Strategy", title: "The Quantum Pivot: Rethinking Corporate Velocity in a Stagnant Market.", date: "OCT 2026", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" },
        { category: "Defense", title: "Navigating the New EU Regulatory Frameworks.", date: "NOV 2026", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop" },
        { category: "Tech", title: "Zero-Trust Infrastructures for Financial Institutions.", date: "DEC 2026", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" }
    ];

    return (
        <section id="insights" className="py-32 bg-gray-50 dark:bg-night-800 border-t border-gray-100 dark:border-night-700">
            <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, type: "spring" }} className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <div className="max-w-xl">
                        <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-brand-600 dark:text-brand-400 mb-6">{lang === 'en' ? 'Publications' : 'প্রকাশনা'}</h2>
                        <h3 className="text-5xl font-serif font-black text-brand-950 dark:text-white leading-tight">
                            {lang === 'en' ? 'Firm Insights.' : 'আমাদের অন্তর্দৃষ্টি।'}
                        </h3>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-4 group mt-8 md:mt-0 pb-2 border-b-2 border-brand-950 dark:border-white">
                        <span className="font-bold uppercase tracking-widest text-xs">{lang === 'en' ? 'View All Publications' : 'সব প্রকাশনা দেখুন'}</span>
                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {articles.map((article, i) => (
                        <div key={i} className="group cursor-pointer flex flex-col h-full">
                            <div className="relative w-full aspect-[4/5] overflow-hidden mb-8">
                                <Image src={article.img} alt={article.title} fill className="object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out" unoptimized />
                                <div className="absolute inset-0 bg-brand-950/20 group-hover:bg-brand-950/40 transition-colors duration-500" />
                                <div className="absolute top-6 left-6 bg-white dark:bg-night-950 text-brand-950 dark:text-white px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-xl">
                                    {article.category}
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <span className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4 block">{article.date}</span>
                                    <h4 className="font-serif font-bold text-2xl md:text-3xl text-brand-950 dark:text-white leading-snug group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                                        {article.title}
                                    </h4>
                                </div>
                                <div className="mt-8 flex items-center gap-4 text-brand-600 dark:text-brand-400 group-hover:translate-x-2 transition-transform duration-300">
                                    <span className="font-bold text-xs uppercase tracking-widest">{lang === 'en' ? 'Read Article' : 'প্রবন্ধ পড়ুন'}</span>
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <a href="#" className="md:hidden flex items-center justify-center gap-4 group mt-16 py-4 border border-brand-950 dark:border-white w-full rounded-sm">
                    <span className="font-bold uppercase tracking-widest text-xs">{lang === 'en' ? 'View All Publications' : 'সব প্রকাশনা দেখুন'}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </a>
            </motion.div>
        </section>
    );
};
