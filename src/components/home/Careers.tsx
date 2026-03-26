'use client';
import { useAppStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Careers = () => {
    const { lang } = useAppStore();

    return (
        <section className="py-40 bg-white dark:bg-night-950 relative overflow-hidden group border-t border-gray-100 dark:border-night-800">
            {/* Background Hover Expand Layer */}
            <div className="absolute inset-0 bg-brand-50 dark:bg-night-900 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" />
            
            <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, type: "spring" }} className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                <div className="w-20 h-[2px] bg-brand-500 mx-auto mb-12 group-hover:w-40 transition-all duration-700" />
                
                <h2 className="text-6xl md:text-8xl font-serif font-black text-brand-950 dark:text-white leading-[0.9] mb-12 uppercase tracking-tighter">
                    {lang === 'en' ? 'Join The Elite.' : 'এলিটদের সাথে যোগ দিন।'}
                </h2>
                <p className="text-xl text-gray-500 dark:text-gray-400 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
                    {lang === 'en' ? 'We do not hire employees. We recruit future partners capable of reshaping entire global markets. Are you ready?' : 'আমরা শুধু কর্মী নিয়োগ করি না। আমরা ভবিষ্যৎ অংশীদার খুঁজি।'}
                </p>
                
                <a href="#" className="inline-flex items-center justify-center gap-6 bg-brand-950 dark:bg-brand-600 text-white px-12 py-6 rounded-sm shadow-2xl hover:scale-105 transition-all duration-500 group/btn">
                    <span className="font-bold uppercase tracking-[0.3em] text-sm">{lang === 'en' ? 'Explore Careers' : 'ক্যারিয়ার দেখুন'}</span>
                    <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-brand-950 transition-colors">
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                </a>
            </motion.div>
        </section>
    );
};
