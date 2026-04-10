'use client';

import React, { useEffect, useState } from 'react';
import { useAppStore } from '@/lib/store';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';

const nav = {
  en: ['Services', 'Industries', 'Insights', 'Team', 'Global'],
  bn: ['সেবাসমূহ', 'শিল্পখাত', 'অন্তর্দৃষ্টি', 'টিম', 'গ্লোবাল'],
};

export const Header = () => {
  const { lang, theme, toggleLang, toggleTheme } = useAppStore();

  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavVisible, setMobileNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isLight = theme === 'light';

  useEffect(() => {
    const handleScroll = () => {
      const sections = nav.en.map((s) => s.toLowerCase());
      let current = '';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 140) {
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
    const handleShrink = () => {
      if (window.innerWidth >= 1024) {
        setIsScrolled(window.scrollY > 40);
      } else {
        setIsScrolled(false);
      }
    };

    handleShrink();
    window.addEventListener('scroll', handleShrink);
    window.addEventListener('resize', handleShrink);

    return () => {
      window.removeEventListener('scroll', handleShrink);
      window.removeEventListener('resize', handleShrink);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const handleMobileNavbar = () => {
      if (window.innerWidth >= 1024) {
        setMobileNavVisible(true);
        setLastScrollY(window.scrollY);
        return;
      }

      if (mobileMenu) {
        setMobileNavVisible(true);
        setLastScrollY(window.scrollY);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY <= 10) {
        setMobileNavVisible(true);
      } else if (currentScrollY > lastScrollY + 4) {
        setMobileNavVisible(false);
      } else if (currentScrollY < lastScrollY - 4) {
        setMobileNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileNavVisible(true);
      }
    };

    handleMobileNavbar();
    window.addEventListener('scroll', handleMobileNavbar, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleMobileNavbar);
      window.removeEventListener('resize', handleResize);
    };
  }, [lastScrollY, mobileMenu]);

  return (
    <>
      <div
        className={`h-[76px] sm:h-[84px] lg:transition-all lg:duration-300 ${
          isScrolled ? 'lg:h-[72px]' : 'lg:h-[92px]'
        }`}
      />

      <header
        className={`fixed top-0 left-0 z-50 w-full transform transition-transform duration-300 ease-out lg:translate-y-0 ${
          mobileNavVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isLight
            ? isScrolled
              ? 'border-slate-300/70 bg-[#f3f8f9]/78 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.06)]'
              : 'border-slate-300/80 bg-[#f3f8f9]'
            : isScrolled
              ? 'border-white/10 bg-[rgba(24,27,44,0.72)] backdrop-blur-xl shadow-[0_10px_34px_rgba(0,0,0,0.26)]'
              : 'border-white/10 bg-[rgb(24,27,44)]'
        } lg:transition-all lg:duration-300`}
      >
        <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-6 lg:px-10">
          <div
            className={`flex items-center justify-between gap-3 sm:gap-6 h-[76px] sm:h-[84px] lg:transition-all lg:duration-300 ${
              isScrolled ? 'lg:h-[72px]' : 'lg:h-[92px]'
            }`}
          >
            <a
              href="#home"
              className="group flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3 lg:flex-none"
              suppressHydrationWarning
            >
              <div
                className={`relative flex shrink-0 items-center justify-center h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12 lg:transition-all lg:duration-300 ${
                  isScrolled ? 'lg:h-10 lg:w-10' : 'lg:h-12 lg:w-12'
                }`}
              >
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.28)_0%,rgba(109,40,217,0.22)_45%,rgba(44,20,91,0.06)_100%)] blur-[1px]" />

                <div
                  className={`relative z-10 flex items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(145deg,#7c3aed_0%,#5b21b6_38%,#3b136f_72%,#2c145b_100%)] font-serif font-bold text-white shadow-[0_10px_24px_rgba(44,20,91,0.36)] h-8 w-8 text-sm sm:h-10 sm:w-10 sm:text-lg md:h-11 md:w-11 md:text-xl lg:transition-all lg:duration-300 ${
                    isScrolled ? 'lg:h-9 lg:w-9 lg:text-base' : 'lg:h-11 lg:w-11'
                  }`}
                >
                  <div className="pointer-events-none absolute inset-[1px] rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.06)_35%,transparent_65%)]" />
                  <span className="relative z-10">I</span>
                </div>
              </div>

              <div className="flex min-w-0 max-w-[calc(100vw-122px)] flex-col justify-center sm:max-w-none">
                <span
                  className={`truncate font-serif font-bold leading-none tracking-[-0.04em] ${
                    isLight ? 'text-[#111c34]' : 'text-white'
                  } text-[1.15rem] xs:text-[1.25rem] sm:text-[2rem] md:text-[2.15rem] lg:transition-all lg:duration-300 ${
                    isScrolled ? 'lg:text-[1.85rem]' : 'lg:text-[2.15rem]'
                  }`}
                >
                  INCEPTION
                  <span className="ml-1 text-brand-500">23</span>
                </span>

                <span
                  className={`hidden text-[10px] font-semibold uppercase tracking-[0.24em] md:block ${
                    isLight ? 'text-slate-500' : 'text-white/38'
                  } lg:transition-all lg:duration-300 ${
                    isScrolled ? 'lg:opacity-0 lg:h-0 lg:overflow-hidden' : 'lg:opacity-100'
                  }`}
                >
                  {lang === 'en' ? 'Strategic Advisory' : 'স্ট্র্যাটেজিক অ্যাডভাইজরি'}
                </span>
              </div>
            </a>

            <div className="hidden min-w-0 flex-1 items-center justify-end lg:flex">
              <div
                className={`flex min-w-0 items-center justify-end transition-all duration-300 ${
                  isScrolled ? 'gap-4 xl:gap-5' : 'gap-5 xl:gap-7'
                }`}
              >
                <nav
                  className="flex items-center justify-end gap-1 xl:gap-2"
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  {nav[lang].map((item, i) => {
                    const sectionId = nav.en[i].toLowerCase();
                    const isActive = activeSection === sectionId;
                    const isHovered = hoveredSection === sectionId;

                    return (
                      <a
                        key={sectionId}
                        href={`#${sectionId}`}
                        onMouseEnter={() => setHoveredSection(sectionId)}
                        className={`relative rounded-full font-bold uppercase tracking-[0.14em] transition-all duration-300 xl:text-xs ${
                          isScrolled
                            ? 'px-2.5 py-1.5 text-[10px]'
                            : 'px-3 py-2 text-[11px] xl:px-4'
                        } ${
                          isLight
                            ? isActive || isHovered
                              ? 'text-[#111c34]'
                              : 'text-slate-600'
                            : isActive || isHovered
                              ? 'text-white'
                              : 'text-white/72'
                        }`}
                      >
                        <span className="relative z-10 whitespace-nowrap">
                          {item}
                        </span>

                        {isHovered && (
                          <motion.div
                            layoutId="desktopNavHover"
                            className={`absolute inset-0 rounded-full ${
                              isLight ? 'bg-slate-900/7' : 'bg-white/12'
                            }`}
                            transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                          />
                        )}

                        {isActive && !isHovered && (
                          <motion.div
                            layoutId="desktopNavActive"
                            className={`absolute inset-0 rounded-full ${
                              isLight ? 'bg-brand-600/12' : 'bg-brand-600/35'
                            }`}
                            transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                          />
                        )}
                      </a>
                    );
                  })}
                </nav>

                <div
                  className={`shrink-0 transition-all duration-300 ${
                    isLight ? 'bg-slate-300/80' : 'bg-white/10'
                  } ${isScrolled ? 'h-7 w-px' : 'h-8 w-px'}`}
                />

                <div
                  className={`flex shrink-0 items-center transition-all duration-300 ${
                    isScrolled ? 'gap-2.5' : 'gap-3'
                  }`}
                >
                  <button
                    onClick={toggleLang}
                    className={`rounded-full border font-bold transition-all duration-300 ${
                      isLight
                        ? 'border-slate-300 bg-[#f3f8f9] text-[#111c34] hover:bg-white'
                        : 'border-white/20 bg-black/20 text-white hover:bg-white/10'
                    } ${
                      isScrolled
                        ? 'h-9 min-w-[40px] px-2.5 text-[11px]'
                        : 'h-10 min-w-[44px] px-3 text-xs'
                    }`}
                  >
                    {lang === 'en' ? 'BN' : 'EN'}
                  </button>

                  <button
                    onClick={toggleTheme}
                    className={`flex items-center justify-center rounded-full border transition-all duration-300 ${
                      isLight
                        ? 'border-slate-300 bg-[#f3f8f9] text-[#111c34] hover:bg-white'
                        : 'border-white/20 bg-black/20 text-white hover:bg-white/10 hover:text-brand-400'
                    } ${isScrolled ? 'h-9 w-9' : 'h-10 w-10'}`}
                  >
                    {theme === 'light' ? (
                      <Moon size={isScrolled ? 15 : 16} />
                    ) : (
                      <Sun size={isScrolled ? 15 : 16} />
                    )}
                  </button>

                  <button
                    className={`group relative overflow-hidden rounded-full font-bold uppercase tracking-[0.18em] transition-all duration-300 ${
                      isLight
                        ? 'bg-[#111c34] text-white hover:shadow-[0_0_24px_rgba(17,28,52,0.16)]'
                        : 'bg-white text-brand-950 hover:shadow-[0_0_30px_rgba(255,255,255,0.22)]'
                    } ${
                      isScrolled
                        ? 'px-4 py-2 text-[10px] xl:px-5'
                        : 'px-5 py-2.5 text-[11px] xl:px-6 xl:text-xs'
                    }`}
                  >
                    <div
                      className={`absolute inset-0 translate-y-[100%] transition-transform duration-300 group-hover:translate-y-0 ${
                        isLight
                          ? 'bg-[#0d1529]'
                          : 'bg-gradient-to-r from-brand-100 to-brand-50'
                      }`}
                    />
                    <span className="relative z-10">
                      {lang === 'en' ? 'Inquire' : 'অনুসন্ধান'}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 lg:hidden">
              <button
                onClick={toggleTheme}
                className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border transition ${
                  isLight
                    ? 'border-slate-300 bg-[#f3f8f9] text-[#111c34] hover:bg-white'
                    : 'border-white/15 bg-black/20 text-white hover:bg-white/10'
                }`}
              >
                {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
              </button>

              <button
                onClick={() => {
                  setMobileNavVisible(true);
                  setMobileMenu((prev) => !prev);
                }}
                className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border transition ${
                  isLight
                    ? 'border-slate-300 bg-[#f3f8f9] text-[#111c34] hover:bg-white'
                    : 'border-white/15 bg-black/20 text-white hover:bg-white/10'
                }`}
              >
                {mobileMenu ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className={`fixed inset-0 z-[60] backdrop-blur-2xl lg:hidden ${
              isLight ? 'bg-[#f3f8f9]/95' : 'bg-[rgba(10,12,22,0.96)]'
            }`}
          >
            <div className="flex h-full flex-col px-5 pb-8 pt-24 sm:px-6">
              <div
                className={`rounded-3xl border p-4 shadow-2xl ${
                  isLight
                    ? 'border-slate-200 bg-[#f3f8f9]'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                <div className="flex flex-col">
                  {nav[lang].map((item, i) => {
                    const sectionId = nav.en[i].toLowerCase();

                    return (
                      <a
                        key={sectionId}
                        href={`#${sectionId}`}
                        onClick={() => setMobileMenu(false)}
                        className={`border-b py-4 text-lg font-semibold last:border-b-0 ${
                          isLight
                            ? 'border-slate-200 text-[#111c34]'
                            : 'border-white/10 text-white'
                        }`}
                      >
                        {item}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    toggleLang();
                    setMobileMenu(false);
                  }}
                  className={`rounded-full border px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] transition ${
                    isLight
                      ? 'border-slate-300 bg-[#f3f8f9] text-[#111c34] hover:bg-white'
                      : 'border-white/15 bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {lang === 'en' ? 'Switch BN' : 'Switch EN'}
                </button>

                <button
                  onClick={toggleTheme}
                  className={`rounded-full border px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] transition ${
                    isLight
                      ? 'border-slate-300 bg-[#f3f8f9] text-[#111c34] hover:bg-white'
                      : 'border-white/15 bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {theme === 'light'
                    ? lang === 'en'
                      ? 'Dark Mode'
                      : 'ডার্ক মোড'
                    : lang === 'en'
                      ? 'Light Mode'
                      : 'লাইট মোড'}
                </button>
              </div>

              <button
                onClick={() => setMobileMenu(false)}
                className={`mt-auto rounded-full px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] transition ${
                  isLight ? 'bg-[#111c34] text-white' : 'bg-white text-brand-950'
                }`}
              >
                {lang === 'en' ? 'Inquire' : 'অনুসন্ধান'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};