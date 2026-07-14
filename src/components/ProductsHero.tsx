'use client';

import { useTranslations } from 'next-intl';

export default function ProductsHero() {
  const t = useTranslations('Products');

  return (
    <section className="bg-gradient-to-br from-kinkonac-navy via-kinkonac-navy-light to-kinkonac-navy-dark py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 industrial-pattern opacity-20" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-kinkonac-orange/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 animate-slide-up">
          {t('sectionTitle')}
        </h1>
        <div className="w-20 h-1.5 bg-gradient-to-r from-kinkonac-orange to-kinkonac-orange-light rounded-full mx-auto mb-6" />
        <p className="text-white/70 text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {t('sectionSubtitle')}
        </p>
      </div>
    </section>
  );
}
