import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutContent from '@/components/AboutContent';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}
