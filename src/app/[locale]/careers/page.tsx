import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { jobListings } from '@/data/careers';
import type { Locale } from '@/data/types';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CareersPage() {
  const t = useTranslations('Careers');
  const locale = useLocale() as Locale;

  return (
    <div className="min-h-screen flex flex-col bg-kinkonac-light">
      <Header />
      <main className="flex-1 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-kinkonac-navy mb-4 tracking-tight">
              {t('title')}
            </h1>
            <p className="text-lg text-text-slate max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-kinkonac-orange to-kinkonac-orange-light mx-auto mt-6 rounded-full" />
          </div>

          {/* Job Listings */}
          <div className="grid gap-6">
            {jobListings.map((job) => (
              <Link
                key={job.id}
                href={`/careers/${job.id}`}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-kinkonac-orange/30 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-kinkonac-navy/10 text-kinkonac-navy">
                      {job.department[locale]}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-kinkonac-orange/10 text-kinkonac-orange">
                      {job.type[locale]}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-kinkonac-navy mb-2 group-hover:text-kinkonac-orange transition-colors">
                    {job.title[locale]}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-text-slate-light">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {job.location[locale]}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {job.salary[locale]}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {job.datePosted}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-4 mt-2 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-gray-100">
                  <span className="md:hidden text-sm font-semibold text-kinkonac-navy">
                    {t('viewDetails')}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-kinkonac-navy text-white flex items-center justify-center group-hover:bg-kinkonac-orange group-hover:-translate-y-1 transition-all shadow-md">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
