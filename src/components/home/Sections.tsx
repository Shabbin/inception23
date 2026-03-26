'use client';
import { useAppStore } from '@/lib/store';
import { motion } from 'framer-motion';

export const Industries = () => {
    const { lang } = useAppStore();
    const industries = ['Financial Services', 'Public Sector', 'Manufacturing', 'Technology', 'Energy', 'Healthcare'];
    return (
        <section id="industries" className="py-24 bg-white dark:bg-night-900 overflow-hidden">
            <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, type: "spring" }} suppressHydrationWarning className="container mx-auto px-6">
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-center text-gray-400 mb-16">{lang === 'en' ? 'Industry Focus' : 'শিল্প ফোকাস'}</h2>
                <div suppressHydrationWarning className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-gray-100 dark:border-night-800">
                    {industries.map((ind, i) => (
                        <div suppressHydrationWarning key={i} className="p-10 border-b border-r border-gray-100 dark:border-night-800 hover:bg-brand-50 dark:hover:bg-night-800 transition-colors cursor-pointer text-center group flex items-center justify-center h-40">
                            <span className="font-serif font-bold text-lg text-gray-600 dark:text-gray-400 group-hover:text-brand-700 dark:group-hover:text-brand-100 transition-colors">{ind}</span>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export const Proof = () => {
    const { lang } = useAppStore();
    return (
        <section id="proof" className="py-24 bg-white dark:bg-night-950 relative overflow-hidden border-t border-gray-100 dark:border-night-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,transparent_100%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_100%)] pointer-events-none"></div>
            <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, type: "spring", delay: 0.1 }} suppressHydrationWarning className="container mx-auto px-6 relative z-10">
                <div suppressHydrationWarning className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-white/10">
                    {[
                        { val: "$500M+", label: { en: "Client Value Delivered", bn: "ক্লায়েন্ট ভ্যালু প্রদান করা হয়েছে" } },
                        { val: "30%", label: { en: "Avg. Efficiency Gain", bn: "গড় দক্ষতা বৃদ্ধি" } },
                        { val: "100%", label: { en: "Regulatory Compliance", bn: "নিয়ন্ত্রক সম্মতি" } }
                    ].map((stat, i) => (
                        <motion.div initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: false }} transition={{ delay: i * 0.1, type: "spring" }} suppressHydrationWarning key={i} className="pt-8 md:pt-0 px-8">
                            <div suppressHydrationWarning className="text-5xl md:text-7xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-brand-700 to-brand-400 dark:from-white dark:to-brand-200">{stat.val}</div>
                            <div suppressHydrationWarning className="text-sm font-bold uppercase tracking-widest text-brand-600 dark:text-brand-400">{lang === 'en' ? stat.label.en : stat.label.bn}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export const InquiryForm = () => {
    const { lang } = useAppStore();
    return (
        <section className="py-32 bg-white dark:bg-night-900 overflow-hidden">
            <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, type: "spring" }} suppressHydrationWarning className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold mb-6 text-brand-950 dark:text-white">{lang === 'en' ? 'Confidential Inquiry' : 'গোপনীয় অনুসন্ধান'}</h2>
                    <p className="text-gray-500 dark:text-gray-400">{lang === 'en' ? 'Reach our senior partners directly.' : 'সরাসরি যোগাযোগ করুন।'}</p>
                </div>
                <form className="bg-gray-50 dark:bg-night-800 p-10 md:p-16 border border-gray-100 dark:border-night-700 shadow-2xl dark:shadow-none space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <input type="text" className="w-full p-4 bg-white dark:bg-night-900 border border-gray-200 dark:border-night-600 focus:border-brand-700 dark:focus:border-brand-500 outline-none transition-colors dark:text-white" placeholder={lang === 'en' ? "Name" : "নাম"} required />
                        <input type="email" className="w-full p-4 bg-white dark:bg-night-900 border border-gray-200 dark:border-night-600 focus:border-brand-700 dark:focus:border-brand-500 outline-none transition-colors dark:text-white" placeholder={lang === 'en' ? "Work Email" : "ইমেইল"} required />
                    </div>
                    <button type="submit" className="w-full bg-brand-700 hover:bg-brand-600 text-white font-bold py-5 rounded-sm shadow-xl transition-all uppercase tracking-[0.2em] text-sm">{lang === 'en' ? 'Submit Securely' : 'নিরাপদে জমা দিন'}</button>
                </form>
            </motion.div>
        </section>
    );
};

export const Methodology = () => {
    const { lang } = useAppStore();
    const steps = [
        { num: "01", title: { en: "Discovery", bn: "আবিষ্কার" }, desc: { en: "Deep-dive analysis of your corporate architecture and market positioning.", bn: "আপনার কর্পোরেট আর্কিটেকচার এবং মার্কেট পজিশনিং এর গভীর বিশ্লেষণ।" } },
        { num: "02", title: { en: "Strategy Architecture", bn: "কৌশল আর্কিটেকচার" }, desc: { en: "Engineering scalable frameworks across legal, tech, and business vectors.", bn: "আইনি, প্রযুক্তি এবং ব্যবসায়িক খাত জুড়ে স্কেলেবল ফ্রেমওয়ার্ক ইঞ্জিনিয়ারিং।" } },
        { num: "03", title: { en: "Execution", bn: "বাস্তবায়ন" }, desc: { en: "Precision deployment with continuous optimization and rigorous compliance.", bn: "অবিচ্ছিন্ন অপ্টিমাইজেশন এবং কঠোর সম্মতির সাথে সুনির্দিষ্ট স্থাপনা।" } }
    ];

    return (
        <section className="py-24 bg-gray-50 dark:bg-night-950 relative overflow-hidden border-t border-gray-100 dark:border-night-800">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-100/50 dark:from-brand-600/20 to-transparent pointer-events-none"></div>
            <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8, type: "spring" }} suppressHydrationWarning className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300 mb-4">{lang === 'en' ? 'Our Methodology' : 'আমাদের পদ্ধতি'}</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8 text-brand-950 dark:text-white">
                            {lang === 'en' ? 'Engineered for Scale. Designed for Dominance.' : 'স্কেলের জন্য ইঞ্জিনিয়ারিং। আধিপত্যের জন্য ডিজাইন করা।'}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                            {lang === 'en' ? 'We do not just offer advice; we build the infrastructure for your success. Our tri-pillar approach seamlessly integrates business acuity, legal fortification, and technological superiority to ensure absolute market dominance.' : 'আমরা শুধু পরামর্শ দিই না; আমরা আপনার সাফল্যের অবকাঠামো তৈরি করি। আমাদের ত্রি-স্তম্ভ পদ্ধতি ব্যবসা, আইন এবং প্রযুক্তিকে একীভূত করে।'}
                        </p>
                        <button className="px-8 py-4 border border-brand-500 hover:bg-brand-500 text-brand-700 dark:text-white hover:text-white uppercase tracking-widest text-xs font-bold transition-all rounded-sm">
                            {lang === 'en' ? 'Learn More' : 'আরও জানুন'}
                        </button>
                    </div>
                    <div className="space-y-8">
                        {steps.map((step, i) => (
                            <motion.div initial={{ x: 50, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: false }} transition={{ delay: i * 0.15, type: "spring" }} key={i} className="flex gap-6 items-start group hover:-translate-y-1 transition-transform cursor-pointer">
                                <span className="text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-brand-400 dark:from-brand-300 to-transparent opacity-50 group-hover:opacity-100 transition-opacity">{step.num}</span>
                                <div>
                                    <h4 className="text-2xl font-bold mb-2 text-brand-950 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-300 transition-colors">{lang === 'en' ? step.title.en : step.title.bn}</h4>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{lang === 'en' ? step.desc.en : step.desc.bn}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};