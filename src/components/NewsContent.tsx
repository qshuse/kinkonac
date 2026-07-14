'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { newsArticles } from '@/data/news';
import type { Locale } from '@/data/types';

export default function NewsContent() {
  const t = useTranslations('News');
  const locale = useLocale() as Locale;

  const featuredPost = newsArticles[0];
  const sidePosts = newsArticles.slice(1, 4);
  const latestPosts = newsArticles.slice(4); // from index 4 onwards

  return (
    <>
      {/* Hero Header */}
      <section className="bg-kinkonac-navy py-12 relative overflow-hidden">
        <div className="absolute inset-0 industrial-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 animate-slide-up">
            {t('pageTitle')}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {t('pageSubtitle')}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 bg-bg-silver min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section: Featured + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            
            {/* Left: Main Featured Post */}
            <div className="lg:col-span-2">
              <Link href={`/news/${featuredPost.slug}`} className="group block relative rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full min-h-[400px]">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-kinkonac-navy/80 via-kinkonac-navy-light/70 to-kinkonac-navy/60 group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 industrial-pattern opacity-20" />
                </div>
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full text-white">
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-sm font-medium">
                    <span className="px-3 py-1 bg-kinkonac-orange rounded-full">
                      {featuredPost.category[locale]}
                    </span>
                    <span className="flex items-center gap-1 text-white/80">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {featuredPost.date}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-kinkonac-orange transition-colors duration-200 line-clamp-3">
                    {featuredPost.title[locale]}
                  </h2>
                  <p className="text-white/80 line-clamp-2 md:line-clamp-3 text-sm md:text-base">
                    {featuredPost.summary[locale]}
                  </p>
                </div>
              </Link>
            </div>

            {/* Right: Side Posts */}
            <div className="flex flex-col gap-6">
              {sidePosts.map((post) => (
                <Link key={post.id} href={`/news/${post.slug}`} className="group flex gap-4 bg-white p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                  {/* Thumb Placeholder */}
                  <div className="w-1/3 shrink-0 rounded-xl overflow-hidden relative bg-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-kinkonac-navy/30 to-kinkonac-navy/10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center">
                    <span className="text-xs font-bold text-kinkonac-orange mb-1 uppercase tracking-wider">
                      {post.category[locale]}
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-kinkonac-navy group-hover:text-kinkonac-orange transition-colors duration-200 line-clamp-2 mb-2">
                      {post.title[locale]}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-text-slate-light mt-auto">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.views} views</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>

          {/* Latest News Grid */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-kinkonac-navy mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-kinkonac-orange rounded-full"></span>
              {t('latestNews')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestPosts.map((post) => (
                <Link key={post.id} href={`/news/${post.slug}`} className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="h-40 relative bg-gray-200 overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-br from-kinkonac-navy/40 to-kinkonac-navy/20 group-hover:scale-110 transition-transform duration-500" />
                     <span className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm text-kinkonac-navy text-xs font-bold rounded-lg shadow-sm">
                       {post.category[locale]}
                     </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-base font-bold text-kinkonac-navy group-hover:text-kinkonac-orange transition-colors duration-200 line-clamp-2 mb-2">
                      {post.title[locale]}
                    </h3>
                    <p className="text-sm text-text-slate-light line-clamp-2 mb-4 flex-1">
                      {post.summary[locale]}
                    </p>
                    <div className="flex items-center justify-between text-xs text-text-slate-light mt-auto pt-4 border-t border-gray-100">
                      <span className="flex items-center gap-1">
                         <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                         {post.readTime} min read
                      </span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {latestPosts.length === 0 && (
               <p className="text-text-slate-light text-center py-10">No more articles available.</p>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
