'use client';

import { useAppStore } from '@/lib/store';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Footer = () => {
    const { lang } = useAppStore();
    return (
        <footer className="relative bg-night-950 text-white overflow-hidden border-t border-white/5 pt-32 pb-8">
            {/* Massive Background Typography */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none">
                <h1 className="font-serif font-black text-[22vw] leading-none whitespace-nowrap">INCEPTION 23</h1>
            </div>

            <div suppressHydrationWarning className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24 border-b border-white/10 pb-24">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <span className="font-serif text-3xl font-bold tracking-tight mb-8 block text-white drop-shadow-md">
                            INCEPTION<span className="text-brand-500"> 23</span>
                        </span>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-sm font-light mb-10">
                            {lang === 'en' ? 'Global strategic advisory, legal support, and digital transformation for the world\'s leading institutions.' : 'বাণিজ্যিক কৌশল, আইনি সহায়তা এবং প্রযুক্তির মাধ্যমে সফলতার পথনির্দেশ।'}
                        </p>
                        <form className="relative max-w-sm group">
                            <input type="email" placeholder={lang === 'en' ? "Subscribe to Insights" : "ইমেইল লিখুন"} className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-14 text-sm outline-none focus:border-brand-500 focus:bg-white/10 transition-all text-white placeholder-gray-500 shadow-inner" />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center hover:bg-brand-500 transition-colors shadow-lg shadow-brand-500/30">
                                <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-xs text-brand-500">{lang === 'en' ? 'Services' : 'সেবাসমূহ'}</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-400">
                                {['Corporate Strategy', 'M&A Advisory', 'Legal Frameworks', 'Cloud Infrastructure'].map((item, i) => (
                                    <li key={i}><a href="#" className="hover:text-white transition-colors relative group block w-fit"><span className="relative z-10">{item}</span><span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-brand-500 transition-all duration-300 group-hover:w-full"></span></a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-xs text-brand-500">{lang === 'en' ? 'Industries' : 'শিল্পখাত'}</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-400">
                                {['Financial Services', 'Healthcare', 'Energy', 'Public Sector'].map((item, i) => (
                                    <li key={i}><a href="#" className="hover:text-white transition-colors relative group block w-fit"><span className="relative z-10">{item}</span><span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-brand-500 transition-all duration-300 group-hover:w-full"></span></a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-xs text-brand-500">{lang === 'en' ? 'Firm' : 'প্রতিষ্ঠান'}</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-400">
                                {['About Us', 'Leadership', 'Careers', 'Contact'].map((item, i) => (
                                    <li key={i}><a href="#" className="hover:text-white transition-colors relative group block w-fit"><span className="relative z-10">{item}</span><span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-brand-500 transition-all duration-300 group-hover:w-full"></span></a></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-8 uppercase tracking-[0.2em] text-xs text-brand-500">{lang === 'en' ? 'Offices' : 'অফিস'}</h4>
                            <ul className="space-y-4 text-sm font-medium text-gray-400">
                                <li>New York</li>
                                <li>London</li>
                                <li>Dubai</li>
                                <li>Dhaka</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-xs font-bold tracking-wider text-gray-600">
                    <p>&copy; {new Date().getFullYear()} INCEPTION 23 INC. {lang === 'en' ? 'ALL RIGHTS RESERVED.' : 'সর্বস্বত্ব সংরক্ষিত।'}</p>
                    <div className="flex gap-8 mt-6 md:mt-0">
                        <a href="#" className="hover:text-gray-400 transition-colors">PRIVACY POLICY</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">TERMS OF USE</a>
                        <a href="#" className="hover:text-gray-400 transition-colors">COOKIE SETTINGS</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};