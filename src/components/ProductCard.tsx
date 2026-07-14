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
      {/* Image Placeholder - Industrial Gradient */}
      <Link href={`/products/${product.id}`} className="relative h-52 sm:h-56 overflow-hidden block group/img">
        {product.images?.[0] ? (
          <img src={product.images[0]} alt={modelName} className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500" />
        ) : (
          <>
            <div className={`absolute inset-0 ${
              isCompressor
                ? 'bg-gradient-to-br from-kinkonac-navy/90 via-kinkonac-navy-light/80 to-kinkonac-navy/70'
                : 'bg-gradient-to-br from-text-slate/80 via-text-slate-light/70 to-text-slate/60'
            }`} />

            {/* Decorative pattern */}
            <div className="absolute inset-0 industrial-pattern opacity-20" />

            {/* Floating gear icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <svg className="w-20 h-20 text-white/15 group-hover/img:rotate-45 transition-transform duration-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97 0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1 0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.08.73 1.69.98l.38 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.98l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64L19.43 12.97z" />
                </svg>
              </div>
            </div>
          </>
        )}

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
