'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState } from 'react';
import { products } from '@/data/products';
import type { Product, Locale } from '@/data/types';
import { companyInfo } from '@/data/company';
import ProductCard from './ProductCard';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const t = useTranslations('Products');
  const tOffer = useTranslations('OfferForm');
  const locale = useLocale() as Locale;
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const modelName = product.modelName[locale];
  const subCategory = product.subCategory[locale];
  const features = product.features[locale];

  const relatedProducts = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left: Image Gallery */}
          <div className="p-8 lg:p-12 bg-bg-silver flex flex-col items-center justify-center relative">
            {product.images && product.images.length > 0 ? (
              <>
                <div className="relative group/img cursor-pointer" onClick={() => setIsZoomed(true)}>
                  <img
                    src={product.images[activeImageIndex]}
                    alt={modelName}
                    className="w-full max-w-lg h-auto object-contain rounded-xl shadow-sm bg-white p-4 transition-transform duration-300 group-hover/img:scale-[1.02]"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur shadow-sm p-2 rounded-lg opacity-0 group-hover/img:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>

                {/* Thumbnails */}
                {product.images.length > 1 && (
                  <div className="flex flex-wrap gap-4 justify-center mt-8">
                    {product.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`w-20 h-20 bg-white rounded-xl overflow-hidden border-2 transition-all shadow-sm ${activeImageIndex === index
                          ? 'border-kinkonac-orange scale-105 opacity-100'
                          : 'border-transparent hover:border-gray-300 opacity-60 hover:opacity-100'
                          }`}
                      >
                        <img src={img} alt={`${modelName} ${index + 1}`} className="w-full h-full object-contain p-2" />
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="w-full aspect-square max-w-md bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}

            {/* Category Badge */}
            <div className="absolute top-8 left-8">
              <span className="inline-flex items-center px-4 py-1.5 text-sm font-bold bg-kinkonac-navy text-white rounded-full shadow-md">
                {subCategory}
              </span>
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="p-8 lg:p-12">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-kinkonac-navy mb-4 tracking-tight">
              {modelName}
            </h1>

            <div className="w-16 h-1.5 bg-gradient-to-r from-kinkonac-orange to-kinkonac-orange-light rounded-full mb-8" />

            {/* Features */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-text-slate mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-kinkonac-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('features')}
              </h3>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-slate-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-kinkonac-orange mt-2 shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-text-slate mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-kinkonac-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t('specifications')}
              </h3>
              <div className="bg-bg-silver rounded-xl overflow-hidden border border-gray-100">
                <table className="w-full text-left text-sm">
                  <tbody className="divide-y divide-gray-200">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <tr key={key} className="hover:bg-white/50 transition-colors">
                        <td className="px-5 py-3 font-semibold text-text-slate w-1/3 bg-gray-50/50">
                          {/* Transform keys into readable labels */}
                          {key.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').trim()}
                        </td>
                        <td className="px-5 py-3 text-text-slate-light">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
              <a
                href={companyInfo.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0068FF] text-white font-bold text-base rounded-xl hover:bg-[#0054cc] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Custom Zalo Icon */}
                <div className="w-6 h-6 bg-white text-[#0068FF] rounded-md flex items-center justify-center font-black text-[9px] tracking-tighter">
                  Zalo
                </div>
                {t('contactZalo')}
              </a>
              <a
                href={`tel:${companyInfo.phones[0]}`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-kinkonac-navy text-kinkonac-navy font-bold text-base rounded-xl hover:bg-kinkonac-navy hover:text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {companyInfo.phones[0]}
              </a>
            </div>

            {/* Offer Registration Form */}
            <div className="mt-8 p-6 sm:p-8 bg-[#e2e8f0]/60 rounded-xl border border-gray-200/60 text-center">
              <h4 className="text-lg sm:text-xl font-bold text-text-slate mb-5">
                {tOffer('title')}
              </h4>
              {isSubmitted ? (
                <div className="py-4 px-6 bg-green-50 rounded-xl border border-green-200 text-green-700 flex flex-col items-center gap-2 animate-fade-in">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-bold">{tOffer('successTitle')}</p>
                  <p className="text-sm text-center">{tOffer('successDesc')}</p>
                </div>
              ) : (
                <form
                  className="flex flex-col gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const rawDigits = phone.replace(/\D/g, '');
                    const cleanPhone = phone.trim().replace(/\s+/g, '');
                    const isVnPhone = /^(0|\+?84)[35789][0-9]{8}$/.test(cleanPhone);
                    const isGeneralPhone = rawDigits.length >= 9 && rawDigits.length <= 11;

                    if (!phone.trim()) {
                      setPhoneError(tOffer('requiredError'));
                      return;
                    }

                    if (!isVnPhone && !isGeneralPhone) {
                      setPhoneError(tOffer('invalidError'));
                      return;
                    }

                    setPhoneError('');
                    setIsSubmitted(true);

                    // Gửi dữ liệu tới Google Sheets thông qua Google Apps Script URL
                    const scriptURL = 'https://script.google.com/macros/s/AKfycbx5lnyopDPPnPm-qQvwAHa6dr09xurnA_Bu9Np1DfsB-0kFAkjK4skYQqL_hl2J7Dg7/exec';

                    const formData = new FormData();
                    formData.append('phone', phone);
                    formData.append('product', modelName);
                    formData.append('time', new Date().toLocaleString('vi-VN'));

                    fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' })
                      .then(() => {
                        console.log('Đã lưu vào Google Sheets');
                        setTimeout(() => setIsSubmitted(false), 5000);
                      })
                      .catch((error) => console.error('Lỗi khi lưu:', error.message));
                  }}
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1 relative">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          // Tự động lọc bỏ các ký tự chữ cái / ký tự đặc biệt không hợp lệ
                          const sanitized = e.target.value.replace(/[^\d\s\+\-\(\)]/g, '');
                          setPhone(sanitized);
                          if (phoneError) setPhoneError('');
                        }}
                        placeholder={tOffer('placeholder')}
                        className={`w-full px-5 py-3.5 rounded-full border ${
                          phoneError
                            ? 'border-red-500 ring-2 ring-red-200 bg-red-50/50'
                            : 'border-transparent focus:border-kinkonac-navy focus:ring-2 focus:ring-kinkonac-navy/20'
                        } focus:outline-none shadow-sm transition-all text-center sm:text-left`}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-kinkonac-navy text-white font-bold rounded-full hover:bg-kinkonac-navy-light transition-colors shadow-md whitespace-nowrap"
                    >
                      {tOffer('submitBtn')}
                    </button>
                  </div>
                  {phoneError && (
                    <p className="text-xs font-semibold text-red-500 text-center sm:text-left px-4 mt-1 animate-fade-in">
                      ⚠️ {phoneError}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 lg:mt-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-kinkonac-navy tracking-tight">
              {t('relatedProducts')}
            </h2>
            <div className="h-1 flex-1 bg-gradient-to-r from-gray-200 to-transparent ml-8 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
            {relatedProducts.map((p, index) => (
              <ProductCard key={p.id} product={p} index={index} />
            ))}
          </div>
        </div>
      )}

      {/* Fullscreen Image Zoom Modal */}
      {isZoomed && product.images?.[activeImageIndex] && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setIsZoomed(false)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
            onClick={() => setIsZoomed(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <img
            src={product.images[activeImageIndex]}
            alt={modelName}
            className="w-full max-w-5xl max-h-[85vh] object-contain rounded-xl shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
        </div>
      )}
    </div>
  );
}
