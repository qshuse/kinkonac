'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { companyInfo } from '@/data/company';

export default function FloatingContact() {
  const [showWechat, setShowWechat] = useState(false);
  const t = useTranslations('WechatModal');

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        {/* Facebook */}
        <a
          href={companyInfo.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          title="Facebook"
        >
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
          </svg>
        </a>

        {/* Messenger */}
        <a
          href={companyInfo.social.messenger}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-[#0084FF] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
          title="Messenger"
        >
          <svg className="w-10 h-10 relative z-10" fill="currentColor" viewBox="0 0 256 256">
            <path d="M128,24C68.4,24,20,68.6,20,123.6c0,31.4,15.7,59.3,40.1,77.7v35c0,4.8,5.4,7.6,9.3,4.9l36.5-24.9c7.1,1.9,14.5,2.9,22.1,2.9c59.6,0,108-44.6,108-99.6S187.6,24,128,24z M144.3,158.1l-24.6-26.3c-2.3-2.4-6.1-2.5-8.5-0.1l-36.2,33.9c-3.5,3.2-8.5-1.5-5.6-5.2l29.4-38.3c2.2-2.9,6-3.8,9.2-2.3l24.6,11.8c2.2,1,4.8,0.7,6.8-0.9l36.4-29.8c3.5-2.8,8.1,2,5.2,5.3L144.3,158.1z"/>
          </svg>
        </a>

        {/* WeChat */}
        <button
          onClick={() => setShowWechat(true)}
          className="w-16 h-16 rounded-full bg-[#07C160] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          title="WeChat"
        >
          <span className="font-bold text-sm tracking-tighter">WeChat</span>
        </button>

        {/* Zalo */}
        <a
          href={companyInfo.social.zalo}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-[#0068FF] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group"
          title="Zalo"
        >
          <div className="absolute inset-0 bg-[#0068FF] rounded-full animate-ping opacity-75 group-hover:hidden" />
          <span className="font-bold text-lg relative z-10">Zalo</span>
        </a>
      </div>

      {/* WeChat QR Modal */}
      {showWechat && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in" onClick={() => setShowWechat(false)}>
          <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center relative animate-slide-up" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setShowWechat(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <div className="w-16 h-16 bg-[#07C160] text-white rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="font-bold text-xl">WeChat</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{t('title')}</h3>
            <p className="text-slate-500 text-sm mb-6">{t('description')}</p>
            <div className="border-4 border-dashed border-gray-200 rounded-2xl p-4 mb-4 flex items-center justify-center aspect-square">
              {/* Replace src with the actual QR code image */}
              <img src="/wechat.jpg" alt="WeChat QR Code" className="w-full h-full object-contain rounded-xl" onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `<span class="text-gray-400 text-sm font-medium">${t('errorMsg')}</span>`;
              }}/>
            </div>
            <p className="text-sm font-semibold text-[#07C160]">Kinkonac CNC</p>
          </div>
        </div>
      )}
    </>
  );
}
