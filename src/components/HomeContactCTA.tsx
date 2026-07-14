'use client';

import { useTranslations } from 'next-intl';
import { companyInfo } from '@/data/company';

export default function HomeContactCTA() {
  const t = useTranslations('Home');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-kinkonac-navy to-kinkonac-navy-dark py-20 lg:py-28">
      {/* Background Decor */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 industrial-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-kinkonac-orange/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
          {t('contactTitle')}
        </h2>
        <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('contactSubtitle')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href={`tel:${companyInfo.phones[0].replace(/\s/g, '')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-kinkonac-orange to-kinkonac-orange-light text-white font-bold text-lg rounded-xl hover:from-kinkonac-orange-dark hover:to-kinkonac-orange shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {t('callNow')}: {companyInfo.phones[0]}
          </a>

          <a
            href={companyInfo.social.zalo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg rounded-xl hover:bg-white/20 shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.544 10.518c0-4.636-4.5-8.518-10.272-8.518S1 5.882 1 10.518c0 4.14 3.597 7.6 8.5 8.358v3.524l3.522-1.921c.214.041.433.078.65.111 5.485-.398 9.872-4.225 9.872-8.871zm-13.62 1.94a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v3.5h2.5a.5.5 0 0 1 0 1h-3zM15 12h-2v-.5a1.5 1.5 0 0 1 1.5-1.5h.5a.5.5 0 0 0 0-1h-1.5a.5.5 0 0 1 0-1h1.5a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5H14v.5h1a.5.5 0 0 1 0 1z"/>
            </svg>
            {t('chatZalo')}
          </a>
        </div>
      </div>
    </section>
  );
}
