import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import FloatingContact from '@/components/FloatingContact';
import "../globals.css";

export const metadata: Metadata = {
  title: "KINKONAC | Premium Laser Air Compressors",
  description: "Industry-leading compressed air solutions for laser cutting machines. Specialized screw air compressors with superior performance and energy efficiency.",
  keywords: "air compressor, laser compressor, KINKONAC, máy nén khí, 空压机, industrial compressor",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'vi' | 'en' | 'zh')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-bg-silver text-text-slate">
        <NextIntlClientProvider messages={messages}>
          {children}
          <FloatingContact />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
