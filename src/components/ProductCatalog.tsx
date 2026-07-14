'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { products } from '@/data/products';
import { categories } from '@/data/category';
import type { Locale } from '@/data/types';
import ProductCard from './ProductCard';

import { useSearchParams } from 'next/navigation';

export default function ProductCatalog() {
  const t = useTranslations('Products');
  const locale = useLocale() as Locale;
  const searchParams = useSearchParams();
  
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('all');
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Sync search query and category from URL when it changes
  useEffect(() => {
    const q = searchParams.get('q');
    const cat = searchParams.get('category');
    
    if (q) setSearchQuery(q);
    
    if (cat) {
      setActiveCategory(cat);
      setExpandedCategories(prev => prev.includes(cat) ? prev : [...prev, cat]);
    } else {
      // If URL doesn't have a category, reset to all
      setActiveCategory('all');
    }
  }, [searchParams]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, activeSubCategory, searchQuery]);

  // Memoize subcategories per category based on products data
  const categorySubcategories = categories.reduce((acc, cat) => {
    const subCats = new Set<string>();
    products.filter(p => p.categoryId === cat.id).forEach(p => {
      if (p.subCategory && p.subCategory[locale]) {
        subCats.add(p.subCategory[locale]);
      }
    });
    acc[cat.id] = Array.from(subCats);
    return acc;
  }, {} as Record<string, string[]>);

  const filteredProducts = products.filter((product) => {
    if (activeCategory !== 'all' && product.categoryId !== activeCategory) return false;
    if (activeSubCategory !== 'all' && product.subCategory[locale] !== activeSubCategory) return false;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      const name = product.modelName[locale].toLowerCase();
      const features = product.features[locale].join(' ').toLowerCase();
      if (!name.includes(query) && !features.includes(query)) return false;
    }

    return true;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'CAT-AIR-COMPRESSOR': return <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />;
      case 'CAT-ACCESSORY': return <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />;
      case 'CAT-AIR-DRYER': return <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />;
      case 'CAT-AIR-TANK': return <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />;
      case 'CAT-AIR-FILTER': return <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />;
      case 'CAT-COMPRESSOR-OIL': return <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />;
      case 'CAT-SPARE-PARTS': return <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />;
      default: return <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />;
    }
  };

  return (
    <section id="products" className="py-12 lg:py-16 bg-bg-silver min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Sidebar */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
              <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                <h3 className="font-bold text-kinkonac-navy text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-kinkonac-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  {t('sectionTitle')}
                </h3>
              </div>

              <div className="flex flex-col py-2">
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveSubCategory('all');
                    setExpandedCategories([]);
                  }}
                  className={`flex items-center px-5 py-3 text-sm font-medium transition-colors ${activeCategory === 'all' ? 'text-kinkonac-orange bg-kinkonac-navy/5' : 'text-text-slate hover:bg-gray-50'
                    }`}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  {t('allProducts')}
                </button>

                {categories.map((category) => {
                  const isExpanded = expandedCategories.includes(category.id);
                  const isActive = activeCategory === category.id;
                  const subCats = categorySubcategories[category.id] || [];

                  return (
                    <div key={category.id} className="flex flex-col">
                      <div className={`group flex items-center justify-between text-sm font-medium transition-colors ${isActive ? 'text-kinkonac-orange bg-kinkonac-navy/5' : 'text-text-slate hover:bg-gray-50'}`}>
                        <button
                          onClick={() => {
                            setActiveCategory(category.id);
                            setActiveSubCategory('all');
                            if (!expandedCategories.includes(category.id)) {
                              setExpandedCategories(prev => [...prev, category.id]);
                            }
                          }}
                          className="flex-1 flex items-center gap-3 px-5 py-3 text-left"
                        >
                          <svg className={`w-5 h-5 transition-colors ${isActive ? 'text-kinkonac-orange' : 'text-gray-400 group-hover:text-kinkonac-orange'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            {getCategoryIcon(category.id)}
                          </svg>
                          <span className="text-left">{category.name[locale]}</span>
                        </button>
                        {subCats.length > 0 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedCategories(prev => 
                                prev.includes(category.id) ? prev.filter(id => id !== category.id) : [...prev, category.id]
                              );
                            }}
                            className="px-5 py-3 text-gray-400 hover:text-kinkonac-orange transition-colors"
                          >
                            <svg className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-90 text-kinkonac-orange' : 'group-hover:text-kinkonac-orange'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        )}
                      </div>

                      {isExpanded && subCats.length > 0 && (
                        <div className="flex flex-col bg-gray-50/50 pb-2 pt-1 border-y border-gray-50">
                          {subCats.map((subCat) => (
                            <button
                              key={subCat}
                              onClick={() => {
                                setActiveCategory(category.id);
                                setActiveSubCategory(subCat);
                              }}
                              className={`text-left pl-13 pr-4 py-2.5 text-sm transition-colors ${activeSubCategory === subCat
                                ? 'text-kinkonac-orange font-semibold bg-white shadow-sm border-l-2 border-kinkonac-orange'
                                : 'text-text-slate-light hover:text-kinkonac-orange hover:bg-white border-l-2 border-transparent'
                                }`}
                            >
                              <span className="ml-12 block -indent-12">• {subCat}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Right Main Content */}
          <div className="flex-1">
            {/* Search Box */}
            <div className="mb-8 w-full relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-kinkonac-navy/20 focus:border-kinkonac-navy transition-all shadow-sm"
              />
              <svg className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 bg-gray-100 rounded-full"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Product Grid */}
            {displayedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {displayedProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>

                {/* Pagination UI */}
                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center items-center gap-2">
                    <button
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-xl text-sm font-semibold transition-colors ${currentPage === page
                          ? 'bg-kinkonac-orange text-white shadow-md'
                          : 'bg-white border border-gray-200 text-text-slate-light hover:border-kinkonac-orange hover:text-kinkonac-orange'
                          }`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-3xl border border-gray-100 p-12 text-center shadow-sm">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-kinkonac-navy mb-2">Không tìm thấy sản phẩm</h3>
                <p className="text-text-slate-light">Vui lòng thử điều chỉnh lại bộ lọc hoặc từ khóa tìm kiếm.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
