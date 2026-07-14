import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsContent from '@/components/NewsContent';

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <NewsContent />
      </main>
      <Footer />
    </div>
  );
}
