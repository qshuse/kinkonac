'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const t = useTranslations('Home');
  const featuredProducts = products.slice(0, 6);

  return (
    <section className="py-16 lg:py-24 bg-bg-silver relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-kinkonac-navy mb-4 tracking-tight">
              {t('featuredTitle')}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-kinkonac-orange to-kinkonac-orange-light rounded-full mb-6" />
            <p className="text-text-slate-light text-lg leading-relaxed">
              {t('featuredSubtitle')}
            </p>
          </div>
          
          <Link 
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-kinkonac-navy font-semibold rounded-xl hover:border-kinkonac-orange hover:text-kinkonac-orange shadow-sm hover:shadow transition-all duration-300"
          >
            {t('viewAll')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-10 sm:hidden flex justify-center">
          <Link 
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-kinkonac-navy text-white font-semibold rounded-xl hover:bg-kinkonac-navy-light shadow-md transition-all duration-300 w-full justify-center"
          >
            {t('viewAll')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
