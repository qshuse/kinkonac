'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Product, Locale } from '@/data/types';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const t = useTranslations('Products');
  const locale = useLocale() as Locale;

  const modelName = product.modelName[locale];
  const subCategory = product.subCategory[locale];
  const features = product.features[locale];

  // Determine if this is a compressor (has power_KW) or accessory
  const isCompressor = !!product.specs.power_KW;

  return (
    <div
      className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 card-lift opacity-0 animate-slide-up stagger-${Math.min(index + 1, 5)} flex flex-col h-full`}
    >
      {/* Image Container */}
      <Link href={`/products/${product.id}`} className="relative h-52 sm:h-56 overflow-hidden block group/img">
        <img
          src={product.images?.[0] || '/demo.jpg'}
          alt={modelName}
          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
        />

        {/* Power badge for compressors */}
        {product.specs.power_KW && (
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-kinkonac-orange/90 backdrop-blur-sm text-white text-sm font-bold rounded-lg shadow-md">
            {product.specs.power_KW} KW
          </div>
        )}

        {/* Category badge */}
        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/30">
            {subCategory}
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Model Name */}
        <h3 className="text-base sm:text-lg font-bold text-text-slate leading-snug mb-3 group-hover:text-kinkonac-navy transition-colors duration-200 line-clamp-2 min-h-[2.75rem]">
          {modelName}
        </h3>

        {/* Quick Specs Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {product.specs.power_KW && (
            <div className="flex items-center gap-2 px-3 py-2 bg-bg-silver rounded-lg h-full">
              <svg className="w-4 h-4 text-kinkonac-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] text-text-slate-light font-medium uppercase truncate">{t('power')}</p>
                <p className="text-sm font-bold text-text-slate truncate">{product.specs.power_KW} KW</p>
              </div>
            </div>
          )}

          {product.specs.exhaustPressure_MPA && (
            <div className="flex items-center gap-2 px-3 py-2 bg-bg-silver rounded-lg h-full">
              <svg className="w-4 h-4 text-kinkonac-navy shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] text-text-slate-light font-medium uppercase truncate">{t('pressure')}</p>
                <p className="text-sm font-bold text-text-slate truncate">{product.specs.exhaustPressure_MPA} MPa</p>
              </div>
            </div>
          )}

          {product.specs.volumeFlow_m3_min && (
            <div className="flex items-center gap-2 px-3 py-2 bg-bg-silver rounded-lg h-full">
              <svg className="w-4 h-4 text-kinkonac-navy shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] text-text-slate-light font-medium uppercase truncate">{t('flowRate')}</p>
                <p className="text-sm font-bold text-text-slate truncate">{product.specs.volumeFlow_m3_min} m³/min</p>
              </div>
            </div>
          )}

          {(product.specs.voltage || product.specs.refrigerant) && (
            <div className="flex items-center gap-2 px-3 py-2 bg-bg-silver rounded-lg h-full">
              <svg className="w-4 h-4 text-kinkonac-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
              </svg>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] text-text-slate-light font-medium uppercase truncate">
                  {product.specs.voltage ? t('voltage') : 'Refrigerant'}
                </p>
                <p className="text-xs font-bold text-text-slate truncate">
                  {product.specs.voltage || product.specs.refrigerant}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Features preview */}
        <div className="mb-5">
          <ul className="space-y-1.5">
            {features.slice(0, 2).map((feature, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-text-slate-light">
                <svg className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="line-clamp-1">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <Link 
          href={`/products/${product.id}`}
          className="mt-auto w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-kinkonac-navy/20 text-kinkonac-navy font-semibold text-sm rounded-xl hover:bg-kinkonac-navy hover:text-white hover:border-kinkonac-navy transition-all duration-300 group/btn"
        >
          {t('viewDetails')}
          <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
