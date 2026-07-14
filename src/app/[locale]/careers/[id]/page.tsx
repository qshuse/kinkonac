import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { jobListings } from '@/data/careers';
import type { Locale } from '@/data/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function JobDetailsPage({ params }: { params: Promise<{ id: string, locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  const t = await getTranslations({ locale, namespace: 'Careers' });
  const job = jobListings.find(j => j.id === resolvedParams.id);

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link href="/careers" className="inline-flex items-center gap-2 text-kinkonac-navy hover:text-kinkonac-orange transition-colors font-medium mb-8">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t('backToList')}
          </Link>

          {/* Job Header */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-kinkonac-navy/10 text-kinkonac-navy">
                {job.department[locale]}
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-kinkonac-orange/10 text-kinkonac-orange">
                {job.type[locale]}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-kinkonac-navy mb-6">
              {job.title[locale]}
            </h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-gray-100">
              <div className="flex items-center gap-3 text-text-slate">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-kinkonac-navy">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-slate-light font-medium uppercase tracking-wider">{t('location')}</p>
                  <p className="font-semibold">{job.location[locale]}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-text-slate">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-kinkonac-navy">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-slate-light font-medium uppercase tracking-wider">{t('salary')}</p>
                  <p className="font-semibold text-kinkonac-orange">{job.salary[locale]}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-text-slate">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-kinkonac-navy">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-text-slate-light font-medium uppercase tracking-wider">{t('datePosted')}</p>
                  <p className="font-semibold">{job.datePosted}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center sm:text-left">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-kinkonac-navy rounded-full hover:bg-kinkonac-orange transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                {t('applyNow')}
              </a>
            </div>
          </div>

          {/* Job Content */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100">
            
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-kinkonac-navy mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-kinkonac-orange/10 text-kinkonac-orange flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                {t('description')}
              </h2>
              <p className="text-text-slate leading-relaxed">
                {job.description[locale]}
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-kinkonac-navy mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-kinkonac-orange/10 text-kinkonac-orange flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                {t('requirements')}
              </h2>
              <ul className="space-y-3">
                {job.requirements[locale].map((req, idx) => (
                  <li key={idx} className="flex gap-3 text-text-slate">
                    <span className="text-kinkonac-orange shrink-0 mt-1">•</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-kinkonac-navy mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-kinkonac-orange/10 text-kinkonac-orange flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </span>
                {t('benefits')}
              </h2>
              <ul className="space-y-3">
                {job.benefits[locale].map((benefit, idx) => (
                  <li key={idx} className="flex gap-3 text-text-slate">
                    <span className="text-kinkonac-orange shrink-0 mt-1">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
