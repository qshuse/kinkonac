'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { companyInfo } from '@/data/company';

export default function HeroBanner() {
  const t = useTranslations('Hero');

  return (
    <div className="flex flex-col w-full">
      {/* 1. Full Width Banner Image */}
      <section className="w-full bg-white">
        <img 
          src="/hero.jpg" 
          alt="KINKONAC Banner" 
          className="w-full h-auto object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </section>

      {/* 2. Blue Text Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-kinkonac-navy via-kinkonac-navy-light to-kinkonac-navy-dark py-16 lg:py-24 flex items-center">
        {/* Animated background patterns */}
        <div className="absolute inset-0">
          {/* Grid pattern */}
          <div className="absolute inset-0 industrial-pattern opacity-30" />

          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-kinkonac-orange/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-kinkonac-navy-light/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

          {/* Decorative lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>

          {/* Diagonal accent bar */}
          <div className="absolute -right-20 top-0 w-[400px] h-full bg-gradient-to-b from-kinkonac-orange/15 to-transparent transform skew-x-[-15deg]" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium tracking-wide uppercase mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-kinkonac-orange rounded-full animate-pulse" />
              ISO 9001:2015 Certified
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6 animate-slide-up">
              {t('headline')}
            </h1>

            {/* Orange accent underline */}
            <div className="w-24 h-1.5 bg-gradient-to-r from-kinkonac-orange to-kinkonac-orange-light rounded-full mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }} />

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {t('subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/products"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-kinkonac-orange to-kinkonac-orange-light text-white font-bold text-base rounded-xl hover:from-kinkonac-orange-dark hover:to-kinkonac-orange shadow-lg hover:shadow-xl transform hover:scale-[1.03] transition-all duration-300"
              >
                {t('cta')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href={companyInfo.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold text-base rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0785 338 567
              </a>
            </div>
          </div>
        </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 33.3C840 36.7 960 43.3 1080 45C1200 46.7 1320 43.3 1380 41.7L1440 40V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#F8FAFC"/>
        </svg>
      </div>
    </section>
    </div>
  );
}
