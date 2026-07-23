'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import { Link, useRouter } from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import { companyInfo } from '@/data/company';
import { categories } from '@/data/category';
import type { Locale } from '@/data/types';

export default function Header() {
  const t = useTranslations('Header');
  const locale = useLocale();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { key: 'home', href: '/' },
    { key: 'about', href: '/about' },
    { key: 'category', href: '/products' },
    { key: 'products', href: '/products' },
    { key: 'contact', href: '#contact' },
  ] as const;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-nav">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-6 lg:gap-8">
          {/* Left Column: Hotline & Logo */}
          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            {/* Direct Phone Link (Hidden on mobile) */}
            <a
              href={`tel:${companyInfo.phones[0]}`}
              className="hidden lg:inline-flex items-center justify-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-kinkonac-orange to-kinkonac-orange-light text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-orange-500/20 hover:scale-[1.02] transition-all duration-200 shrink-0"
              title="Hotline"
            >
              <svg className="w-4 h-4 text-white shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="whitespace-nowrap">
                Hotline: {companyInfo.phones[0]}
              </span>
            </a>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-1.5 group">
              {/* Image Logo */}
              <div className="relative flex items-center justify-center overflow-hidden h-14 lg:h-16 w-28 sm:w-36">
                <img
                  src="/logo.png"
                  alt="KINKONAC Logo"
                  className="w-full h-full object-contain scale-[1.5] sm:scale-[1.7] mix-blend-darken transition-transform duration-300 hover:scale-[1.55] sm:hover:scale-[1.75]"
                  onError={(e) => {
                    // Fallback if image not found yet
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Fallback Text Logo */}
                <div className="hidden flex items-center gap-3">
                  <span className="text-xl lg:text-2xl font-extrabold tracking-tight text-kinkonac-navy">
                    KINKO<span className="text-kinkonac-orange">NAC</span>
                  </span>
                  <p className="text-[10px] font-medium text-text-slate-light tracking-widest uppercase hidden sm:block">
                    Air Compressors
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Center Column: Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-5 xl:gap-8">
            {navLinks.map((link) => {
              if (link.key === 'category') {
                return (
                  <div key={link.key} className="relative group py-2">
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1 px-3.5 py-2 text-[14px] lg:text-[15px] xl:text-[16px] font-bold text-slate-800 hover:text-kinkonac-orange rounded-lg hover:bg-kinkonac-navy/5 transition-all duration-200 whitespace-nowrap"
                    >
                      {t(link.key)}
                      <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-kinkonac-orange transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Link>
                    {/* Dropdown */}
                    <div className="absolute left-0 mt-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2">
                        {categories.map((category) => (
                          <Link
                            key={category.id}
                            href={`/products?category=${category.id}`}
                            className="block px-5 py-3 text-[14px] font-bold text-slate-800 hover:bg-kinkonac-navy/5 hover:text-kinkonac-orange transition-colors"
                          >
                            {category.name[locale as Locale]}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const isHashLink = link.href.startsWith('#');
              if (isHashLink) {
                return (
                  <a
                    key={link.key}
                    href={link.href}
                    className="px-3.5 py-2 text-[14px] lg:text-[15px] xl:text-[16px] font-bold text-slate-800 hover:text-kinkonac-orange rounded-lg hover:bg-kinkonac-navy/5 transition-all duration-200 whitespace-nowrap"
                  >
                    {t(link.key)}
                  </a>
                );
              }
              return (
                <Link
                  key={link.key}
                  href={link.href}
                  className="px-3.5 py-2 text-[14px] lg:text-[15px] xl:text-[16px] font-bold text-slate-800 hover:text-kinkonac-orange rounded-lg hover:bg-kinkonac-navy/5 transition-all duration-200 whitespace-nowrap"
                >
                  {t(link.key)}
                </Link>
              );
            })}
          </nav>

          {/* Right Column: Actions (Language, Search, quote) */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Desktop Search */}
            <form onSubmit={handleSearch} className="hidden lg:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('searchPlaceholder')}
                  className="pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs focus:outline-none focus:ring-2 focus:ring-kinkonac-navy/20 focus:border-kinkonac-navy transition-all w-32 xl:w-44"
                />
                <svg className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </form>

            <LanguageSwitcher />

            <a
              href={companyInfo.social.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 bg-gradient-to-r from-kinkonac-orange to-kinkonac-orange-light text-white font-semibold text-xs xl:text-sm rounded-lg hover:from-kinkonac-orange-dark hover:to-kinkonac-orange shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {t('getQuote')}
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6 text-text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 animate-slide-down">
            <nav className="flex flex-col gap-1">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="px-4 py-3 border-b border-gray-100">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t('searchPlaceholder')}
                    className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-kinkonac-navy/20"
                  />
                  <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </form>

              {navLinks.map((link) => {
                if (link.key === 'category') {
                  return (
                    <div key={link.key} className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="px-4 py-3 text-sm font-medium text-text-slate-light hover:text-kinkonac-navy hover:bg-kinkonac-navy/5 rounded-lg transition-colors flex-1"
                        >
                          {t(link.key)}
                        </Link>
                        <button
                          onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)}
                          className="p-3 text-gray-400 hover:text-kinkonac-orange transition-colors"
                        >
                          <svg className={`w-5 h-5 transition-transform duration-200 ${isMobileCategoryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      {isMobileCategoryOpen && (
                        <div className="flex flex-col pl-6 pr-4 pb-2 gap-1 border-b border-gray-50 bg-gray-50/50 rounded-lg mx-2 mb-1">
                          {categories.map((category) => (
                            <Link
                              key={category.id}
                              href={`/products?category=${category.id}`}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsMobileCategoryOpen(false);
                              }}
                              className="px-4 py-2.5 text-sm text-text-slate-light hover:text-kinkonac-orange rounded-md transition-colors"
                            >
                              {category.name[locale as Locale]}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                const isHashLink = link.href.startsWith('#');
                if (isHashLink) {
                  return (
                    <a
                      key={link.key}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 text-sm font-medium text-text-slate-light hover:text-kinkonac-navy hover:bg-kinkonac-navy/5 rounded-lg transition-colors"
                    >
                      {t(link.key)}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.key}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-text-slate-light hover:text-kinkonac-navy hover:bg-kinkonac-navy/5 rounded-lg transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                );
              })}
              <a
                href={companyInfo.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mx-4 mt-2 flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-kinkonac-orange to-kinkonac-orange-light text-white font-semibold text-sm rounded-lg"
              >
                {t('getQuote')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
