'use client';

import { useTranslations } from 'next-intl';

export default function AboutContent() {
  const t = useTranslations('About');

  const stats = [
    { value: '500+', label: t('statsClients') },
    { value: '10+', label: t('statsExperience') },
    { value: '50+', label: t('statsProducts') },
    { value: '24/7', label: t('statsSupport') },
  ];

  const reasons = [
    {
      title: t('reason1Title'),
      text: t('reason1Text'),
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: t('reason2Title'),
      text: t('reason2Text'),
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: t('reason3Title'),
      text: t('reason3Text'),
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-kinkonac-navy via-kinkonac-navy-light to-kinkonac-navy-dark py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 industrial-pattern opacity-20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-kinkonac-orange/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-kinkonac-navy-light/30 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-medium tracking-wide uppercase mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-kinkonac-orange rounded-full" />
            Est. 2015
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4 animate-slide-up">
            {t('pageTitle')}
          </h1>
          <div className="w-20 h-1.5 bg-gradient-to-r from-kinkonac-orange to-kinkonac-orange-light rounded-full mx-auto mb-6" />
          <p className="text-white/70 text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t('pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 lg:py-24 bg-bg-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div>
              <p className="text-lg text-text-slate-light leading-relaxed mb-8">
                {t('companyIntro')}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-kinkonac-navy to-kinkonac-navy-light rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-kinkonac-navy mb-1">{t('missionTitle')}</h3>
                    <p className="text-text-slate-light leading-relaxed">{t('missionText')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-kinkonac-orange to-kinkonac-orange-light rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-kinkonac-navy mb-1">{t('visionTitle')}</h3>
                    <p className="text-text-slate-light leading-relaxed">{t('visionText')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-6 text-center card-lift border border-gray-100">
                  <div className="text-3xl lg:text-4xl font-extrabold text-kinkonac-navy mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-text-slate-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-kinkonac-navy mb-4 tracking-tight">
              {t('whyChooseUs')}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-kinkonac-orange to-kinkonac-orange-light rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`group bg-bg-silver rounded-2xl p-8 card-lift border border-gray-100 opacity-0 animate-slide-up stagger-${index + 1}`}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-kinkonac-navy to-kinkonac-navy-light rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-kinkonac-navy mb-3">{reason.title}</h3>
                <p className="text-text-slate-light leading-relaxed">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
