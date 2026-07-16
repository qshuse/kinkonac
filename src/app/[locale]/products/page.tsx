import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCatalog from '@/components/ProductCatalog';
import ProductsHero from '@/components/ProductsHero';

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ProductsHero />
        <Suspense fallback={<div className="py-12 text-center text-text-slate-light">Loading catalog...</div>}>
          <ProductCatalog />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
