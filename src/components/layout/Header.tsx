'use client';

import React, { useEffect, useState } from 'react';
import { useAppStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';

const nav = {
  en: ['Services', 'Industries', 'Insights', 'Team', 'Global'],
  bn: ['সেবাসমূহ', 'শিল্পখাত', 'অন্তর্দৃষ্টি', 'টিম', 'অফিস']
};

export const Header = () => {
  const { lang, theme, toggleLang, toggleTheme } = useAppStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = nav.en.map((s) => s.toLowerCase());
      let current = '';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 150) {
          current = section;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <>
      {/* Spacer so fixed header doesn't overlap page */}
      <div className={`w-full transition-all duration-300 ${scrolled ? 'h-[84px]' : 'h-[144px]'}`} />

      <header
        className={`fixed top-0 left-0 w-full z-50 bg-[rgb(24,27,44)] transition-all duration-300 ${scrolled
            ? 'backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.35)] py-3 border-b border-white/10'
            : 'py-5 border-b border-transparent'
          }`}
      >
        {/* TOP ROW */}
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between gap-4">
            {/* LOGO */}
            <a
              href="#home"
              className="shrink-0 flex items-center gap-3"
              suppressHydrationWarning
            >
              <div
                className={`bg-gradient-to-br from-brand-600 to-brand-800 rounded-full flex items-center justify-center text-white font-serif font-bold shadow-brand-700/50 shadow-lg relative overflow-hidden group transition-all duration-300 ${scrolled ? 'w-9 h-9 text-lg' : 'w-11 h-11 text-xl'
                  }`}
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/50 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700" />
                <span className="relative z-10">I</span>
              </div>

              <span
                className={`font-serif font-bold tracking-tight text-white drop-shadow-md transition-all duration-300 ${scrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
                  }`}
              >
                INCEPTION<span className="text-brand-500"> 23</span>
              </span>
            </a>

            {/* DESKTOP ACTIONS */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={toggleLang}
                className={`rounded-full bg-black/20 border border-white/20 hover:bg-white/10 transition-all text-white flex items-center justify-center font-bold ${scrolled ? 'w-9 h-9 text-[11px]' : 'w-10 h-10 text-xs'
                  }`}
              >
                {lang === 'en' ? 'BN' : 'EN'}
              </button>

              <button
                onClick={toggleTheme}
                className={`rounded-full bg-black/20 border border-white/20 hover:bg-white/10 transition-all text-white flex items-center justify-center hover:text-brand-400 ${scrolled ? 'w-9 h-9' : 'w-10 h-10'
                  }`}
              >
                {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
              </button>

              <button
                className={`relative group bg-white text-brand-950 rounded-full font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.35)] overflow-hidden ${scrolled ? 'px-4 py-2 text-[11px]' : 'px-6 py-2.5 text-xs'
                  }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-100 to-brand-50 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative z-10 block">
                  {lang === 'en' ? 'Inquire' : 'অনুসন্ধান'}
                </span>
              </button>
            </div>

            {/* MOBILE ACTIONS */}
            <div className="flex lg:hidden items-center gap-2">
              <button onClick={toggleTheme} className="p-2 text-white">
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>

              <button
                className="text-white p-2 rounded-full bg-black/20 border border-white/20 hover:bg-white/10 transition-colors z-[60]"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                {mobileMenu ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: hidden on scroll, same old-navbar behavior */}
        <div
          className={`hidden lg:block mt-4 border-t border-white/10 transition-all duration-300 ${scrolled ? 'hidden' : 'block'
            }`}
        >
          <div className="container mx-auto px-6">
            <nav
              className="flex items-center justify-center gap-2 py-3"
              onMouseLeave={() => setHoveredSection(null)}
            >
              {nav[lang].map((item, i) => {
                const sectionId = nav.en[i].toLowerCase();
                const isActive = activeSection === sectionId;
                const isHovered = hoveredSection === sectionId;

                return (
                  <a
                    key={i}
                    href={`#${sectionId}`}
                    onMouseEnter={() => setHoveredSection(sectionId)}
                    className={`relative px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] transition-colors duration-300 z-10 rounded-full ${isActive || isHovered ? 'text-white' : 'text-white/70'
                      }`}
                  >
                    <span className="relative z-10">{item}</span>

                    {isHovered && (
                      <motion.div
                        layoutId="navHover"
                        className="absolute inset-0 bg-white/15 rounded-full"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      />
                    )}

                    {isActive && !isHovered && (
                      <motion.div
                        layoutId="navActive"
                        className="absolute inset-0 bg-brand-600/40 rounded-full"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[55] bg-night-950/95 backdrop-blur-3xl pt-32 px-6 flex flex-col lg:hidden"
          >
            <div className="flex flex-col gap-6 h-full pb-12 overflow-y-auto">
              {nav[lang].map((item, i) => {
                const sectionId = nav.en[i].toLowerCase();

                return (
                  <motion.a
                    key={i}
                    href={`#${sectionId}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, type: 'spring' }}
                    onClick={() => setMobileMenu(false)}
                    className="text-4xl font-serif font-bold text-white border-b border-white/10 pb-6 hover:pl-4 hover:text-brand-400 transition-all"
                  >
                    {item}
                  </motion.a>
                );
              })}

              <div className="mt-auto space-y-4">
                <button
                  onClick={() => {
                    toggleLang();
                    setMobileMenu(false);
                  }}
                  className="w-full py-4 border border-white/20 rounded-full font-bold text-white hover:bg-white/10 transition-colors uppercase tracking-[0.2em]"
                >
                  {lang === 'en' ? 'Switch to Bangla' : 'Switch to English'}
                </button>

                <button
                  className="w-full bg-brand-600 text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-500 transition-colors shadow-2xl shadow-brand-500/30"
                  onClick={() => setMobileMenu(false)}
                >
                  {lang === 'en' ? 'Start Inquiry' : 'অনুসন্ধান'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};