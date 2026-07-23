'use client';

import { useTranslations } from 'next-intl';
import { companyInfo } from '@/data/company';

export default function AboutContent() {
  const t = useTranslations('About');

  const stats = [
    { value: '500+', label: t('statsClients'), icon: '🏭' },
    { value: '10+', label: t('statsExperience'), icon: '⭐' },
    { value: '50+', label: t('statsProducts'), icon: '⚙️' },
    { value: '99.8%', label: t('statsSatisfaction'), icon: '🎯' },
  ];

  const pillars = [
    {
      title: t('tech1Title'),
      desc: t('tech1Text'),
      badge: 'Cooling System',
      icon: (
        <svg className="w-6 h-6 text-kinkonac-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.595 15.12a2 2 0 00-1.805.525L2.34 17.094a2 2 0 00.586 3.414l.707.177a10 10 0 0011.666-5.597l1.018-2.544a2 2 0 00-.547-2.122z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v10m0 0l-3-3m3 3l3-3" />
        </svg>
      ),
    },
    {
      title: t('tech2Title'),
      desc: t('tech2Text'),
      badge: 'Inverter VSD',
      icon: (
        <svg className="w-6 h-6 text-kinkonac-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: t('tech3Title'),
      desc: t('tech3Text'),
      badge: 'Air Filtration',
      icon: (
        <svg className="w-6 h-6 text-kinkonac-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: t('tech4Title'),
      desc: t('tech4Text'),
      badge: 'Silent Tech',
      icon: (
        <svg className="w-6 h-6 text-kinkonac-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
        </svg>
      ),
    },
  ];

  const processSteps = [
    { step: '01', title: t('step1Title'), desc: t('step1Text') },
    { step: '02', title: t('step2Title'), desc: t('step2Text') },
    { step: '03', title: t('step3Title'), desc: t('step3Text') },
    { step: '04', title: t('step4Title'), desc: t('step4Text') },
  ];

  const reasons = [
    {
      title: t('reason1Title'),
      text: t('reason1Text'),
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: t('reason2Title'),
      text: t('reason2Text'),
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 5.636l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: t('reason3Title'),
      text: t('reason3Text'),
      icon: (
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-kinkonac-navy-dark via-kinkonac-navy to-slate-900 py-16 lg:py-24 relative overflow-hidden text-white">
        <div className="absolute inset-0 industrial-pattern opacity-15" />
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-kinkonac-orange/15 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs font-semibold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 bg-kinkonac-orange rounded-full animate-ping" />
            <span>Est. 2015 • ISO 9001:2015</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
            {t('pageTitle')}
          </h1>

          <div className="w-24 h-1.5 bg-gradient-to-r from-kinkonac-orange to-kinkonac-orange-light rounded-full mx-auto mb-6" />

          <p className="text-white/80 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-8 font-normal">
            {t('pageSubtitle')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${companyInfo.phones[0]}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-kinkonac-orange to-kinkonac-orange-light text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Hotline: {companyInfo.phones[0]}</span>
            </a>
            <a
              href={companyInfo.social.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold text-sm rounded-xl transition-all duration-200"
            >
              <span>Zalo Tư Vấn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Impact Stats Floating Bar */}
      <section className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {stats.map((stat, idx) => (
            <div key={idx} className={`flex flex-col items-center text-center ${idx !== 0 ? 'pt-4 sm:pt-0' : ''}`}>
              <span className="text-2xl mb-1">{stat.icon}</span>
              <span className="text-3xl sm:text-4xl font-extrabold text-kinkonac-navy tracking-tight mb-1">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Company Overview & Mission / Vision / Philosophy */}
      <section className="py-16 lg:py-24 bg-bg-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Story Card */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-kinkonac-orange/10 to-transparent rounded-bl-full pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-kinkonac-navy/5 text-kinkonac-navy text-xs font-bold uppercase tracking-wider mb-4">
                Về Chúng Tôi
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-kinkonac-navy mb-6 leading-snug">
                Hành Trình Hơn 1 Thập Kỷ Xây Dựng Niềm Tin Khí Nén
              </h2>

              <p className="text-slate-600 leading-relaxed mb-6 text-base">
                {t('companyIntro')}
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-kinkonac-orange/10 text-kinkonac-orange flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Trụ Sở & Xưởng Dịch Vụ</h4>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">{companyInfo.address}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Máy nén khí trục vít', 'Sấy lạnh công nghiệp', 'Bình tích khí áp lực', 'Lọc khí đa cấp', 'Phụ tùng chính hãng'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Mission, Vision, Philosophy Cards */}
            <div className="lg:col-span-6 space-y-5">
              {/* Mission */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:border-kinkonac-navy/20 transition-all duration-300 group">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-kinkonac-navy to-kinkonac-navy-light text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-kinkonac-navy mb-2">{t('missionTitle')}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{t('missionText')}</p>
                  </div>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:border-kinkonac-orange/20 transition-all duration-300 group">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-kinkonac-orange to-kinkonac-orange-light text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-kinkonac-navy mb-2">{t('visionTitle')}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{t('visionText')}</p>
                  </div>
                </div>
              </div>

              {/* Business Philosophy */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:border-blue-500/20 transition-all duration-300 group">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-kinkonac-navy mb-2">{t('corePhilosophyTitle')}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{t('corePhilosophyText')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Technology */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-kinkonac-orange/10 text-kinkonac-orange-dark text-xs font-bold uppercase tracking-wider mb-3">
              KINKONAC Technology
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-kinkonac-navy tracking-tight mb-4">
              {t('techTitle')}
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              {t('techSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-bg-silver rounded-3xl p-6 sm:p-8 border border-gray-100 hover:border-kinkonac-orange/30 hover:bg-white hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-kinkonac-orange/10 flex items-center justify-center shadow-sm transition-colors">
                      {pillar.icon}
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-200 text-slate-700">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-kinkonac-navy mb-3 group-hover:text-kinkonac-orange transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Professional Workflow */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-bg-silver to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-kinkonac-navy/10 text-kinkonac-navy text-xs font-bold uppercase tracking-wider mb-3">
              Workflow Standard
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-kinkonac-navy tracking-tight mb-4">
              {t('processTitle')}
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              {t('processSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 relative group hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl font-black text-slate-200 group-hover:text-kinkonac-orange/40 transition-colors mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-kinkonac-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-kinkonac-navy mb-4 tracking-tight">
              {t('whyChooseUs')}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-kinkonac-orange to-kinkonac-orange-light rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group bg-bg-silver rounded-3xl p-8 border border-gray-100 hover:border-kinkonac-navy/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-kinkonac-navy to-kinkonac-navy-light rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-kinkonac-navy mb-3">{reason.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Converting CTA Banner */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-kinkonac-navy-dark via-kinkonac-navy to-kinkonac-navy-light text-white relative overflow-hidden">
        <div className="absolute inset-0 industrial-pattern opacity-10" />
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-kinkonac-orange/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 tracking-tight">
            {t('ctaTitle')}
          </h2>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            {t('ctaSubtitle')}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${companyInfo.phones[0]}`}
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-gradient-to-r from-kinkonac-orange to-kinkonac-orange-light text-white font-bold text-sm rounded-2xl shadow-xl hover:shadow-orange-500/30 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{t('ctaCall')}</span>
            </a>
            <a
              href={companyInfo.social.zalo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-white text-kinkonac-navy font-bold text-sm rounded-2xl shadow-lg hover:bg-gray-50 transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>{t('ctaZalo')}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
