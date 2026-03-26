'use client';
import { useAppStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import Image from 'next/image';

const TeamCard = ({ member, i, lang }: { member: any, i: number, lang: string }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateX: 20, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: (i % 4) * 0.15, type: "spring", damping: 20 }}
            className="group flex flex-col bg-white dark:bg-night-900 border border-gray-100 dark:border-night-800 rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
        >
            <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image src={member.img} alt={member.name} fill className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 grayscale group-hover:grayscale-0" unoptimized />
                <div className="absolute inset-0 bg-brand-950/0 group-hover:bg-brand-950/20 transition-colors duration-500" />
                <div className="absolute bottom-4 right-4 translate-y-20 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <button className="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform">
                        <Linkedin size={20} />
                    </button>
                </div>
            </div>
            <div className="p-8 pb-10 bg-white dark:bg-night-900 relative z-10 transition-colors">
                <h4 className="font-serif font-bold text-2xl text-brand-950 dark:text-white mb-2">{member.name}</h4>
                <p className="font-bold uppercase tracking-widest text-xs text-brand-600 dark:text-brand-400 mb-6">
                    {lang === 'en' ? member.role.en : member.role.bn}
                </p>
                <div className="h-[1px] w-12 bg-gray-200 dark:bg-night-700 mb-6 group-hover:w-full transition-all duration-700" />
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                    {lang === 'en' ? member.bio.en : member.bio.bn}
                </p>
            </div>
        </motion.div>
    );
};

export const Team = () => {
    const { lang } = useAppStore();
    const members = [
        { name: "K M KHADIMUL HASAN", role: { en: "Founder & Managing Partner", bn: "গ্লোবাল ম্যানেজিং পার্টনার" }, bio: { en: "Ex-McKinsey Senior Partner. 25 years advising F500 boards.", bn: "২৫ বছরের অভিজ্ঞতা।" }, img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
        { name: "GAZI FAISAL", role: { en: "Co-Founder & Partner", bn: "আইন ও সম্মতি প্রধান" }, bio: { en: "Former Federal Prosecutor. Expert in regulatory defense.", bn: "প্রাক্তন ফেডারেল প্রসিকিউটর।" }, img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
        { name: "Mahmud Hasan", role: { en: "Advisor", bn: "প্রধান প্রযুক্তি কর্মকর্তা" }, bio: { en: "PhD in AI from MIT. Architect of our predictive engines.", bn: "এমআইটি থেকে এআই-তে পিএইচডি।" }, img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop" },
        { name: "K. Hasan Arif", role: { en: "Head of Strategy", bn: "কৌশল প্রধান" }, bio: { en: "Author of 'The Quantum Pivot'. Leading Digital Growth.", bn: "'দ্য কোয়ান্টাম পিভট' এর লেখক।" }, img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" }
    ];

    return (
        <section id="team" className="py-40 bg-gray-50 dark:bg-night-950 relative overflow-hidden border-t border-gray-200 dark:border-night-800">
            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                 <div className="flex flex-col md:flex-row justify-between items-end mb-24">
                     <div className="max-w-3xl">
                         <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} className="flex items-center gap-4 mb-6">
                             <div className="h-[2px] w-16 bg-brand-500"></div><span className="text-xs font-bold tracking-[0.3em] uppercase text-brand-600 dark:text-brand-400">{lang === 'en' ? 'The Partners' : 'অংশীদারবৃন্দ'}</span>
                         </motion.div>
                         <h2 className="text-6xl md:text-8xl font-serif font-black mb-10 text-brand-950 dark:text-white leading-[0.9] tracking-tighter">
                            {lang === 'en' ? 'Intellect &\nExperience.' : 'মেধা ও অভিজ্ঞতা।'}
                         </h2>
                     </div>
                 </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                     {members.map((member, i) => (
                         <TeamCard key={i} member={member} i={i} lang={lang} />
                     ))}
                 </div>
            </div>
        </section>
    );
};