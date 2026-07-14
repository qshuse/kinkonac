import { getTranslations } from 'next-intl/server';
import { products } from '@/data/products';
import { categories } from '@/data/category';
import type { Locale } from '@/data/types';
import { Link } from '@/i18n/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Categories' });
  return {
    title: t('pageTitle'),
    description: t('pageSubtitle'),
  };
}

export default async function CategoriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Categories' });

  return (
    <main className="min-h-screen bg-bg-silver py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-kinkonac-navy mb-6 tracking-tight">
            {t('pageTitle')}
          </h1>
          <p className="text-lg text-text-slate-light">
            {t('pageSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            // Find the first product of this category to use its image as thumbnail
            const firstProduct = products.find(p => p.categoryId === category.id);
            const imageSrc = firstProduct?.images?.[0] || '/logo.jpg';

            return (
              <Link
                key={category.id}
                href={`/products?category=${category.id}`}
                className="group flex flex-col bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-kinkonac-orange/30 transition-all duration-300"
              >
                <div className="relative h-64 w-full bg-gray-50 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-kinkonac-navy/5 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={imageSrc}
                    alt={category.name[locale as Locale]}
                    className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h2 className="text-2xl font-bold text-text-slate group-hover:text-kinkonac-orange transition-colors mb-3">
                    {category.name[locale as Locale]}
                  </h2>
                  <p className="text-text-slate-light mb-6 flex-1 line-clamp-3">
                    {category.description[locale as Locale]}
                  </p>
                  <div className="flex items-center text-kinkonac-navy font-semibold group-hover:text-kinkonac-orange transition-colors">
                    <span>{t('viewProducts')}</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
