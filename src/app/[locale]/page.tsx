import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import CategoryShowcase from '@/components/CategoryShowcase';
import FeaturedProducts from '@/components/FeaturedProducts';
import HomeUSP from '@/components/HomeUSP';
import HomeContactCTA from '@/components/HomeContactCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <CategoryShowcase />
        <FeaturedProducts />
        <HomeUSP />
        <HomeContactCTA />
      </main>
      <Footer />
    </div>
  );
}
