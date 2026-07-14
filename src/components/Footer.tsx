'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { companyInfo } from '@/data/company';

export default function Footer() {
  const t = useTranslations('Footer');
  const [showWechat, setShowWechat] = useState(false);

  return (
    <footer id="contact" className="bg-kinkonac-navy-dark text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-kinkonac-orange to-kinkonac-orange-light rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="text-2xl font-extrabold tracking-tight">
                  KINKO<span className="text-kinkonac-orange">NAC</span>
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-md mb-6">
              {t('description')}
            </p>
            <p className="text-white/40 text-xs">
              {t('companyName')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-5">
              {t('quickLinks')}
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { key: 'home', href: '/' },
                { key: 'about', href: '/about' },
                { key: 'products', href: '/products' },
                { key: 'news', href: '/news' },
                { key: 'contact', href: '#contact' },
              ].map((item) => (
                item.href.startsWith('#') ? (
                  <a
                    key={item.key}
                    href={item.href}
                    className="text-sm text-white/50 hover:text-kinkonac-orange transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {t(item.key as 'home' | 'about' | 'products' | 'news' | 'contact')}
                  </a>
                ) : (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="text-sm text-white/50 hover:text-kinkonac-orange transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {t(item.key as 'home' | 'about' | 'products' | 'news' | 'contact')}
                  </Link>
                )
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white/80 mb-5">
              {t('contactInfo')}
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-kinkonac-orange shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm text-white/50 leading-relaxed">{companyInfo.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-kinkonac-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex flex-col gap-1">
                  {companyInfo.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone}`} className="text-sm text-white/50 hover:text-kinkonac-orange transition-colors">
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-kinkonac-orange shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${companyInfo.email}`} className="text-sm text-white/50 hover:text-kinkonac-orange transition-colors">
                  {companyInfo.email}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={companyInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-600 flex items-center justify-center text-white/70 hover:text-white transition-all"
                title="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href={companyInfo.social.zalo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-blue-500 flex items-center justify-center text-white/70 hover:text-white transition-all font-bold text-[10px]"
                title="Zalo"
              >
                Zalo
              </a>
              <button
                onClick={() => setShowWechat(true)}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#07C160] flex items-center justify-center text-white/70 hover:text-white transition-all font-bold text-[8px]"
                title="WeChat"
              >
                WeChat
              </button>
            </div>

          </div>

          {/* Google Maps Embed (Full Width in Grid) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 rounded-2xl overflow-hidden h-64 lg:h-80 w-full border border-white/10 opacity-80 hover:opacity-100 transition-opacity mt-2 relative group">
            <iframe
              title="Google Maps Location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(companyInfo.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/30">{t('copyright')}</p>
            <div className="flex items-center gap-1 text-xs text-white/30">
              <span>Est. {companyInfo.establishedYear}</span>
              <span className="mx-2">•</span>
              <span>Made in Vietnam 🇻🇳</span>
            </div>
          </div>
        </div>
      </div>

      {/* WeChat QR Modal */}
      {showWechat && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in" onClick={() => setShowWechat(false)}>
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center relative animate-slide-up text-slate-800" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowWechat(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="w-16 h-16 bg-[#07C160] text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-xl">WeChat</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{useTranslations('WechatModal')('title')}</h3>
            <p className="text-slate-500 text-sm mb-6">{useTranslations('WechatModal')('description')}</p>
            <div className="border-4 border-dashed border-gray-200 rounded-2xl p-4 mb-4 flex items-center justify-center aspect-square">
              <img src="/wechat.jpg" alt="WeChat QR Code" className="w-full h-full object-contain rounded-xl" onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `<span class="text-gray-400 text-sm font-medium">${useTranslations('WechatModal')('errorMsg')}</span>`;
              }}/>
            </div>
            <p className="text-sm font-semibold text-[#07C160]">Kinkonac CNC</p>
          </div>
        </div>
      )}
    </footer>
  );
}
