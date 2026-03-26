'use client';
import { useAppStore } from '@/lib/store';
import { motion } from 'framer-motion';

export const CoreValues = () => {
    const { lang } = useAppStore();
    
    const textEn = "We refuse to compromise. Our foundation is built on absolute precision, relentless accountability, and the singular pursuit of market dominance.";
    const textBn = "আমরা আপসহীন। আমাদের ভিত্তি পরম নির্ভুলতা, নিরন্তর দায়বদ্ধতা এবং বাজার আধিপত্যের একক সাধনার উপর নির্মিত।";
    
    // Split text into words for staggered masking effect
    const words = (lang === 'en' ? textEn : textBn).split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.2 * i },
        }),
    };

    const child = {
        visible: { opacity: 1, y: 0, rotate: 0, transition: { type: "spring", damping: 15, stiffness: 100 } },
        hidden: { opacity: 0, y: 100, rotate: 5 },
    };

    return (
        <section className="py-40 md:py-56 bg-white dark:bg-night-900 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-50 to-transparent dark:from-brand-900/10 pointer-events-none" />
            
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex justify-center mb-16">
                    <span className="px-6 py-2 border border-gray-200 dark:border-white/10 rounded-full text-xs font-bold uppercase tracking-[0.3em] text-brand-600 dark:text-brand-400 shadow-sm">
                        {lang === 'en' ? 'Our Ethos' : 'আমাদের আদর্শ'}
                    </span>
                </motion.div>

                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={container} className="flex flex-wrap gap-x-3 gap-y-4 md:gap-x-5 md:gap-y-6 lg:gap-x-6 lg:gap-y-8 justify-center text-center">
                    {words.map((word, index) => {
                        // Highlight critical business words
                        const isHighlightedEn = ['compromise.', 'absolute', 'precision,', 'relentless', 'accountability,', 'market', 'dominance.'].includes(word);
                        const isHighlightedBn = ['আপসহীন।', 'নির্ভুলতা,', 'দায়বদ্ধতা', 'আধিপত্যের'].includes(word);
                        
                        const isHighlighted = lang === 'en' ? isHighlightedEn : isHighlightedBn;

                        return (
                            <div key={index} className="overflow-hidden p-1">
                                <motion.span variants={child} className={`inline-block font-serif font-black text-4xl md:text-6xl lg:text-8xl leading-[1.1] ${isHighlighted ? 'text-brand-600 dark:text-brand-500 drop-shadow-sm' : 'text-brand-950 dark:text-white'}`}>
                                    {word}
                                </motion.span>
                            </div>
                        );
                    })}
                </motion.div>
                
                <motion.div initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.5, duration: 1, type: "spring" }} className="mt-32 flex justify-center">
                    <div className="w-[1px] h-32 bg-gradient-to-b from-brand-500 via-brand-500/50 to-transparent"></div>
                </motion.div>
            </div>
        </section>
    );
};
