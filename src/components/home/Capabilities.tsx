'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/lib/store';
import { ArrowRight, TrendingUp, Scale, Cpu, Target, Briefcase, Zap, PieChart, ShieldCheck, FileCheck, Building2, Gavel, Cloud, Lock, Database, Activity } from 'lucide-react';

export const Capabilities = () => {
    const { lang } = useAppStore();
    const [activeTab, setActiveTab] = useState(0);

    const data = [
        {
            id: 'business', label: { en: "Business Advisory", bn: "ব্যবসায়িক পরামর্শ" }, icon: TrendingUp, color: "from-[#F43F5E] via-[#FB923C] to-[#FACC15]", 
            services: [
                { icon: Target, title: { en: "Corporate Strategy", bn: "কর্পোরেট কৌশল" }, desc: { en: "Defining the path to sustainable growth.", bn: "টেকসই প্রবৃদ্ধি এবং প্রতিযোগিতামূলক সুবিধার পথ নির্ধারণ।" } },
                { icon: Briefcase, title: { en: "Mergers & Acquisitions", bn: "একত্রীকরণ ও অধিগ্রহণ" }, desc: { en: "End-to-end deal advisory & valuation.", bn: "চুক্তি পরামর্শ এবং মূল্যায়ন।" } },
                { icon: Zap, title: { en: "Operational Excellence", bn: "অপারেশনাল শ্রেষ্ঠত্ব" }, desc: { en: "Optimizing processes for efficiency.", bn: "সর্বাধিক দক্ষতা এবং খরচ কমানোর জন্য প্রক্রিয়া অপ্টিমাইজ করা।" } },
                { icon: PieChart, title: { en: "Financial Restructuring", bn: "আর্থিক পুনর্গঠন" }, desc: { en: "Navigating distress & unlocking value.", bn: "মূল্য আনলক করা এবং তারল্য ব্যবস্থাপনা।" } }
            ]
        },
        {
            id: 'legal', label: { en: "Legal Support", bn: "আইনি সহায়তা" }, icon: Scale, color: "from-[#6366f1] via-[#8b5cf6] to-[#d946ef]",
            services: [
                { icon: ShieldCheck, title: { en: "Regulatory Compliance", bn: "নিয়ন্ত্রক সম্মতি" }, desc: { en: "Frameworks for global regulations.", bn: "জটিল বৈশ্বিক নিয়মাবলী নেভিগেট করার জন্য ফ্রেমওয়ার্ক।" } },
                { icon: FileCheck, title: { en: "Intellectual Property", bn: "মেধা সম্পত্তি" }, desc: { en: "Protecting patents & trademarks.", bn: "বিশ্বব্যাপী পেটেন্ট, ট্রেডমার্ক এবং সম্পদ রক্ষা করা।" } },
                { icon: Building2, title: { en: "Corporate Law", bn: "কর্পোরেট আইন" }, desc: { en: "Governance & entity management.", bn: "বহুজাতিকদের জন্য শাসন, গঠন এবং সত্তা ব্যবস্থাপনা।" } },
                { icon: Gavel, title: { en: "Dispute Resolution", bn: "বিরোধ নিষ্পত্তি" }, desc: { en: "Litigation support & arbitration.", bn: "উচ্চ-ঝুঁকির মামলা সমর্থন এবং সালিসি সেবা।" } }
            ]
        },
        {
            id: 'it', label: { en: "IT Solutions", bn: "তথ্য প্রযুক্তি সমাধান" }, icon: Cpu, color: "from-[#06b6d4] via-[#3b82f6] to-[#10b981]",
            services: [
                { icon: Cloud, title: { en: "Cloud Infrastructure", bn: "ক্লাউড অবকাঠামো" }, desc: { en: "Secure hybrid cloud modernization.", bn: "স্কেলেবল, নিরাপদ, এবং হাইব্রিড ক্লাউড আর্কিটেকচার।" } },
                { icon: Lock, title: { en: "Cyber Security", bn: "সাইবার নিরাপত্তা" }, desc: { en: "Zero-trust security models.", bn: "জিরো-ট্রাস্ট সিকিউরিটি মডেল এবং হুমকি পর্যবেক্ষণ।" } },
                { icon: Database, title: { en: "Data & AI Analytics", bn: "ডেটা ও এআই অ্যানালিটিক্স" }, desc: { en: "Predictive insights via ML.", bn: "উন্নত এমএল ব্যবহার করে ডেটাকে ইনসাইটে রূপান্তর করা।" } },
                { icon: Activity, title: { en: "Digital Transformation", bn: "ডিজিটাল রূপান্তর" }, desc: { en: "Automating workflows for agility.", bn: "তৎপরতা এবং উদ্ভাবন চালানোর জন্য কর্মপ্রবাহ স্বয়ংক্রিয় করা।" } }
            ]
        }
    ];

    return (
        <section id="services" className="py-32 bg-gray-50 dark:bg-night-800 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                 <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-brand-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen animate-pulse" />
            </div>
            <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, type: "spring" }} suppressHydrationWarning className="container mx-auto px-6 relative z-10">
                <div suppressHydrationWarning className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-brand-950 dark:text-white">{lang === 'en' ? 'Our Capabilities' : 'আমাদের সক্ষমতা'}</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">{lang === 'en' ? 'Comprehensive, evidence-based solutions designed for the complex needs of modern enterprises.' : 'আধুনিক উদ্যোগের জটিল প্রয়োজনের জন্য ডিজাইন করা ব্যাপক সমাধান।'}</p>
                </div>
                <div className="flex justify-center mb-20">
                    <div className="inline-flex p-2 bg-white/50 dark:bg-night-900/50 backdrop-blur-xl rounded-full border border-white/40 dark:border-white/10 shadow-2xl relative overflow-hidden ring-1 ring-black/5 dark:ring-white/5">
                        {data.map((tab, i) => (
                            <button key={i} onClick={() => setActiveTab(i)} className={`relative px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-500 z-10 flex items-center gap-3 ${activeTab === i ? 'text-white shadow-[0_0_30px_rgba(0,0,0,0.2)]' : 'text-gray-500 dark:text-gray-400 hover:text-brand-700 dark:hover:text-white'}`}>
                                {activeTab === i && <motion.div layoutId="activeTab" className={`absolute inset-0 rounded-full bg-gradient-to-r ${tab.color} shadow-lg`} transition={{ type: "spring", bounce: 0.25, duration: 0.6 }} />}
                                <span className="relative z-10 flex items-center gap-2"><tab.icon size={18} />{lang === 'en' ? tab.label.en : tab.label.bn}</span>
                            </button>
                        ))}
                    </div>
                </div>
                <AnimatePresence mode='wait'>
                    <motion.div key={activeTab} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {data[activeTab].services.map((service, i) => (
                            <div key={i} className="group p-8 bg-white dark:bg-night-900 border border-gray-100 dark:border-night-700 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${data[activeTab].color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                <div className="mb-8 relative">
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${data[activeTab].color} p-[2px] shadow-lg`}>
                                        <div className="w-full h-full bg-white dark:bg-night-900 rounded-[14px] flex items-center justify-center relative overflow-hidden">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${data[activeTab].color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                                            <service.icon size={32} className="relative z-10" style={{ stroke: `url(#gradient-${activeTab}-${i})` }} />
                                        </div>
                                    </div>
                                    <svg width="0" height="0"><defs><linearGradient id={`gradient-${activeTab}-${i}`} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={activeTab === 0 ? '#F43F5E' : activeTab === 1 ? '#6366f1' : '#06b6d4'} /><stop offset="100%" stopColor={activeTab === 0 ? '#FACC15' : activeTab === 1 ? '#d946ef' : '#10b981'} /></linearGradient></defs></svg>
                                </div>
                                <h3 className="text-xl font-serif font-bold mb-4 text-brand-950 dark:text-white">{lang === 'en' ? service.title.en : service.title.bn}</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 min-h-[60px]">{lang === 'en' ? service.desc.en : service.desc.bn}</p>
                                <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-700 dark:text-white group-hover:gap-3 transition-all">{lang === 'en' ? 'Explore' : 'জানুন'} <ArrowRight size={14} className="text-brand-500" /></a>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </motion.div>
        </section>
    );
};