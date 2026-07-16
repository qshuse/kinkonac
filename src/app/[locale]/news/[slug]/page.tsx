import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { newsArticles } from '@/data/news';
import { routing } from '@/i18n/routing';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/data/types';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    newsArticles.map((article) => ({
      locale,
      slug: article.slug,
    }))
  );
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  const article = newsArticles.find(a => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // Use simple markdown-like rendering for our mock content
  const renderContent = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
        return <h3 key={i} className="text-xl font-bold mt-6 mb-3 text-kinkonac-navy">{line.replace(/\*\*/g, '')}</h3>;
      }
      if (line.trim().startsWith('**') && line.trim().includes(':**')) {
         const parts = line.split('**');
         return <p key={i} className="mb-4 text-text-slate leading-relaxed"><strong className="text-kinkonac-navy">{parts[1]}</strong>{parts[2]}</p>;
      }
      if (line.trim().startsWith('- ')) {
        return <li key={i} className="ml-6 mb-2 list-disc text-text-slate leading-relaxed">{line.replace('- ', '')}</li>;
      }
      if (line.trim().match(/^\d+\./)) {
        return <li key={i} className="ml-6 mb-2 list-decimal text-text-slate leading-relaxed">{line.replace(/^\d+\.\s*/, '')}</li>;
      }
      if (line.trim() === '') return null;
      
      return <p key={i} className="mb-4 text-text-slate leading-relaxed">{line}</p>;
    });
  };

  const relatedArticles = newsArticles.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-bg-silver">
      <Header />
      
      <main className="flex-1 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-text-slate-light mb-8">
            <Link href="/" className="hover:text-kinkonac-orange transition-colors">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-kinkonac-orange transition-colors">News</Link>
            <span>/</span>
            <span className="text-kinkonac-navy font-medium">{article.category[locale]}</span>
          </nav>

          {/* Article Header */}
          <article className="bg-white rounded-3xl p-6 md:p-10 shadow-sm mb-12">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 bg-kinkonac-orange/10 text-kinkonac-orange text-sm font-bold rounded-lg mb-4">
                {article.category[locale]}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-kinkonac-navy leading-tight mb-6">
                {article.title[locale]}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-slate-light border-b border-gray-100 pb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-kinkonac-navy font-bold">
                    {article.author.charAt(0)}
                  </div>
                  <span className="font-medium text-kinkonac-navy">{article.author}</span>
                </div>
                <span>•</span>
                <span>{article.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  {article.views}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  {article.readTime} min read
                </span>
              </div>
            </div>

            {/* Featured Image Placeholder */}
            <div className="w-full h-64 md:h-96 bg-gray-100 rounded-2xl mb-10 relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-kinkonac-navy/10 to-kinkonac-navy/5" />
               <svg className="w-20 h-20 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
               </svg>
            </div>

            {/* Summary Highlight */}
            <div className="bg-kinkonac-navy/5 border-l-4 border-kinkonac-orange p-5 rounded-r-xl mb-8">
              <p className="text-lg font-medium text-kinkonac-navy italic">
                {article.summary[locale]}
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none text-text-slate">
               {renderContent(article.content[locale])}
            </div>

            {/* Tags / Share */}
            <div className="mt-12 pt-6 border-t border-gray-100 flex items-center justify-between">
               <div className="flex gap-2">
                 <span className="px-3 py-1 bg-gray-100 text-text-slate text-sm rounded-lg hover:bg-gray-200 cursor-pointer transition-colors">#LaserCutting</span>
                 <span className="px-3 py-1 bg-gray-100 text-text-slate text-sm rounded-lg hover:bg-gray-200 cursor-pointer transition-colors">#AirCompressor</span>
               </div>
               <div className="flex items-center gap-3">
                 <span className="text-sm text-text-slate-light font-medium">Share:</span>
                 <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                 </button>
               </div>
            </div>
          </article>

          {/* Related Articles */}
          <div>
            <h3 className="text-2xl font-bold text-kinkonac-navy mb-6">Related News</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedArticles.map(related => (
                <Link key={related.id} href={`/news/${related.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="h-32 bg-gray-200 relative overflow-hidden">
                     <div className="absolute inset-0 bg-gradient-to-br from-kinkonac-navy/30 to-kinkonac-navy/10 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-bold text-kinkonac-orange mb-2 block">{related.category[locale]}</span>
                    <h4 className="font-bold text-kinkonac-navy text-sm group-hover:text-kinkonac-orange transition-colors duration-200 line-clamp-2">
                      {related.title[locale]}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
